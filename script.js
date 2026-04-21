const notes = [

"You don’t have to be everything all the time.",
"I’m still here with you.",
"You’re not a burden.",
"I appreciate you so much.",
"We’ll figure things out together.",
"You’re allowed to rest.",
"I like being with you.",
"You matter to me."

];

const jar = document.getElementById("jar");
const popup = document.getElementById("notePopup");
const noteText = document.getElementById("noteText");

jar.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * notes.length);
  noteText.innerText = notes[randomIndex];

  popup.classList.remove("hidden");

});

function closeNote() {
  popup.classList.add("hidden");
}
