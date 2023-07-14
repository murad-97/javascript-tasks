let p = document.querySelector(".hello");
p.addEventListener("mouseover", () => {
  p.innerHTML = "Hello, world!";
});
p.addEventListener("mouseout", () => {
  p.innerHTML = "Can I help you !";
});

p.style.cssText = "background-color:yellow; width:75%;border:solid 2px black";
