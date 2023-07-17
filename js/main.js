// console.log("Hello World!");
// console.log(typeof "Umolo");
// console.log(typeof 42);
// console.log(typeof true);

//STRINGS

// const myVariable = "Mathematics";

// The length property
// console.log(myVariable.length);

//Strings Methods
//console.log(myVariable.charAt(6));
//console.log(myVariable.indexOf("Mat"));
//console.log(myVariable.lastIndexOf("at"));
//console.log(myVariable.slice(5, 8));
// console.log(myVariable.toUpperCase());
// console.log(myVariable.includes("mat"));
// console.log(myVariable.split("e"))
// console.log("john, joe, dave".split(","))

//NUMBERS
//An integer is a whole number
// const myNumber = 42;

//A number with a decimal point is a float which references the "floating point"
// const myFloat = 42.0151;

// const myString = "42.123abc";

// console.log(mynumber);
// console.log(myFloat)

// console.log(myNumber === myFloat);
// console.log(myNumber === myString);
// console.log(myString + 3);
// console.log(Number(myString) === myNumber);

//Number Methods
//The number.integer() method determines whether the passed value is an integer.

// console.log(Number.isInteger(myNumber));
// console.log(Number.isInteger(myFloat));
// console.log(Number.isInteger(myString));

//The number.parseFloat() method parses an argument and retunrs a floating point number. If a number cannot be parsed from the argument, it retunrs NaN.

// console.log(Number.parseFloat(myNumber));
// console.log(Number.parseFloat(myFloat));
// console.log(Number.parseFloat(myString));

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.

//

//The Number.parseInt() method parses a string argument and returns an integer.

// console.log(Number.parseInt(myFloat).toFixed(2));

//NaN is an acronym for Not Number

//The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.

// Number.isNaN()

//The global isNaN() function determines whether a value is NaN or not.

// console.log(isNaN("Dave"));

//MATH METHODS AND PROPERTIES

// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.ceil(Math.PI));
// console.log(Math.floor(Math.PI))

// console.log(Math.pow(5, 2));
// console.log(Math.min(2, 0.5, 9));
// console.log(Math.max(2, 9.2, 9));

// console.log(Math.random());

//FROM 1 to 10

// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));

//CODE CHALLENGE

//First coding challenge

//Write code that will return a random letter from your name

// console.log("Umolo". charAt())

// console.log(Math.floor(Math.random() * 4 + 1))
// console.log(Math.floor(Math.random() * 4 + 1))
// console.log(Math.floor(Math.random() * 4 + 1))

// console.log("Umolo".charAt(Math.floor(Math.random() * 0 +1)));
// console.log("Umolo".charAt(Math.floor(Math.random() * 1 +1)));
// console.log("Umolo".charAt(Math.floor(Math.random() * 2 +1)));
// console.log("Umolo".charAt(Math.floor(Math.random() * 3 +1)));
// console.log("Umolo".charAt(Math.floor(Math.random() * 4 +1)));

// const anyName = "Umolo";
// console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
// console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
// console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
// console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
// console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));

//CONDITIONALS: IF STATEMENTS

//SYNTAX

// if (Condition) {
//     //run some code
// } else {
//     //run some different code
// }

// let customerIsBanned = true;
// let soup = "chicken noodle soup";
// let cracker = true;
// let reply;
// if (customerIsBanned) {
//     reply = "No soup for you!";
// } else if (soup && crackers) {
//     reply = `Here's your order of ${soup}`;
// } else {
//     reply = "Sorry, we're out of soup.";
// }

// console.log(reply);

// let testScore = 29;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
//     grade = "A";
// } else if (testScore >= 80) {
//     grade = "B";
// } else if (testScore >= 70) {
//     grade = "C";
// } else if (testScore >= 60) {
//     grade = "D";
// } else if (testScore >= 50) {
//     grade = "E";
// } else if (testScore >= 40) {
//     grade = "F";
// } else if (testScore >= 30) {
//     grade = "F9";
// } else {
//     if (collegeStudent) {
//         grade = "U";
//     } else {
//         grade = "F";
//     }
// }
// console.log(grade);

