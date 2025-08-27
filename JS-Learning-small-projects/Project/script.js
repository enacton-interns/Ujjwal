// =================== Navbar Toggle ===================
const menuButton = document.querySelector(".menu-toggler");
const listContainer = document.querySelector(".navbar-list-container");
const headerWrapper = document.querySelector(".header-wrapper");

function adjustScreen() {
  const isDesktop = window.innerWidth > 768;
  menuButton.style.display = isDesktop ? "none" : "inline-block";
  listContainer.classList.toggle("open", isDesktop);
  headerWrapper.style.flexDirection = isDesktop ? "row" : "column";
}

document.addEventListener("DOMContentLoaded", adjustScreen);
window.addEventListener("resize", adjustScreen);

menuButton.addEventListener("click", () => {
  listContainer.classList.toggle("open");
  menuButton.classList.toggle("rotate");
});

// =================== Accordion ===================
const accordions = document.querySelectorAll(".accordian");

accordions.forEach((accordion) => {
  const toggleBtn = accordion.querySelector(".toggle-btn");
  const answerBox = accordion.querySelector(".answer-box");

  toggleBtn.addEventListener("click", () => {
    answerBox.classList.toggle("wrap");
    toggleBtn.classList.toggle("rotate");
  });
});

// =================== Color Picker + Toast ===================
const colorBox = document.querySelector(".color-picker");
const colorList = document.querySelectorAll(".color");
const toast = document.querySelector(".toast");

colorList.forEach((color) => {
  color.addEventListener("click", () => {
    colorList.forEach((c) => {
      c.classList.remove("green", "red", "blue");
    });

    const selectedColor = color.dataset.color;
    colorBox.style.backgroundColor = selectedColor;
    toast.textContent = `Color changed to ${selectedColor}`;
    toast.style.backgroundColor = selectedColor;
    color.classList.add(selectedColor);

    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1000);
  });
});

// =================== Mode Changer ===================
const modeChanger = document.querySelector(".mode-changer");
const modeList = document.querySelector(".mode-list");

modeChanger.addEventListener("click", () => {
  modeList.classList.toggle("view");
});

document.querySelectorAll(".mode").forEach((mode) => {
  mode.addEventListener("click", () => {
    const isDark = mode.dataset.mode === "dark";
    document.body.style.backgroundColor = isDark ? "black" : "white";
    modeChanger.style.color = isDark ? "white" : "black";
    modeList.style.color = isDark ? "white" : "black";
    modeList.classList.remove("view");
  });
});

// =================== About Hover ===================
const about = document.querySelector(".about");
const aboutData = document.querySelector(".about-data");

// Add hover for desktop only
about.addEventListener("mouseenter", () => {
  aboutData.classList.add("hover");
});

about.addEventListener("mouseleave", () => {
  aboutData.classList.remove("hover");
});
