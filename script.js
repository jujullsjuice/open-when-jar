const notes = [
"I'm with you through the good times, and definitely through the heavy ones.",
"I admire that you protect your energy when you need space.",
"I love how we can go from serious to chaotic in minutes.",
"You’re not difficult to be with.",
"I admire how much you care.",
"I love how smart you are.",
"I hope you are taking care of yourself.",
"I hope you are eating well.",
"You’re not a burden.",
"I appreciate you so much.",
"We’ll figure things out together.",
"You’re allowed to rest.",
"I like being with you.",
"You do not disappoint me.",
"You matter to me."
];

const jar = document.getElementById("jar");
const popup = document.getElementById("notePopup");
const noteText = document.getElementById("noteText");

jar.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * notes.length);
  noteText.innerText = notes[randomIndex];

  popup.classList.remove("hidden");
  popup.style.display = "flex";

});

function closeNote() {
  popup.classList.add("hidden");
  popup.style.display = "none";
}