// DECISION TREE!

// if (playerOne === computer) {
//     //tie game!
// } else if (playerOne === "rock") {
//     if (computer === "paper") {
//         // computer wins
//     } else {
//         //playerOne wins
//     }
// } else if (playerOne === "paper") {
//     if (computer === "scissors") {
//         //computer wins
//     } else {
//         //playerOne wins
//     }
// } else {
//     if (computer === "rock") {
//         //computer wins
//     } else {
//         //playerOne wins
//     }
// }

//SWITCH STATEMENTS

// switch (expression OR value ) {

//     case choice1:
//         // run thos code
//         break;

//     case choice2:
//         // run this different code
//         break;

//         // add as many cases as needed

//     default:
//         // run this code if no case matches
//         // no need for a break here

// }

// switch (2) {
//     case 1:
//         //run this code
//         console.log(1);
//         break;

//     case 2:
//         // run this different code
//         console.log(2);
//         break;

//     case 3:
//         // run this different code
//         console.log(3);
//         break;

//     default:
//     console.log("No match")

// }

// switch (Math.floor(Math.random() * 5 + 1)) {
//     case 1:
//         //run this code
//         console.log(1);
//         break;

//     case 2:
//         // run this different code
//         console.log(2);
//         break;

//     case 3:
//         // run this different code
//         console.log(3);
//         break;

//     default:
//     console.log("No match")

// }

// let playerOne = "scissors";
// let computer = "rock";

// switch (playerOne) {
//     case computer:
//         console.log("Tie game!");
//         break;
//     case "rock":
//         if (computer === "paper") {
//             console.log("computer wins!");
//         } else {
//             console.log("playerOne wins!");
//         }
//         break;

//     case "paper":
//         if (computer === "scissors") {
//             console.log("computer wins!");
//         } else {
//             console.log("playerOne wins!")
//         }
//         break;

//     default:
//         if (computer === "rock") {
//             console.log("computer wins!")
//         } else {
//             console.log("playerOne wins!")
//         }
// }

//  TERNARY OPERATOR

//syntax
//condition ? ifTrue : ifFalse;

// let soup = "chicken noodles soup";
// let response = soup ? "Yes, we have soup." : "sorry, no soup today.";

// console.log(response);

// let soup = "chicken Noodles soup";
// let isCustomerBanned = false;
// let soupAcess = isCustomerBanned
// ? "sorry, no soup for you.!"
// : soup
// ? `Yes, we have $(soup) today.`
// : "sorry, no soup today.";

// console.log(soupAcess);

// let testScore = 99;
// let myGrade =
//     testScore > 89
//        ? "A"
//        : testScore > 79
//        ? "B"
//        : testScore > 69
//        ? "C"
//        : testScore > 59
//        ? "D"
//        : "F";

//        console.log(`My test grade is a $(myGrade).`);

// let playerOne = "paper";
// let computer = "scissors";
// let result =
//     playerOne === computer
//         ? "Tie game"
//         : playerOne === "rock" && computer === "paper"
//         ? "computer wins!"
//         : playerOne === "paper" && computer === "scissors"
//         ? "computer wins!"
//         : playerOne === "scissors" && computer === "rock"
//         ? "computer wins!"
//         : "playerOne wins!";
//     console.log(result);

//USER INPUT

// alert("hello world!");

// let myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

// let name = prompt("Please enter yout name.");
// // console.log(typeof name);
// if (name) {
//     console.log(name.length);
//     console.log(name.trim().length);
//     console.log(name);
// } else {
//     console.log("You didn't enter your name.");
// }

// YOUR FIRST INTERACTIVE GAME

// let playGame = confirm("shall we play rock, paper, or scissors");
// if (playGame) {
//   //play
//   let playerChoice = prompt("Please enter rock, paper, or scissors.");
//   if (playerChoice) {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (
//       playerOne === "rock" ||
//       playerOne === "paper" ||
//       playerOne === "scissors"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);
//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissors";

