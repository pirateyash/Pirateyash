let noClickCount = 0;

const texts = [
  "Really?", "Why?", "Are you sure?", "Don't be shy", "Think again", "Oh, C'mon", "Why you so stubborn??", "No?", "Still no?", "Why no?", "What a weirdo", "Tap yes plzz", "I'm telling you, just tap yes!", "Stop playing!", "Just tap YES (crush)", "TAP YES", "Cutie pls tap Yes..", "YES!", "YES!!"
];

const emojis = [
  "🫤", "🙄", "🙂", "😒", "🙃", "😑", "🤨", "😕", "🧐", "🤔", "🤡", "😔", "😤", "🙂", "😠", "🥲", "🫠", "😀", "😃"
];

function No() {
  const text = document.getElementById("text");
  const emoji = document.querySelector("span");
  const noButton = document.getElementById("no");
  
  if (noClickCount < texts.length) {
    text.innerHTML = texts[noClickCount];
    emoji.innerHTML = emojis[noClickCount];
    noClickCount++;
  }
  
  if (noClickCount >= texts.length) {
    text.innerHTML = "YES!!!";
    emoji.innerHTML = "😏";
    noButton.innerHTML = "Yes";
    noButton.onclick = Yes;
  }
  
  text.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
  text.style.fontWeight = "bold";
  text.style.marginTop = "3px";
}

let yesClickCount = 0;

const yesTexts = [
  "Yayyy, I knew it!", "That's what I want ;)", "You are the best!", "~I Love You (crush) 🎀~"
];

const yesEmojis = [
  "🥰", "🤗", "☺️", "♥️"
];

function Yes() {
  const text = document.getElementById("text");
  const emoji = document.querySelector("span");
  if (yesClickCount < yesTexts.length) {
    text.innerHTML = yesTexts[yesClickCount];
    emoji.innerHTML = yesEmojis[yesClickCount];
    yesClickCount++;
  }
  text.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
  text.style.fontWeight = "bold";
  text.style.marginTop = "3px";
}

function clearText() {
  document.getElementById("text").innerHTML = "";
  document.querySelector("span").innerHTML = "💌";
}

document.getElementById("div").addEventListener("touchend", clearText);