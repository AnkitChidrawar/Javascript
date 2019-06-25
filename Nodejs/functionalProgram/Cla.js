
var pow=process.argv[2];

console.log(process.argv);
var a=1;
power(pow)
function power(d1)
{
 
    if(d1<31)
    {
        for(i=0;i<=d1;i++)
        {
        console.log(a);
        a =2*a;

        }
    }
    else
    {
        console.log('Please enter below 31')
    }

}



  