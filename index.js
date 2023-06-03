document.getElementById("mobilenav").addEventListener("click", () => {
  document.body.classList.add("mobilenav-visible");
  document.querySelector("body>nav").scrollIntoView();
});

document.getElementById("closenav").addEventListener("click", () => {
  document.body.classList.remove("mobilenav-visible");
  document.querySelector("body>main").scrollIntoView();
});

document.body.classList.remove("mobilenav-visible");
document.querySelector("body>main").scrollIntoView();
