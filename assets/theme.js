const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const glyphCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$%&*";

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);

  if (!themeToggle) {
    return;
  }

  const themeIcon = themeToggle.querySelector(".theme-icon");
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "L" : "D";
  }

  themeToggle.setAttribute("aria-label", theme === "dark" ? "Turn off dark mode" : "Turn on dark mode");
  themeToggle.setAttribute("title", theme === "dark" ? "Light mode" : "Dark mode");
}

setTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

const instagramGlyph = document.querySelector(".instagram-glyph span");
const instagramLink = document.querySelector(".instagram-glyph");

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function moveInstagramGlyph() {
  if (!instagramLink || !instagramGlyph) {
    return;
  }

  instagramGlyph.textContent = glyphCharacters[Math.floor(Math.random() * glyphCharacters.length)];
  instagramLink.style.setProperty("--glyph-x", `${randomBetween(8, 92).toFixed(2)}vw`);
  instagramLink.style.setProperty("--glyph-y", `${randomBetween(10, 90).toFixed(2)}vh`);
  instagramLink.style.setProperty("--glyph-rotate", `${randomBetween(-18, 18).toFixed(2)}deg`);
}

moveInstagramGlyph();
setInterval(moveInstagramGlyph, 5400);
