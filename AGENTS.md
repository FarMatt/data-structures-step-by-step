# AGENTS.md

## Project purpose

Build and maintain **Data Structures, Step by Step**, a small study site for beginners learning the data structures covered in an introductory algorithms course. The site uses short explanations, concrete examples, and small interactions to make each idea easier to picture. Readers should be able to explain the main idea after reading a lesson.

## Audience and voice

- Write for a student who is seeing the concept for the first time.
- Use plain English, short paragraphs, and familiar examples.
- Define a technical word the first time it appears.
- Explain what a pointer or index refers to before using it in an example.
- Prefer a small worked example over a long abstract definition.
- Be encouraging without talking down to the reader.
- Do not claim that a structure is unlimited or always faster. State the conditions that matter.

## Page structure

- `index.html` is the only page for now. It provides the site introduction, lesson cards, a queue demo, and a short closing summary.
- `content/lessons.json` is the source of truth for lesson text and examples. Add lessons there so the page can render them consistently.
- `styles/site.css` contains all presentation rules.
- `scripts/site.js` renders lessons and runs the queue demo.
- `README.md` explains how to preview and extend the project.
- Keep all paths relative so the site works from the repository root and on GitHub Pages.

## Lesson format

Each lesson entry in `content/lessons.json` must have these fields:

- `id`: short, unique, lowercase kebab-case name.
- `title`: concise topic name.
- `level`: one of `Basics`, `Lists`, `Trees`, or another clearly explained category.
- `summary`: one or two sentences saying what the structure is for.
- `walkthrough`: a concrete example in one or two sentences.
- `takeaway`: one sentence that captures the key idea or trade-off.
- `diagram`: a short text diagram made with ordinary characters when it helps.

Keep each lesson focused on one concept. Keep summaries below 45 words and takeaways below 25 words. Do not use unexplained notation or copy textbook paragraphs. Check technical details against a reliable course text or lecture source and cite any non-obvious borrowed material in the lesson.

## Visual and interaction rules

- Keep the calm, high-contrast palette: deep ink `#172b4d`, teal `#087e8b`, warm orange `#f4a261`, and a light paper background `#f7f8fa`.
- Use a single-column reading flow on small screens and a two-column lesson grid when space allows.
- Preserve visible keyboard focus, semantic headings, accessible button names, and readable color contrast.
- Interactions must be optional; lesson meaning must remain available without JavaScript.
- Do not add animation that flashes or moves essential content.
- Avoid external fonts, trackers, frameworks, or dependencies unless the maintainer requests them.

## Adding or changing content

1. Read this file and the existing lesson entries before editing.
2. Add a new lesson as one complete JSON object using the format above. Keep IDs unique and use plain text in JSON strings.
3. If the lesson needs a diagram, keep it short and describe its meaning in nearby text.
4. Update the page only when the shared layout or interaction needs to change. Do not duplicate lesson cards by hand in `index.html`.
5. Keep the site useful on mobile, keyboard accessible, and understandable without color alone.
6. Update the README if the preview or publishing steps change.
7. Before finishing, open the site through a local web server and check the page, navigation, lesson cards, and queue buttons. Also check the browser console for errors.

## File naming and scope

- Use lowercase kebab-case for new content, scripts, and style files.
- Put lesson data in `content/`, browser code in `scripts/`, styles in `styles/`, and local images in `assets/`.
- Do not add generated files, credentials, student personal information, or unrelated coursework.
- Keep the project static so it can be hosted on GitHub Pages without a build step.

## Completion standard

A change is ready when the lesson is accurate, concise, consistent with this guide, readable on a phone, usable by keyboard, and the site loads without errors from its repository root.
