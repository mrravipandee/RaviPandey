function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// typing effect
const typingElement = document.getElementById("profile-status");

const texts = [
  `Frontend Developer`,
  `Learning MERN stack`
];

let textIndex = 0;
let charIndex = 0;

const speedText = 100;

function typeEffect() {
  if (textIndex < texts.length) {
    const currentText = texts[textIndex];
    // Create a new string with characters up to the current index
    typingElement.textContent = currentText.slice(0, charIndex);
    charIndex++;
    if (charIndex <= currentText.length) {
      // If there are more characters, call the function recursively
      setTimeout(typeEffect, speedText);
    } else {
      // Move to the next text in the array after a pause
      textIndex++;
      charIndex = 0;
      setTimeout(typeEffect, speedText * 2);
    }
  }
}

typeEffect();

// add projects details with the help of JS.
