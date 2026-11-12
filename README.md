# Data Structures, Step by Step

A small, beginner-friendly study site for queues, linked lists, array storage, and rooted trees. Each topic uses a short explanation and a concrete example. The queue section includes a button-based demonstration.

## Preview

The published site is available at <https://farmatt.github.io/data-structures-step-by-step/>.

Open a terminal in this folder and start a local server:

```powershell
py -m http.server 8000
```

Then visit <http://localhost:8000>.

## Add a lesson

Read `AGENTS.md`, then add an entry to `content/lessons.json` using the required fields. The site builds lesson cards from that file, so content stays consistent without copying HTML. Keep explanations original, beginner-friendly, and technically accurate.

## Hosting

GitHub Pages serves this plain static site from the `main` branch and repository root. The home page is `index.html`; no build command is needed. After pushing a change, GitHub Pages publishes the updated files automatically.
