const readline = require('readline')
const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var har=1;
function Harmo(k)
{
   
if(k!=0)
{
    for(i=2;i<=k;i++)
    {
        har=har+1/i;
    }
return har;
}

}
r.question('Enter n number:- ',(k)=>{
    var k1=Harmo(k)
   console.log(har);
    
})