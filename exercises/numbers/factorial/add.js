
/*let family = {mother: 'Cath' , father: 'Ben' , sister: 'Mercy' , brothers: 'Vinnie, Victor, Ezra'}
console.log( family.mother + family.father);
console.log( family.brothers +' ' + family.sister);
console.log( family['mother']);
let daysInMonth = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
  }
  
           // Change this value and see what happens
  let numDays =  daysInMonth['May']; // <--- Notice this!
  
  console.log(`There are ${numDays} in ${'Month'}.`); 
  let process = require('process');

let commandLineArguments = process.argv;

for (let i = 0;i < commandLineArguments.length; i += 1) {
  let arg = commandLineArguments[i];

  console.log(`Argument at index ${i} is: ${arg}`);
}

let process = require('process');

let commandLineArgs = process.argv;

let firstUserArg = commandLineArgs[2];
let secondUserArg = commandLineArgs[3];

// The arguments arrive as strings, we need to convert them
// to numbers before we add them.
let leftSummand = Number.parseFloat(firstUserArg);
let rightSummand = Number.parseFloat(secondUserArg);

let sum = leftSummand + rightSummand; 

console.log(`${leftSummand} + ${rightSummand} = ${sum}`); 

let process = require('process');
let readline = require('readline');

let io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function handleAnswer(answer) {
  console.log(`You answered: "${answer}"`);

  // This tells Node to stop waiting for input and to exit
  io.close();
}

// This tells Node to print the above question and call
// handleAnswer when you type something and hit enter.
io.question('What would you like for lunch today? ', handleAnswer);*/
let process = require('process');
let readline = require('readline');

let io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

io.question('What would you like for lunch today? ', function (answer) {
  console.log(`You answered: "${answer}"`);

  io.close();
});