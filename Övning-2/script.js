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

const greetings = names.map(name => "Hejsan, " + name);

// console.log(greetings)

greetings.forEach(name => {
    console.log(name)
});
