/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
var x = 3;
var y = 5;
if (x > y) {
  console.log(x);
} else {
  console.log(y);
}

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
if (x >= 0) {
  alert(`the sign is +`);
} else {
  alert(`the sign is -`);
}
/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
var x = -1;
var y = 0;
var z = 4;
if (x < y && x < z) {
  if (y < z) {
    alert(`${x}, ${y}, ${z}`);
  } else {
    alert(`${x}, ${z}, ${y}`);
  }
} else if (z < y && z < x) {
  if (y < x) {
    alert(`${z}, ${y}, ${x}`);
  } else {
    alert(`${z}, ${x}, ${y}`);
  }
} else if (y < x && y < z) {
  if (z < x) {
    alert(`${y}, ${z}, ${x}`);
  } else {
    alert(`${y}, ${x}, ${z}`);
  }
}

/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let array = [-5, -2, -6, -1, 0];

var largest = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest);

/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
if (x < y) {
  alert("Hello World");
} else {
  alert("Goodbye");
}

/******* End Your Code ********* */
