// ---------------------
// Övning 1
// --------------------- 

const person = {
    firstName : "Gong",
    lastName : "Moonphruk",
    age : 32,
    weight : "108 kg"
}

person.hairColor= "black";

// console.log(person);

// let num1 = 12;
// let num2 = 4;

// console.log(num1 * num2);

// let num1 = 15;
// let num2 = 2;
// let num3 = 4;

// let result = num1 + (num2 * num3);

// console.log(result)

let random = Math.floor(Math.random() * 10) + 1;

// console.log(random);

// ---------------------
// Övning 2
// --------------------- 

const names = ["Britt-Marie", "Adam", "Sofia", "Jimmy", "Cecilia", "Gong"];

const sortedNames = names.sort();

// console.log(sortedNames);

const removeLastArray = names.pop()

// console.log(removeLastArray)

names.unshift('Sofia');

// console.log(names)

// const countNames = names.map(() => names).length;

// console.log(`Count: ${countNames}`);

let countNames = 0;

for(let i = 0; i < names.length; i++){
    countNames++;
}
// console.log(`Count: ${countNames}`);

// const greetings = names.map(name => "Hejsan, " + name);

// console.log(greetings)

// greetings.forEach(name => {
//     console.log(name)
// });


// ---------------------
// Övning 3
// --------------------- 

// const greetings = function(name) {
//     console.log(`Hello ${name}`)
// }

// greetings("Gong");

// const numberToColor = function(num){
//     if(num === 0 || num === 12){
//         console.log("White")
//     }
//     else if(num === 13 || num ===18){
//         console.log("Green")
//     }
//     else if(num === 19 || num === 25){
//         console.log("Red")
//     }
//     else if(num === 26 || num === 99){
//         console.log("Blue")
//     }
//     else{
//         console.log("Black")
//     }
// }

// numberToColor(19);


//Funktion 1:

// const hello = () => console.log('Hello world');

// hello();

// Funktion 2:

// const calc = (numberOne, numberTwo) => numberOne + numberTwo;

// console.log(calc(2, 3));


// Funktion 3:

const tip = (sum, percent) => sum + sum * (percent / 100);

let myTip = tip(25, 10);

console.log(myTip);





