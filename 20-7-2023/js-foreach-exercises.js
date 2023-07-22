/*
 * Exercise 1:
 * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 *
 * Test Case:
 *    Test Case 1: doubleValues([1,2,3])
 *    Test Case 2: doubleValues([5,1,2,3,10])
 *
 * Result:
 * Test Case 1:  [2,4,6]
 * Test Case 2: [10,2,4,6,20]
 *
 *
 */
function doubleValues(arr) {
  let result = [];
  arr.forEach((ele) => {
    result.push(ele * 2);
  });
  console.log(result);
}
doubleValues([1, 2, 3]);
doubleValues([5, 1, 2, 3, 10]);
/*
 * Exercise 2:
 * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 *
 * Test Cases:
 *   onlyEvenValues([1,2,3])
 *   onlyEvenValues([5,1,2,3,10])
 *
 * Result:
 *  Test Case 1:  [2]
 *  Test Case 2: [2,10]
 */
function onlyEvenValues(arr) {
  let result = [];
  arr.forEach((ele) => {
    if (ele % 2 !== 0) {
      result.push(ele);
    }
  });
  console.log(result);
}
onlyEvenValues([1, 2, 3]) * onlyEvenValues([5, 1, 2, 3, 10]);

/*
 * Exercise 3:
 * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
 *
 * Test Case:
 *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
 *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
 *
 * Result:
 * Test Case 1: ["ct", "mt", "tm", "uy"]
 * Test Case 2: ['hi', 'ge', 'se']
 *
 */
function showFirstAndLast(arr) {
  let result = [];
  arr.forEach((ele) => {
    let e = ele
      .split("")
      .map((ele, i, arr) => {
        if (i === 0 || i === arr.length - 1) {
          return ele;
        }
      })
      .join("");
    result.push(e);
  });
  console.log(result);
}
showFirstAndLast(["colt", "matt", "tim", "udemy"]);
showFirstAndLast(["hi", "goodbye", "smile"]);

/*
 * Exercise 4:
 * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed
 * to the function with the new key and value added for each object
 *
 * Test Cases:
 *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
 *
 * Result:
 *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
 *
 */
function addKeyAndValue(arr, key, value) {
  arr.forEach((obj) => {
    obj[key] = value;
  });

  // Return the modified array
  return arr;
}
console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);
/*
 * Exercise 5:
 * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the
 * values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
 *
 * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
 * Test Cases 2:  vowelCount('Tim') // {i:1};
 * Test Cases 3:  vowelCount('Matt') // {a:1})
 * Test Cases 4:  vowelCount('hmmm') // {};
 * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 *
 * Result:
 * Test Cases 1: {e:2,i:1};
 * Test Cases 2: {i:1};
 * Test Cases 3: {a:1})
 * Test Cases 4: {};
 * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 */

function vowelCount(str) {
  const vowels = "aeiou";
  const result = {};

  const lowerStr = str.toLowerCase();

  lowerStr.split("").forEach((char) => {
    if (vowels.includes(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  });
  return result;
}

console.log(vowelCount("Elie"));
console.log(vowelCount("Tim"));
console.log(vowelCount("Matt"));
console.log(vowelCount("hmmm"));
console.log(vowelCount("I Am awesome and so are you"));
