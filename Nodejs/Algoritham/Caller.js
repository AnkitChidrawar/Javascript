
var caller1 =require(`./utility2`)
var readline=require('readline-sync');
var array2;
var r2=readline.question('Enter a number:--');
array2=caller1.functions.Prime(r2)
 console.log(array2);
 console.log('****************prime = palindrome*******************')
            for(var i of array2)
            {
                        caller1.functions.Palindrm(i) 
            }

// caller1.functions.Anagram(palindrome,)  
// var prime=[];
//   prime=prim.functions.Prime(r2)
// //  var a=[];
//  for(var i=0;i<=prime.length;i++)
// {
//     // prime[i]=prim.functions.Prime(r2)  
//     console.log(prim.functions.Palindrm(prime[i]))
// }

