function flipht(answer)
{
  for(var i=1;i<=answer;i++)
    {
        var random = Math.random(2);
        console.log(''+random)
       if(random>0.5)
       {
           Hd++;
       } 
       else
       {
           Td++;
       }
       
    }
return Hd,Td;

}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var Hd=0;
var Td=0;
rl.question('Enter a Number of flips:- ', (answer) => {
  var num=flipht(answer);
    
    var HdPer=Hd*100/answer;
       var TdPer=Td*100/answer;
       console.log('Head percentage is:-'+HdPer);
       console.log('Tail Percentage is:-'+TdPer);
  rl.close();

});
