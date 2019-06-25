var readline=require('readline-sync');
var r1=readline.question('Enter 1st string:--');
var r2=readline.question('Enter 2nd string:--');
var arr=new Array(26);
var charr;

function charcount(st)
{
    charr=Array.from(st);
    for(var i=0;i<=charr.length;i++)
    {
        console.log(charr[i]);
    }
    for(var i =0;i<charr.length;i++)
    {
        if(charr[i]>=65 && charr<=90)
        {
            arr[charr[i]-65]++;
        }
        else if(charr[i]>=97 && charr[i]<=122)
        {
            arr[charr[i]-97]++;
        }
    }
    return arr;
}
function Anagra(r1,r2)
{
    var count1=new Array(26);
    var count2=new Array(26);
    count1=charcount(r1);
    count2=charcount(r2);
    for(var i=0;i<26;i++)
    {
        if(count1[i]!=count2[i])
        {
            return false;
        }

    }
 return true;
}
var b=Anagra(r1,r2);
    if(b)
    {
    console.log('Anagram');
    }
    else
    {
    console.log('not');
    }

