let span = document.querySelectorAll(".fname");
console.log(span);
function f_name() {
  let fname = document.querySelector("#fname");
  let fnamereg = /^([^0-9]*)$/;
  if (fnamereg.test(fname.value) === false) {
    span[0].innerHTML = "numbers are not allow";
  }
}
function l_name() {
  let lname = document.querySelector("#lname");
  let fnamereg = /^([^0-9]*)$/;
  if (fnamereg.test(lname.value) === false) {
    span[1].innerHTML = "numbers are not allow";
  }
}
function date() {
  let date = document.querySelector("#date");
  let fnamereg = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
  if (fnamereg.test(date.value) === false) {
    span[2].innerHTML = "the format should be dd/mm/yyyy";
  }
}
function email() {
  let email = document.querySelector("#email");
  let fnamereg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if (fnamereg.test(email.value) === false) {
    span[3].innerHTML = "the email is not valid";
  }
}
function confirm_email() {
  let email = document.querySelector("#email");
  let confirm = document.querySelector("#confirm");

  if (email.value !== confirm.value) {
    span[4].innerHTML = "the email is not valid";
  }
}
function password() {
  let password = document.querySelector("#Password");
  let fnamereg = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/;
  if (fnamereg.test(password.value) === false) {
    span[5].innerHTML =
      "the password should have at least one special caracter and one number (6-19) caracter";
  }
}
function confirm_pass() {
  let Password = document.querySelector("#Password");
  let confirm = document.querySelector("#conpass");

  if (Password.value !== confirm.value) {
    span[6].innerHTML = "the password is not valid";
  }
}
