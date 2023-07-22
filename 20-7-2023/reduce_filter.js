console.log("Here is : ", "Reduce & Filter");

//Using Reduce 1 -5
var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];

/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
let avg =
  persons.reduce((acc, cur) => {
    return acc + cur.age;
  }, 0) / persons.length;
console.log(avg);
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestname(p) {
  let aa = p.reduce((acc, cur) => {
    let a = (cur.name.first + cur.name.last).length;
    let b = (acc.name.first + acc.name.last).length;
    return b > a ? acc : cur;
  });
  console.log(`longestName(persons) => '${aa.name.first} ${aa.name.last}'`);
}
longestname(persons);
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
let x = [1, 2, 4, 9];
function longestnumber(p) {
  let aa = p.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
  });
  console.log(`maxNumber([${x}]) => ${aa}`);
}
longestnumber(x);

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

function repeat(string, char) {
  let count = 0;
  let arr = string.split("").reduce((acc, cur) => {
    return cur === char ? count++ : false;
  }, 0);
  console.log(`repeatChar(${string},${char}) => ${count}`);
}
repeat("hello world", "w");
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function between(x, y) {
  let n = [];
  for (let index = x; index <= y; index++) {
    n.push(index);
  }
  console.log(`usAndNumberBeetweenUs(${x},${y}) => [${n}]`);
}
between(-9, 9);
//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr, string) {
  let ar = arr.filter((ele) => {
    return ele.includes(string);
  });
  console.log(ar);
}
containChar(["hello", "world"], "l");
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

// if you finish the exercises review the material of the week and help your classmate
