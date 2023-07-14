let flag = document.querySelector("#FLAG");
flag.style.display = "block";
let image = document.createElement("img");
image.src = "download.jpg";
document.body.appendChild(image);
image.style.width = "200px";

flag.addEventListener("change", () => {
  let selectedIndex = flag.selectedIndex;
  let selectedValue = flag.options[selectedIndex].text;
  if (selectedValue === "PALASTAIN") {
    image.src = "palestine-flag_0.jpg";
  } else {
    image.src = "download.jpg";
  }
});
