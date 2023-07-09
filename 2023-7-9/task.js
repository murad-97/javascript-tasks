/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let x = 250;
let zakat = (x * 2.5) / 100;
console.log(zakat);
/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
let number = [1, 7, 9, 45];
let names = ["Str", "alex", "moh"];
let animals = ["the", "fox", "over", "lazy", "dog"];
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(fruits.indexOf("Tomato"));
console.log(fruits.indexOf("Banana"));
/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
let Favorite_Food = ["mansaf", "dawaly"];
let Favorite_Sport = ["ركوب الخيل", "رمايه الرمح", "السباحه"];
let Favorite_Mo = ["up", "transform"];

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

firstOfArray = Favorite_Food[0];
console.log(firstOfArray);
/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
firstOfArray = Favorite_Food[Favorite_Food.length - 1];
console.log(firstOfArray);
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9];
array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
console.log(array);

console.log("|||||||||||||||||||");
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

array.pop();
array.pop();
array.pop();
array.pop();
array.shift();
array.shift();
array.shift();
array.unshift(5, 9);
array.push(-7);
array.push(3.5);
console.log(array);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b);

console.log(arr1);
