
var an;
function Inputna(name)
{
  an=(name).length;
  return an;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Hello <<UserName>>! How are you`);
 
rl.question('Enter a Name:- ', (answer) => {
    var an1=Inputna(answer)
    if(an1>=3)
    {
  console.log(`Hello ${answer}! How are you`);
    }
  else
    {
        console.log(`Please enter minimum 3 character`);       
    }
  rl.close();

});

