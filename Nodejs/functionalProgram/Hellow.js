
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout


  
});
rl.on('Enter a name', (input) => {
  console.log(`Hello ${input}How are You?');
  rl.close
});
