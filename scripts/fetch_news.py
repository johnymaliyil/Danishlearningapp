#!/usr/bin/env python3
"""Fetch today's Danish news headlines for the 📰 Dagens nyheder page.

Run by .github/workflows/news.yml a few times a day. Reads DR's public RSS feed
(falls back to TV 2), adds an English machine translation (MyMemory, free, no key)
and writes news.json next to index.html. Items that were already translated in the
previous news.json are reused, so only new headlines are sent for translation.
Standard library only.
"""
import html
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

FEEDS = [
    ("DR", "https://www.dr.dk/nyheder/service/feeds/senestenyt"),
    ("DR", "https://www.dr.dk/nyheder/service/feeds/indland"),
    ("TV 2", "https://feeds.tv2.dk/nyheder/rss"),
]
MAX_ITEMS = 15
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "news.json")
UA = "DanskKlar news fetcher (+https://danskklar.com)"


def get(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def clean(text, limit=None):
    text = html.unescape(re.sub(r"<[^>]+>", " ", text or ""))
    text = re.sub(r"\s+", " ", text).strip()
    if limit and len(text) > limit:
        text = text[:limit].rsplit(" ", 1)[0].rstrip(",;:") + " …"
    return text


def parse(source, xml_bytes):
    root = ET.fromstring(xml_bytes)
    items = []
    for it in root.iter("item"):
        title = clean(it.findtext("title"))
        link = (it.findtext("link") or "").strip()
        if not title or not link.startswith("http"):
            continue
        try:
            date = parsedate_to_datetime(it.findtext("pubDate")).astimezone(timezone.utc).isoformat()
        except Exception:
            date = None
        items.append({"source": source, "link": link, "date": date,
                      "da": {"title": title, "desc": clean(it.findtext("description"), 320)}})
    return items


def translate(text):
    if not text:
        return ""
    url = "https://api.mymemory.translated.net/get?" + urllib.parse.urlencode({"q": text, "langpair": "da|en"})
    data = json.loads(get(url))
    if data.get("quotaFinished") or int(data.get("responseStatus") or 0) != 200:
        raise RuntimeError(data.get("responseDetails") or "translation failed")
    out = html.unescape(data["responseData"]["translatedText"] or "").strip()
    if not out or out.upper().startswith(("MYMEMORY WARNING", "QUERY LENGTH LIMIT")):
        raise RuntimeError(out or "empty translation")
    return out


def main():
    items, seen = [], set()
    for source, url in FEEDS:
        try:
            for it in parse(source, get(url)):
                if it["link"] not in seen:
                    seen.add(it["link"]); items.append(it)
        except Exception as e:  # one feed down should not stop the others
            print(f"feed failed: {url}: {e}", file=sys.stderr)
        if len(items) >= MAX_ITEMS:
            break
    if not items:
        print("no news found; keeping the old news.json", file=sys.stderr)
        return 0
    items.sort(key=lambda x: x["date"] or "", reverse=True)
    items = items[:MAX_ITEMS]

    try:
        with open(OUT, encoding="utf-8") as f:
            old = {(i["link"], i["da"]["title"]): i.get("en") for i in json.load(f).get("items", [])}
    except Exception:
        old = {}

    quota_ok = True
    for it in items:
        prev = old.get((it["link"], it["da"]["title"]))
        if prev and prev.get("title"):
            it["en"] = prev
            continue
        it["en"] = None
        if not quota_ok:
            continue
        try:
            it["en"] = {"title": translate(it["da"]["title"]), "desc": translate(it["da"]["desc"])}
            time.sleep(1)
        except Exception as e:
            print(f"translation stopped: {e}", file=sys.stderr)
            quota_ok = False

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"updated": datetime.now(timezone.utc).isoformat(timespec="minutes"), "items": items},
                  f, ensure_ascii=False, indent=1)
        f.write("\n")
    print(f"wrote {len(items)} items, {sum(1 for i in items if i['en'])} translated")
    return 0


if __name__ == "__main__":
    sys.exit(main())
