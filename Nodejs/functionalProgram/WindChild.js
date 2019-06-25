var t=process.argv[2];
var v=process.argv[3];
var c=Math.pow(v,0.16);                      ,,,,,
console.log(c);
console.log( 'Temperature:---',+t)
console.log( 'Speed:-----',+v)
var w=0;
if(t<50)
{
    if(v>120 || v<3)
    {
 w=34.74+0.6215*t+(0.4275*t+35.75)*c
    }
    else
    {
        console.log('please enter the temparature more than 50 & enter wind speed below 3 ')
    }
    console.log(w);
}