//       let result =
//         playerOne === computer
//           ? "Tie game!"
//           : playerOne === "rock" && computer === "paper"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "paper" && computer === "scissors"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "scissors" && computer === "rock"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//       alert(result);

//       let playAgain = confirm("play Again");
//       playAgain ? location.reload() : alert("Ok, thanks for playing");
//     } else {
//       alert("You didn't enter rock, paper, or scissors.");
//     }
//   } else {
//     alert("I guess you changed your mind. maybe next time");
//   }
// } else {
//   alert("ok, maybe next time.");
// }



//LOOPS

// let myNumber = 0;
// while (myNumber < 50) {
//     myNumber++;
//     console.log(myNumber);
// }

// dont create an endless loop

// let myNumber = 0;
// do { console.log(myNumber);
// } while (myNumber < 50);


// for (let i = 1; i <= 10;) {
//     console.log(i);
//     i++;
// }

// let name = "Umolo";
// for (let i = 0; i <= name.length; i++) {
//     console.log(name.charAt(i));
// }

// let name = "Umolo";
// let counter = 0;
// let myLetter;
// while (counter <= 3) {
//     myLetter = name[counter];
//     console.log(myLetter);
//     if (counter === 1) {
//         counter += 2;
//         continue;
//     }
//     if (myLetter === "v") break;
//     counter++;
// }

// console.log(counter);


// FUNCTIONS

// Methods = Built in functions

// "Umolo".toLowerCase();
// Math.random();

// ffunction declaration syntax:

// function sum (num1, num2) {
//     if (num2 === undefined) {
//         return num1 + num1;
//     }
//     return num1 + num2;
// }

// console.log(sum(2));


// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("umoloblessing009@gmail.com"));


// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("umoloblessing009@gmail.com"));

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("umoloblessing009@gmail.com"));


// const toPropercase = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

// console.log(toPropercase("blessing"));


// Functions provide reuseable codes.



//  Var, let and const

// global scope

// var x = 1;
// let y = 2;
// const z = 3;


// Local scope 
// block scope

// {
//     let y = 4;
//     console.log(y);
// }

// function scope

// function myFunc() {
//     const z = 5;
// }


// console.log(y);


// global scope


// var is function scope not block scope
// const is a block scope

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);



// function myFunc() {
//     var x = 10;
//     const z = 5;

//     console.log(`function: ${x}`);
//     console.log(`function: ${y}`);
//     console.log(`function: ${z}`);

//     {
//         var x = 11;
//         const z = 6;

//         console.log(`block: ${x}`);
//         console.log(`block: ${y}`);
//         console.log(`block: ${z}`);
//     }
// }

// myFunc();


// ARRAY is a data function in JS

// const myArray = []

// //  add elememts to an array 
// myArray[0] = "Umolo";
// myArray[1] = 1001;
// myArray[2] = false;

// // refer to an array

// console.log(myArray);


// // length property

// console.log(myArray.length);

// // last element in an array

// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);


// This is to add something to the end of the array
// myArray.push("school"); 

// console.log(myArray);


// To remove something from the array
// myArray.pop();

// console.log(myArray);

// const lastItem = myArray.pop();

// console.log(lastItem);


// To add something at the begining of the array

// myArray.unshift(42);
// console.log(myArray);


// to remove something from the front of the array

// myArray.shift();
// console.log(myArray);


// To remove something from the middle of an array

// // do no use this 
// delete myArray[1];

// console.log(myArray);
// console.log(myArray[1]);

// Splice can be used to delete and it can also be used to replace elements

// myArray.splice(1, 1);

// myArray.splice(1, 1, 50);

// console.log(myArray);



// const myArray = ["A", "B", "C", "D", "E", "F"];

// const myArrayA = ["A", "B", "C"];

// const myArrayB = ["D", "E", "F"];

// const newArray = myArray.slice(2, 5);

