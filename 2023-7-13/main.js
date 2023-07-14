let name = ["murad", "qasem", "mrabet", "ghzawi"];
let age = [25, 23, 20, 23];
let main = document.createElement("main");

document.body.appendChild(main);

for (let i = 0; i < name.length; i++) {
  let card = document.createElement("div");
  let header = document.createElement("h1");
  header.textContent = name[i];
  let agenode = document.createElement("p");
  agenode.textContent = age[i];
  let image = document.createElement("img");
  image.src = "../slider.jpg";
  image.classList.add("image");

  card.appendChild(header);
  card.appendChild(agenode);
  card.appendChild(image);
  main.appendChild(card);

  main.style.cssText =
    "display:flex;flex-wrap:wrap;justify-content:space-around;";
  image.style.cssText = "width:80%";
  card.style.cssText =
    "height : 300px ;width:300PX;display:flex;flex-direction:column;justify-content:space-EVENLY;align-items:center;border:solid 1px gray;background-color:gray;margin-top:10px;";
}
