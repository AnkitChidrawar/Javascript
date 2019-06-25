const readline = require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function f1(l)
{
    var i;
    if(l==0 && l==1)
    {
        console.log('invalid number')
    }
    else
    {
for(i=2;i*i<=l;i++)
{
    while(l%i==0)
    {
        console.log(i);
        l=l/i;
    }
    }


    
console.log(l);
    }
}
rl.question('Enter a number',(l)=>{
  
    f1(l);

});