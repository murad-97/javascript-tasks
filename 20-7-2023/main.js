let add_input = document.querySelector(".add-con input");
let addptn = document.querySelector(".add-con button");
let taskcontainer = document.querySelector(".task_container");
let tasksarr = [];

console.log(JSON.parse(localStorage.getItem("tasksarr")));
if (localStorage.getItem("tasksarr") !== null) {
  tasksarr = JSON.parse(localStorage.getItem("tasksarr"));
  tasksarr.forEach((element) => {
    let task = document.createElement("div");
    task.classList.add("task");
    task.id = `${element}`;
    task.innerHTML = `
      <p>${element}</p>
      <button id="update" class="btn update">update</button>
      <button id= "delete" class="btn delete">delete</button>
    `;
    taskcontainer.appendChild(task);
  });
}

addptn.addEventListener("click", (eo) => {
  if (add_input.value !== "") {
    let task = document.createElement("div");
    task.classList.add("task");
    task.id = `${add_input.value}`;
    task.innerHTML = `
    <p>${add_input.value}</p>
    <button id="update" class="btn update">update</button>
    <button id= "delete" class="btn delete">delete</button>
  `;
    tasksarr.push(add_input.value);
    localStorage.setItem("tasksarr", JSON.stringify(tasksarr));

    taskcontainer.appendChild(task);
    add_input.value = "";
  }
});
taskcontainer.addEventListener("click", (eo) => {
  if (eo.target.id === "delete") {
    eo.target.parentElement.remove();
    tasksarr = JSON.parse(localStorage.getItem("tasksarr")).filter(
      (element) => {
        return eo.target.parentElement.childNodes[1].innerHTML !== element
          ? element
          : false;
      }
    );
    localStorage.setItem("tasksarr", JSON.stringify(tasksarr));
  } else if (eo.target.id === "update") {
    let prompt = window.prompt(
      "Enter a task",
      eo.target.parentElement.childNodes[1].innerHTML
    );
    eo.target.parentElement.childNodes[1].innerHTML = `${prompt}`;
    eo.target.parentElement.id = `${prompt}`;
  }
});

let search = document.querySelector(".search");
let tasks = taskcontainer.children;
search.addEventListener("keyup", () => {
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].style.display = "none";
    if (tasks[i].id.startsWith(`${search.value.toLowerCase()}`)) {
      tasks[i].style.display = "flex";
    }
  }
});
