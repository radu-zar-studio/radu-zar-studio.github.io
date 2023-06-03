document.getElementById("mobilenav").addEventListener("click", () => {
  document.body.classList.add("mobilenav-visible");
  window.scrollTo(document.body.scrollWidth, 0);
});

document.getElementById("closenav").addEventListener("click", () => {
  document.body.classList.remove("mobilenav-visible");
  window.scrollTo(0, 0);
});

document.body.classList.remove("mobilenav-visible");
window.scrollTo(0, 0);
