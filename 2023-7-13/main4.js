let p = document.querySelector("p");

let family = document.querySelector("#family");

family.addEventListener("change", () => {
  let selectedIndex = family.selectedIndex;
  let selectedValue = family.options[selectedIndex].text;
  if (selectedValue === "Courier New") {
    p.style.fontFamily = `${family.options[selectedIndex].value}`;
  } else if (selectedValue === "Calibri") {
    p.style.fontFamily = `${family.options[selectedIndex].value}`;
  }
});

let size = document.querySelector("#size");

size.addEventListener("change", () => {
  let selectedIndex = size.selectedIndex;
  let selectedValue = size.options[selectedIndex].text;
  if (selectedValue === "10px") {
    p.style.fontSize = `${size.options[selectedIndex].value}`;
  } else if (selectedValue === "15px") {
    p.style.fontSize = `${size.options[selectedIndex].value}`;
  }
});

let italic = document.querySelector("#italic");

italic.addEventListener("click", () => {
  if (italic.checked) {
    p.style.fontStyle = "italic";
  } else {
    p.style.fontStyle = "normal";
  }
});

let bold = document.querySelector("#bold");

bold.addEventListener("click", () => {
  if (bold.checked) {
    p.style.fontWeight = "bold";
  } else {
    p.style.fontWeight = "normal";
  }
});

let underline = document.querySelector("#underline");

underline.addEventListener("click", () => {
  if (underline.checked) {
    p.style.textDecoration = "underline";
  } else {
    p.style.textDecoration = "none";
  }
});
