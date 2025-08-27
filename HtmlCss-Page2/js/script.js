const menubtn = document.getElementsByClassName("menu-btn-wrapper")[0];
const navbarWrapper = document.getElementsByClassName("nav-link-wrapper")[0];
menubtn.addEventListener("click", () => {
  if (navbarWrapper.style.display === "none") {
    navbarWrapper.style.display = "flex";
  } else {
    navbarWrapper.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbarWrapper.style.display = "flex";
  } else {
    navbarWrapper.style.display = "none";
  }
});
