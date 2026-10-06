# PD2 Træner 🇩🇰

A fun practice app for **Prøve i Dansk 2** with the three exam skills: reading, writing and speaking.
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
| 🎮 **Game layer** | XP, levels, daily goal, streaks, badges and confetti. |

## Adding more past papers

All content is plain JavaScript data:

- `js/data-2020.js`: the May–June 2020 exam set. Copy this file as a template for another exam set and add a `<script>` tag for it in `index.html`.
- `js/data.js`: extra reading exercises, writing tasks, speaking topics, dialogues and vocabulary.

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
