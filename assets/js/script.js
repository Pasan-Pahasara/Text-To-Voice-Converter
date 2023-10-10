let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
});