// myArray.reverse();

// const newString = myArray.join();

// const newArray = newString.split(",");

// const newArray = myArrayB.concat(myArrayA);

// const newArray = [...myArrayA, ...myArrayB]

// console.log(newArray);


// Nested array

// const equipShelfA = ["baseball", "football", "volleyball"];
// const equipShelfB = ["basketball", "golf balls", "tennis balls"];

// const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
// const clothesShelfB = ["Sweat tops", "sweat pants", "hoodies"];

// console.log(equipShelfA[1]);
// console.log(clothesShelfB[0]);

// const equipShelf = [equipShelfA, equipShelfB];
// const clothesShelf = [clothesShelfA, clothesShelfB];

// console.log(equipShelf[0][1]);
// console.log(clothesShelf[1][0]);

// const sportsStore = [equipShelf, clothesShelf];

// console.log(sportsStore[0][0][1]);
// console.log(sportsStore[1][1][0]);


// First Interractive Game

// let playGame = confirm("shall we play rock, paper, or scissors?");
// if (playGame) {
//     // play
//     while (playGame) {
//         const playerChoice = prompt("Please enter rock, paper, or scissors.");
//         if (playerChoice || playerChoice === "") {
//             const playerOne = playerChoice.trim().toLowerCase();

//             if (
//                 playerOne === "rock" ||
//                 playerOne === "paper" ||
//                 playerOne === "scissors"
//             ) {
//                 const computerChoice = Math.floor(Math.random() * 3);
//                 const rpsArray = ["rock", "paper", "scissors"];
//                 const computer = rpsArray[computerChoice];

//                 const result = 
//                 playerOne === computer
//                 ? "Tie game!"
//                 : playerOne === "rock" && computer === "paper"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                 : playerOne === "paper" && computer === "scissors"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                 : playerOne === "scissors" && computer === "rock"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                 : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
//                 alert(result);

//                 playGame = confirm("play Again?");
//                 if (!playGame) alert("Ok, thanks for playing.");
//                 continue;
//             } else {
//                 alert("you didnt enter rock, paper, or scissors.");
//                 continue;
//             }
//         } else {
//             alert("I guess you chnaged your mind. Maybe next time.");
//             break;
//         }
//     }
// } else {
//     alert("Ok, maybe next time.");
// }



// ROCK PAPER OR SCISSOR 
// REFRACTORED WITH FUNCTIONS

// const initGame = () => {
//     const startGame = confirm("Shall we play rock, paper, or scissors?");
//     startGame ? playGame() : alert("Ok, maybe next time.");
// }

// // Game Flow Function

// const playGame = () => {
//     while (true) {
//         let playerChoice = getPlayerChoice();
//         playerChoice = formatPlayerChoice(playerChoice);
//         if (playerChoice === "") {
//             invalidChoice();
//             continue;
//         }
//         if (!playerChoice) {
//             decideNotToPlay();
//             break;
//         }
//         playerChoice = evaluatePlayerChoice(playerChoice);
//         if (!playerChoice) {
//             invalidChoice();
//             continue;
//         }
//         const computerChoice = getComputerChoice();
//         const result = determineWinner(playerChoice, computerChoice);
//         displayResult(result);
//         if (askToPlayAgain()) {
//             continue;
//         } else {
//             thanksForPlaying();
//             break;
//         }
//     }
// };

// const getPlayerChoice = () => {
//     return prompt("Please enter rock, paper, or scissors.");
// };

// const formatPlayerChoice = (playerChoice) => {
//     if (playerChoice || playerChoice === "") {
//         return playerChoice.trim().toLowercase();
//     } else {
//         return false;
//     }
// };

// const decideNotToPlay = () => {
//     alert("I guess you chnaged your mind. maybe next time.");
// };

// const evaluatePlayerChoice = (playerChoice) => {
//     if (
//         playerChoice === "rock" ||
//         playerChoice === "paper" ||
//         playerChoice === "scissors"
//     ) {
//         return playerChoice;
//     } else {
//         return false;
//     }
// };


