let color = document.querySelector(".color");
document.body.style.backgroundColor = sessionStorage.color;

color.addEventListener("input", () =>{
  document.body.style.backgroundColor = color.value;
  sessionStorage.setItem("color", color.value);
});
