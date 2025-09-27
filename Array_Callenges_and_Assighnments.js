console.log("%cArray Challenge", "color: red; font-size:20px");

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, my.length - --counter).reverse()); // ["Osama","Elham", "Mazero", "Ahmed"]

console.log(my.slice(++zero, ++counter).reverse()); // ["Elham", "Mazero"]

console.log(my[--counter].slice(--zero, counter) + my[++zero].slice(counter)); // "Elzero"

console.log(my[my.length - zero][++counter + zero] + my[counter][--zero]); // "rO"

console.log("<----------------->");

console.log("%cArray Assighnment_1", "color: #9c27b0; font-size:20px");

let myFriends_1 = ["Ahmed", "Elham", "Osama", "Gamal"];
let num_1 = 3;

// Method 1
console.log(myFriends_1.slice(-myFriends_1.length, num_1)); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends_1.slice(-++num_1, --num_1)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends_1.pop();
console.log(myFriends_1); // ["Ahmed", "Elham", "Osama"];

console.log("<----------------->");

console.log("%cArray Assighnment_2", "color: #9c27b0; font-size:20px");

let friends_2 = ["Ahmed", "Eman", "Osama", "Gamal"];

friends_2.pop();
friends_2.shift();

console.log(friends_2); // ["Eman", "Osama"]

console.log("<----------------->");

console.log("%cArray Assighnment_3", "color: #9c27b0; font-size:20px");

let arrOne_3 = ["C", "D", "X"];
let arrTwo_3 = ["A", "B", "Z"];
let finalArr_3 = [];

console.log(finalArr_3.concat(arrOne_3, arrTwo_3).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

console.log("<----------------->");

console.log("%cArray Assighnment_4", "color: #9c27b0; font-size:20px");

let website_4 = "Go";
let words_$_4 = [`${website_4}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words_$_4[website_4.length][words_$_4.length - ++website_4.length]
    .slice(website_4.length)
    .toLocaleUpperCase()
); // ZERO

console.log("<----------------->");

console.log("%cArray Assighnment_5", "color: #9c27b0; font-size:20px");

let needle_5 = "JS";
let haystack_5 = ["PHP", "JS", "Python"];

if (haystack_5.includes(needle_5) == true) {
  console.log("Found");
} else {
  console.log("Not Found");
} // first solution

haystack_5.includes(needle_5) == true
  ? console.log("Found")
  : console.log("Not Found"); // second solution

switch (haystack_5.includes(needle_5)) {
  case true:
    console.log("Found");
    break;
  case false:
    console.log("Not Found");
    break;
} // third solution

console.log("<----------------->");

console.log("%cArray Assighnment_6", "color: #9c27b0; font-size:20px");

let arr1_6 = ["A", "C", "X"];
let arr2_6 = ["D", "E", "F", "Y"];
let allArrs_6 = [];

allArrs_6 = allArrs_6.concat(arr1_6, arr2_6);

console.log(
  allArrs_6.sort().slice(-arr1_6.length).join("").toLocaleLowerCase()
); // fxy