// const invalidChoice = () => {
//     alert("You didnt enter rock, paper, or scissors.");
// };

// const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random() * 3);
//     const rpsArray = ["rock", "paper", "scissors"];
//     return rpsArray[randomNumber];
// };

// const determineWinner = (player, computer) => {
//     const winner = 
//     player === computer
//     ? "Tie game!"
//     : player === "rock" && computer === "paper"
//     ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//     : player === "paper" && computer === "scissors"
//     ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//     : player === "scissors" && computer === "rock"
//     ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//     : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`

//     return winner;
// };

// const displayResult = (result) => {
//     alert(result);
// };

// const askToPlayAgain = () => {
//     return confirm("Play Again?");
// };

// const thanksForPlaying = () => {
//     alert("ok, thanks for playing.");
// };

// initGame();

// console.log(initGame);




// OBJECTS SYNTAX
// Key-value pairs in curly braces



// const myObj = { name: "Umolo"};

// const anotherObj = {
//     alive: true,
//     answer: 42,
//     hobbies: ["Eat", "Sleep", "Code"],
//     beverage: {
//         morning: "coffee",
//         afternoon: "Iced Tea"
//     },
//     action: function () {
//         return `Time for ${this.beverage.morning}`;
//     }
// };

// console.log(anotherObj.action());


// const vehicle = {
//     wheels: 4,
//     engine: function() {
//         return "Vrrooooom!";
//     }
// }

// const truck = Object.create(vehicle);
// truck.doors = 2;

// console.log(truck);
// console.log(truck.wheels); //inheritance
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function() {
//     return "Whooooooosh!";
// };

// console.log(car.engine());
// console.log(car.wheels);

// const tesla = Object.create(car);

// console.log(tesla.wheels);

// tesla.engine = function() {
//     return "Shhhhhhh.......!";
// } 

// console.log(tesla.engine());


// const band = {
//     vocals: "Robert Plant",
//     guitar: "jimmy page",
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };

// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) {
//     console.log(`On ${job}, it's ${band[job]}!`);
// }


// DESTRUCTURING OBJECTS

// const { guitar: myVariable } = band;

// const { guitar, vocals, bass, drums } = band;

// console.log(guitar);
// console.log(vocals);

// function sings({ vocals }) {return `${vocals} sings!`};

// console.log(sings(band));


// JAVACSRIPT CLASSES

// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         // this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//         // this.toppings = [];
//     }

//     getCrust() {
//         return this.crust;
//     }
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }

    // getToppings() {
    //     return this.toppings;
    // }
    // setToppings(topping) {
    //     this.toppings.push(topping)
    // }

    // bake(){
    //     console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    // }
//}

// const myPizza = new Pizza("Pepperoni", "small");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());

// CHILD CLASS

// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize){
//         super(pizzaSize);
//         this.type = "The Works";
//     }

//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//     }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();


// FACTORY FUNCTION


// function pizzaFactory(pizzaSize) {
//     const crust = "Original"
//     const size = pizzaSize;
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

// class Pizza {
//     // PUBLIC FIELD
//     crust = "original";

//     // PRIVATE FIELD
//     #sauce = "traditional";
//     constructor(pizzaSize) {
//         this.size = pizzaSize;
//     }

//     getCrust() {
//         return this.crust;
//     }

//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     } 
//     hereYouGo() {
//         console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.size} pizza.`);
//     }
// }

// const myPizza = new Pizza("large");
// myPizza.hereYouGo();

// console.log(myPizza.getCrust());


// JSON Javascript object notation
// JSON is ued to send and receive data
// JSON is a text format that is completely language independent
// Meaning JSON is used to send and receive data in many languages
// Not just in javascript
// JSON doesnt send functions


// const myObj = {
//     name: "Umolo",
//     hobbies: ["eat", "sleep", "code"],
//     hello: function () {
//         console.log("Hello");
//     }
// };

// console.log(myObj);
// console.log(myObj.name);
// myObj.hello();
// console.log(typeof myObj);

