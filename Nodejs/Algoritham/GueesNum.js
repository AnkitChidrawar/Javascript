// Question to find your number
// Desc -> takes a command-line argument N, asks you to think of a number between 0 and N-1, where N = 2^n, and always guesses the answer with n questions.
// I/P -> the Number N and then recursively ask true/false if the number is between a high and low value
// Logic -> Use Binary Search to find the number
// O/P -> Print the intermediary number and the final answer

var number=process.argv[2]
var arr1=[]
var range=Math.pow(2,number)
for(i=0;i<=range-1;i++)
{
    arr1[i]=i;

}
// console.log(arr1)
var readline=require('readline-sync')
// var lowI=0;
// var highI=arr1.length;
// var mid=Math.floor(highI-lowI)/2;
// var Y=true;
// var N=false;
// while(lowI<=highI)
// {
//     mid=Math.floor(highI-lowI/2)
    console.log('This is your Guees number Y OR N')
    var Y=readline.question()
    Console.log(Y)
//     function recaller()
//     {
//     if(Y==Y)
//     {
//         console.log()
//     }
//     else if(N==false)
//     {
//         console.log('Your Number Is Less Or Greater')
//     }
// }
//     if(parseInt(arr1[mid])==srchI)
//     {
//         console.log('Item is '+mid+' index position ');
//         break;
//     }
//     else if(parseInt(arr1[mid])<srchI)
//     {
//         lowI=mid+1;
//     }
//     else
//     {
//         highI=mid-1;
//     }
//     mid=Math.floor(highI-lowI/2)
    
// }
//  if(lowI>highI)
//  {
//      console.log('Item are not found');
//  }