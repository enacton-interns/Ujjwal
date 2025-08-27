document.addEventListener("DOMContentLoaded", () => {
  const navbarHeader = document.getElementById("navbar-header");
  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", () => {
    if (navbarHeader.classList.contains("show")) {
      navbarHeader.style.maxHeight = "0";
      navbarHeader.classList.remove("show");
    } else {
      navbarHeader.classList.add("show");
      navbarHeader.style.maxHeight = navbarHeader.scrollHeight + "px";
    }
  });
  window.addEventListener("resize", () => {
    if (navbarHeader.classList.contains("show")) {
      navbarHeader.style.maxHeight = navbarHeader.scrollHeight + "px";
    }
  });
});
