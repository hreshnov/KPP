document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  const button = document.getElementById(key);

  if (button) {
    document
      .querySelectorAll(".btn")
      .forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  }
});
