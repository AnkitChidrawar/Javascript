
var anagra=require(`./utility2`)

var readline=require('readline-sync');
var str1=readline.question('Enter 1st string:--');
var str2=readline.question('Enter 2nd string:--');
console.log(anagra.functions.Anagram(str1,str2))
//    var arr1 = Array.from(str1).sort();
//    console.log(arr1);
   
//    var arr2 = Array.from(str2).sort();
//    console.log(arr2);
   
//    for(var i=0;i<=arr1.length-1;i++)
//    {
//         var flag=false;
//        if(arr1[i] === arr2[i])
//        {
//            flag=true;
//        }
//        else
//        {
//            flag=false;
//        }
//    }
//    if(flag)
//    {
//       console.log("Given strings are anagrams");
//    } 
//    else 
//    {
//       console.log("Given strings are not anagrams");
//    }
