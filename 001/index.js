
// // dialoge box 

// // alert(" Hello i am alert dialoge box");
// const isConfirm = confirm("hello confirm dialoge box");

/*const vary = prompt("hello bhai")
console.log(vary); */

// String Methods and Properties| Templare Litrals

const message = "Hi My Name is Lalbabu Prasad"

const messageLength = message.length;

const messageUpperCase = message.toUpperCase();

const userName = "Lalbabu Prasad";

const userNameLowder = userName.toLowerCase();

const intro = "    hi, Lalbabu Prasad is a learner full stack web development      ";

const introTrim = intro.trim().toUpperCase();

const number = '7856';

const accountNumber = number.padStart(16, 'x');

const replaceChar = message.replace("Hi", "Hello");

const price = 56;

const templateLitrals = `My roll number is ${price}`;

const con = templateLitrals.concat(number);

// assignment 1 done

const width = +prompt("Enter the rectangle width")
const length = +prompt("enter the rectangle length")

console.log(width*length);

document.write(`Reactangle Area: ${width * length}`)


