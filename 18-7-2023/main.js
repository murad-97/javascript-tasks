let input = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector(".container");

btn.addEventListener("click", () => {
  container.innerHTML = "";
  let value = input.value;

  async function get() {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=${value}`
    );
    const data = await response.json();
    countries(data);
  }
  get();
});

function countries(data) {
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `<h2>${data[i].name}</h2>

    <h4><a target ="_blanck" href="${data[i].web_pages[0]}">${data[i].web_pages[0]}</a></h4>
    <h4></h4>`;
    container.appendChild(div);
  }
}
