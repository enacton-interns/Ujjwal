(function greet() {
  const greet = document.querySelector("#greet");
  const username = document.querySelector("#username");
  username.addEventListener("input", () => {
    greet.textContent = `Hello ${username.value || "World"}!`;
  });
})();