// const sendJSON = JSON.stringify(myObj);
// console.log(sendJSON);
// console.log(typeof sendJSON);
// console.log(sendJSON.name);

// const receiveJSON = JSON.parse(sendJSON)
// console.log(receiveJSON);
// console.log(typeof receiveJSON);



// JAVSCRIPT ERRORS AND ERROR HANDLING


// "use strict";

// Reference error
// variable = "Umolo";
// console.log(variable);


// Syntax error
// object..create();

// Type error
// const name = "Umolo";
// name = "blessing"

// const makeError = () => {
//     try {
//         // const name = "dave";
//         // name = "joe";
//         // throw new customError("This is a custom error!")


//     } catch(err) {
//         //console.warn(err);
//         //console.error(err);
//         console.error(err.name);
//         console.error(err.message);
//         console.error(err.stack);
//         //console.table(err);

//     }
// }

// makeError();


// function customError(message) {
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.message}`;
// }


// const makeError = () => {
//     let i = 1;
//     while (i <= 5) {
//         try {
//             if (i % 2 !== 0) {
//                 throw new Error("Odd Number");
//             }
//             console.log("Even Number!");
//         } catch (err) {
//             console.error(err.stack);
//         } finally {
//             console.log("...finally");
//             i++;
//         }
//     }
// }

// makeError();

// DOM DOCUMENT OBJECT MODEL

// const view1 = document.getElementById("view1");
// console.log(view1);

// const view2 = document.querySelector("#view2");
// console.log(view2);

// view1.style.display = "flex";
// view2.style.display = "none";

// const views = document.getElementsByClassName("view");
// console.log(views);
// const sameViews = document.querySelectorAll(".view");
// console.log(sameViews);

// const divs = view1.querySelectorAll("div");
// console.log(divs);

// const sameDivs = view1.getElementsByTagName("div");
// console.log(sameDivs);

// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivs);

// for (let i = 0; i < evenDivs.length; i++) {
//     evenDivs[i].style.backgroundColor = "darkblue";
//     // evenDivs[i].style.width = "200px";
//     // evenDivs[i].style.height = "200px";
// }


// const navText = document.querySelector("nav h1");
// console.log(navText);
// navText.textContent = "Hello world!";

// const navbar = document.querySelector("nav");
// navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>`;

// console.log(navbar);
// navbar.style.justifyContent = "space-around";

// console.log(evenDivs[0]);
// console.log(evenDivs[0].parentElement);
// console.log(evenDivs[0].parentElement.children);
// console.log(evenDivs[0].parentElement.childNodes);
// console.log(evenDivs[0].parentElement.hasChildNodes);
// console.log(evenDivs[0].parentElement.lastChild);
// console.log(evenDivs[0].parentElement.firstChild);
// console.log(evenDivs[0].parentElement.lastElementChild);
// console.log(evenDivs[0].parentElement.firstElementChild);


// console.log(evenDivs[0].nextSibling);
// console.log(evenDivs[0].nextElementSibling);

// console.log(evenDivs[0].previousSibling);
// console.log(evenDivs[0].previousElementSibling);



// // ADDING AND REMOVING FROM DOM

// view1.style.display = "none";
// view2.style.display = "flex";
// view2.style.flexDirection = "row";
// view2.style.flexWrap = "wrap";
// view2.style.margin = "10px";

// while (view2.lastChild) {
//     view2.lastChild.remove();
// }

// const createDivs = (parent, iter) => {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = iter;
//     newDiv.style.backgroundColor = "black";
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.margin = "10px";
//     newDiv.style.display = "flex";
//     newDiv.style.justifyContent = "center";
//     newDiv.style.alignItems = "center";
//     parent.append(newDiv);
// };

// // createDivs(view2, 10);


// for (let i =1; i <= 12; i++) {
//     createDivs(view2, i);
// }



// JAVASCRIPT EVENT LISTENERS

// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");


// SYNTAX: addEventListener(Event, function, useCapture)

