/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
let x = 80;
switch (true) {
  case x < 50:
    console.log("Fail");
    break;
  case x >= 50 && x <= 59:
    console.log("E");
    break;
  case x >= 60 && x <= 69:
    console.log("D");
    break;
  case x >= 70 && x <= 79:
    console.log("C");
    break;
  case x >= 80 && x <= 89:
    console.log("B");
    break;
  case x >= 90 && x <= 100:
    console.log("A");
    break;
}
