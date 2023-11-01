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
