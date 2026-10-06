# DanskKlar 🇩🇰

A fun practice app for the Danish language exams **Prøve i Dansk 1, 2 and 3** (PD1 ≈ A2, PD2 ≈ B1, PD3 ≈ B2), covering the three exam skills: reading, writing and speaking. Live at [danskklar.com](https://danskklar.com).

Pick the exam with the **PD1 / PD2 / PD3** switch in the top bar. Each exam has its own exercises and progress.

It's a static web app with no build step and no server. Progress is saved in the browser.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

To publish it, turn on **GitHub Pages** for this repository (Settings → Pages → deploy from branch, root folder).

## What's inside

| Part | Features |
|------|----------|
| 📖 **Læsning** | The real PD2 May–June 2020 reading set (opgave 1, 3, 4, 5) with the official answer key, plus extra exercises. Exam-style tasks: short answers, fill-the-gaps from a word box, find the missing sentence, match questions to paragraphs, multiple choice, and true/false/not in the text. Optional countdown timer. |
| ✍️ **Skrivning** | Tasks for delprøve 1 (factual: emails, complaints, applications) and delprøve 2 (narrative and opinion). Live writing coach (word target, greeting/closing, connectors, paragraphs, capitals, sentence variety), clickable phrase bank, autosaved drafts, model answers, and self-assessment with the official PD2 *bedømmerark* criteria that gives an estimated 7-trins grade. |
| 🗣️ **Tale** | Monologue + follow-up questions with prep and talk timers. Dialogue role-plays. Danish text-to-speech reads the examiner's lines. Microphone recording with playback and a live Danish transcript (Chrome/Edge). |
| ⚡ **Ordjagt** | A 60-second vocabulary game with combo bonus. |
| 🇬🇧 **Hover translation** | Point the mouse at any Danish word to see its English meaning (press and hold on a phone). Toggle it with the 🇬🇧 button in the top bar. Works offline using the glossary in `js/glossary.js`. |
| 📲 **Install as app (PWA)** | Install DanskKlar on a phone, tablet or computer with its own icon and window, and use it offline. An "Installér app" button appears on the home and welcome screens (on iPhone/iPad it shows the Safari "Add to Home Screen" steps). |
| 🎮 **Game layer** | XP, levels, daily goal, streaks, badges and confetti. |

## Offline app (PWA)

- `manifest.webmanifest`: app name, icons, colours and home-screen shortcuts.
- `sw.js`: the service worker. It loads the newest files when online and falls back to the saved copy offline. **When you add a new file the app needs (for example a new exam data file), add it to `APP_FILES` in `sw.js`** so it also works offline.
- `icons/`: app icons.

The service worker only runs over HTTPS (or on `localhost`), so test it on danskklar.com or with `python3 -m http.server`.

## Content by exam

| Exam | Files | Content |
|------|-------|---------|
| PD1 (A2) | `js/data-pd1.js` | Original practice material: 4 reading tasks, 5 writing tasks, 6 speaking topics, 3 dialogues, 32 words |
| PD2 (B1) | `js/data.js`, `js/data-2020.js` | The real May–June 2020 reading set plus original practice material |
| PD3 (B2) | `js/data-pd3.js` | Original practice material: 4 reading tasks, 5 writing tasks, 6 speaking topics, 3 dialogues, 32 words |

`js/exams.js` holds each exam's name, level, descriptions and info page.

## Adding more past papers

All content is plain JavaScript data:

- `js/data-2020.js`: the PD2 May–June 2020 exam set. Copy it as a template for another exam set, and add a `<script>` tag for it in `index.html` before `js/exams.js`.
- `js/data-pd1.js` / `js/data-pd3.js`: add items to the `READING`, `WRITING`, `SPEAKING_MONO`, `SPEAKING_DIALOG` or `WORDS` lists. Give every item a unique `id`; prefixing it with the exam (for example `pd3-r5`) keeps it unique.

When you add new Danish text, also add its new words to `js/glossary.js` (one `word=translation` line each, lowercase), so the hover translation covers them.

Reading question types:

```js
{ type: "mc", q: "...", options: ["a", "b", "c"], answer: 1 }
{ type: "tf", q: "...", answer: "R" }              // R = Rigtigt, F = Forkert, S = Står ikke i teksten
{ type: "short", q: "...", accept: ["køgevej 112", "køgevej"] }
{ type: "match", q: "...", options: ["B", "C"], items: [{ n: 26, text: "...", answer: "G" }] }
{ type: "gaps", bank: [{ key: "A", text: "..." }], example: { 0: "A" }, answers: { 21: "F" } } // gaps are [[21]] in the text
```

## Notes on the 2020 set

- The question booklet for delprøve 1 was not among the uploaded files. So the opgave 1 questions were rebuilt from the official answer key, and extra questions were added. Opgave 2 is left out because its text was missing.
- The texts are from the official exam papers. They are for personal practice only.
