let form = document.querySelector("#form");
let child = document.querySelectorAll("input");
create();
form.addEventListener("submit", () => {
  let language = [];
  for (let i = 0; i < child.length; i++) {
    if (child[i].type === "checkbox") {
      if (child[i].checked) {
        language.unshift(child[i].id);
      }
    }
    localStorage.setItem(`language`, JSON.stringify(language));
    localStorage.setItem(`${child[i].id}`, `${child[i].value}`);
  }
  container.remove();
  create();
});

function create() {
  let container = document.createElement("div");
  container.className = "container";

  document.body.appendChild(container);
  let card1 = document.createElement("div");
  card1.innerHTML = `<p>the Name : ${localStorage.getItem("Name")} </p>
  <p>the age : ${localStorage.getItem("age")} </p>
  <p>the Gender : ${localStorage.getItem("Gender")} </p>
  <p>the birth day : ${localStorage.getItem("date")} </p>
  <img style="width:300px" src="${localStorage.getItem("image")}" >`;
  container.appendChild(card1);
  let card2 = document.createElement("div");
  card2.innerHTML = `<p>Description : ${localStorage.getItem(
    "Description"
  )} </p>
  <p>major &university  : ${localStorage.getItem("uni")} </p>
  <p>Programming language : ${JSON.parse(localStorage.getItem("language")).join(
    "  |  "
  )}</p><br><br>`;
  container.appendChild(card2);
  let card3 = document.createElement("div");
  card3.innerHTML = `<p>siblings number : ${localStorage.getItem("num")} </p>
  <p>description of siplings : ${localStorage.getItem("des")} </p>`;
  container.appendChild(card3);
}
