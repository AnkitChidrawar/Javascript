function Lepyr(number)
{
    var k=number.toString();
    var an1=k.length;
    return an1;
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a Number:- ', (answer) => {
    var an=Lepyr(answer);
    console.log(an);
    if(an==4)
    {
        if(answer%400==0)
        {
            console.log(answer+'Is leap year')
        }
        else if(answer%100==0)
        {
            console.log(answer+' is not a leap year')
        }
        else if(answer%4==0)
        {
            console.log(answer+' is a leap year')
        }
        else
        {
            console.log(answer+' is Not a leap year')
        }
    }
    else
    {
        console.log('Please enter a 4 digit number ')
    }

  rl.close();

});