let table = document.querySelector("table");
let load = document.querySelector("button");

load.addEventListener("click", () => {
  let names = new XMLHttpRequest();
  names.open("GET", "jason.JSON");
  names.onload = () => {
    let json = JSON.parse(names.responseText);
    for (let i = 0; i < json.length; i++) {
      let row = document.createElement("tr");
      table.appendChild(row);
      for (const key in json[i]) {
        let sell = document.createElement("td");
        if (key === "image") {
          sell.innerHTML = `<img src="${json[i][`${key}`]}"/>`;
          row.appendChild(sell);
        } else {
          sell.innerHTML = json[i][`${key}`];
          row.appendChild(sell);
        }
      }
    }
  };
  names.send();
});
