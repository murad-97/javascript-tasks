let p = document.querySelector("p");

let family = document.querySelector("#family");

family.addEventListener("change", () => {
  if (family.value === "'Courier New', Courier, monospace") {
    p.style.fontFamily = `${family.value}`;
  } else if (
    family.value ===
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
  ) {
    p.style.fontFamily = `${family.value}`;
  }
});

let size = document.querySelector("#size");

size.addEventListener("change", () => {
  if (size.value === "10px") {
    p.style.fontSize = `${size.value}`;
  } else if (size.value === "15px") {
    p.style.fontSize = `${size.value}`;
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