// const doSomething = () => {
//     alert("doing Something");
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);


// h2.addEventListener("click", function (event) {
//     console.log(event.target);
//     event.target.textContent = "Clicked";
// });

// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         console.log("readyState: complete");
//         initApp();
//     }
// });

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", (event) => {
        
//         view.style.backgroundColor = "purple";
//     }, false);

//     div.addEventListener("click", (event) => {
//         div.style.backgroundColor = "blue";
//     }, false);

//     h2.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         event.target.textContent = "Clicked";
//     }, false);
// };


// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", (event) => {
//         view.classList.add = "purple";
//         view.classList.toggle("darkblue");
//     }, false);

//     div.addEventListener("click", (event) => {
//         div.style.backgroundColor = "blue";
//         div.classList.add = "blue";
//         div.classList.toggle("black");
//     }, false);

//     h2.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         // event.target.textContent = "Clicked";
//         const myText = event.target.textContent;
//         myText === "My 2nd view"
//         ? (event.target.textContent = "clicked")
//         : (event.target.textContent = "My 2nd view");
//     }, false);


//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", (event) => {
//         event.target.classList.add("height100");
//     });

//     nav.addEventListener("mouseout", (event) => {
//         event.target.classList.remove("height100");
//     });
// };



// const initApp = () => {
//     const view = document.querySelector("#view3");
//     const myForm = view3.querySelector("#myForm");
//     myForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         console.log("Submit event");
//     });

// };



// WEB STORAGE API

// NOT PART OF THE DOM - nREFERS TO THE WINDOW API
// AVAILABLE TO JS VIA THE GLOBAL VARIABLE: WINDOW

// WE DO NOT HAVE TO TYPE WINDOW. IT IS IMPLIED:


// window.alert("ok!");
// // IS THE SAME AS 
// alert("ok!");


// const myArray = ["eat", "sleep", "code"];
// const myObject = {
//     name: "Umolo",
//     logName: function () {
//         console.log(this.name);
//     }
// };


// // sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// // const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// // console.log(mySessionData);


// localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// // WE CAN ALSO REMOVE A DATA
// // localStorage.removeItem("myLocalStorage");
// // OR
// // localStorage.clear();
// // OR
// const key = localStorage.key(0);

// // TO KNOW THE NUMBER OF ITEMS IN THE LOCAL STORAGE

// const storeLength = localStorage.length;

// const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
// console.log(myLocalData);



// JAVASCRIPT MODULES

// import playGuitar from "./guitars.js";
// // // import { shredding, plucking } from "./guitars.js";

// // // YOU CAN ALSO RENAME THEM AS YOU INPORT OR EXPORT THEM

// import { shredding as shred, plucking as fingerpicking } from "./guitars.js";


// // OR IMPORT ALL

// import * as Guitars from "./guitars.js";

// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());

// import User from "./user.js";
// const me = new User("email@email.com", "umolo");


// HIGHER ORDER FUNCTIONS

// A HIGHER ORDER FUNCTION IS A FUNCTION THAT DOES AT LEAST ONE OF THE FOLLOWING
// TAKES ONE OR MORE FUNCTIONS AS AN ARGUMENT (PARAMETER)
// RETURNS A FUNCTION AS IT'S RESULT.


// FOREACH()

// import { posts } from "./posts.js";

// posts.forEach((post) => {
//     console.log(post);
// });
// console.clear();

// const filteredPosts = posts.filter((post) => {
//     return post.userId === 1;
// });
// console.log(filteredPosts);

// const mappedPosts = filteredPosts.map((post) => {
//     return post.id * 10;
// });
// console.log(mappedPosts);

// const reducedPostsValue = mappedPosts.reduce((sum, post) => {
//     return sum + post;
// });
// console.log(reducedPostsValue);


// FETCH API REQUIRES A DISCUSSION OF 
// CALLBACKS, PROMISES, THENABLES AND ASYNC/AWAIT

// CALLBACKS

