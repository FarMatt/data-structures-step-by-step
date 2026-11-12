async function loadLessons() {
  const grid = document.querySelector("#lesson-grid");
  try {
    const response = await fetch("content/lessons.json");
    if (!response.ok) throw new Error("Lesson file could not be loaded.");
    const lessons = await response.json();
    grid.replaceChildren(...lessons.map(makeLessonCard));
  } catch (error) {
    grid.innerHTML = '<p class="loading-message">The lessons could not load. Start the local web server described in the README, then refresh.</p>';
    console.error(error);
  }
}

function makeLessonCard(lesson) {
  const article = document.createElement("article");
  article.className = "lesson-card";
  const level = document.createElement("span");
  level.className = "level";
  level.textContent = lesson.level;
  const title = document.createElement("h3");
  title.textContent = lesson.title;
  const summary = document.createElement("p");
  summary.textContent = lesson.summary;
  const walkthrough = document.createElement("p");
  walkthrough.textContent = lesson.walkthrough;
  const diagram = document.createElement("pre");
  diagram.setAttribute("aria-label", `${lesson.title} diagram`);
  diagram.textContent = lesson.diagram;
  const takeaway = document.createElement("p");
  takeaway.className = "takeaway";
  takeaway.textContent = lesson.takeaway;
  article.append(level, title, summary, walkthrough, diagram, takeaway);
  return article;
}

const queue = [];
const queueItems = document.querySelector("#queue-items");
const queueStatus = document.querySelector("#queue-status");
const queueInput = document.querySelector("#queue-input");

function drawQueue() {
  if (queue.length === 0) {
    const empty = document.createElement("span");
    empty.className = "empty-state";
    empty.textContent = "Your queue is empty";
    queueItems.replaceChildren(empty);
    return;
  }
  queueItems.replaceChildren(...queue.map((value, index) => {
    const item = document.createElement("span");
    item.className = "queue-item";
    item.textContent = value;
    item.setAttribute("aria-label", `${value}${index === 0 ? ", next to leave" : ""}`);
    return item;
  }));
}

document.querySelector("#enqueue-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = queueInput.value.trim();
  if (!value) return;
  queue.push(value);
  queueStatus.textContent = `${value} joined at the tail. There ${queue.length === 1 ? "is" : "are"} ${queue.length} ${queue.length === 1 ? "item" : "items"} in the queue.`;
  queueInput.value = "";
  queueInput.focus();
  drawQueue();
});

document.querySelector("#dequeue-button").addEventListener("click", () => {
  if (queue.length === 0) {
    queueStatus.textContent = "The queue is empty, so there is no item to remove.";
    return;
  }
  const value = queue.shift();
  queueStatus.textContent = `${value} left from the head. ${queue.length} ${queue.length === 1 ? "item remains" : "items remain"}.`;
  drawQueue();
});

loadLessons();
drawQueue();