// function firstFunction(parameters, callback) {
//     // do stuff
//     callback();
// }

// PROMISES
// 3 STATES: PENDING, FULFILLED, REJECTED.

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if(!error){
//         resolve("Yes! resolvled the promise!");
//     } else {
//         reject("No! rejected the promise");
//     }
// });

// // console.log(myPromise);

// // myPromise.then(value => {
// //     console.log(value);
// // });

// // myPromise
// // .then(value => {
// //     return value + 1
// // })

// // .then(newValue => {
// //     console.log(newValue);
// // })

// // .catch(err => {
// //     console.error(err);
// // })


// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("myNextPromise resolved!");
//     }, 3000)
// });

// myNextPromise.then(value => {
//     console.log(value);
// });

// myPromise.then(value => {
//     console.log(value);
// });


// const user = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     return response.json();
// })

// .then(data => {
//     data.forEach(user => {
//         console.log(user);
//     })
// });

// console.log(user);


// ASYNC / AWAIT

// const myusers = {
//     userList: []
// }

// // async function myCoolFunction() {

// // }

// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     console.log(jsonUserData);
//     return jsonUserData;
// }

// myCoolFunction();


// EXAMPLE
// WORKFLOW FUNCTION

// const getAllUserEmails = async () => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const jsonUserData = await response.json();
//         const userEmailsArray = jsonUserData.map(user => {
//             return user.email;
//         });

//         postToWebPage(userEmailsArray);
// }

// // getAllUserEmails();

// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmails()


// 2ND PARAMETER OF FETCH IS A OBJECTS 

// const getDadJoke = async () => {

//         const response = await fetch("https://icanhazdadjoke.com/", { 
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//         }
//     });
//         const jsonJokeData = await response.json();
//         console.log(jsonJokeData);

// }

// getDadJoke();

// EXAMPLE 2


// const jokeObject = {
//     id: "0oO71TSv4Ed",
//     joke: "Why was it called the dark ages? becasue of all the knights."
// }


// const postData = async () => {

//         const response = await fetch("https://httpbin.org/post", { 
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObject)
//     });
//         const jsonResponse = await response.json();
//         console.log(jsonResponse.headers);

// }

// postData(jokeObject);


// EXAMPLE 3

// const requestJoke = async (firstName, lastName) => {

//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);

//     const jsonResponse = await response.json();
//     console.log(jsonResponse.value.joke);

// }

// requestJoke("Clint", "Eastwood");


// ABSTRACT INTO FUNCTION
// MAYBE FROM A FORM


// const getDataFromForm = () => {
//     const requestObj = {
//         firstName: "Bruce",
//         lastName: "Lee",
//         categories: ["nerdy"]
//     };

//     return requestObj;
// }


// const buildRequestUrl = (requestData) => {
//     return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
// }


// const requestJoke = async (url) => {

//     const response = await fetch(url);

//     const jsonResponse = await response.json();
//     const joke = jsonResponse.value.joke;
//     console.log(joke);

// }

// const postJokeToPage = (joke) => {
//     console.log(joke);
// }

// // PROCEDURE WORKFLOW FUNCTION

// const processJokeRequest = async () => {
//     const requestData = getDataFromForm();
//     const requestUrl = buildRequestUrl(requestData);
//     await requestJoke(requestUrl);
//     console.log("Finished!");
// }

// processJokeRequest();



// REG EX


document.getElementById("phoneNum").addEventListener("input", (event) =>{
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);

    if (!found && phone.length) {
        input.classList.add("invalid");
        format.classList.add("block");
    } else {
        input.classList.remove("invalid");
        format.classList.remove("block");
    }
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(regex, "");
    console.log(savedPhoneNum);
});


document.getElementById("textForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("textEntry");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, " ").trim();
    console.log(newText);

    // SENDING TO API
    const encodedInputtext = encodeURI(input.value);
    const encodedCleanText = encodeURI(newText);
    console.log(encodedInputtext);
    console.log(encodedCleanText);
})

