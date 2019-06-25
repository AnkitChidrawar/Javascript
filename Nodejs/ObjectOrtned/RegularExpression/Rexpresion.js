/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Rexpresion.js
 *  
 *  Purpose:     Desc -> Read in the following message: Hello <<name>>, We have your full
                         name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   19-06-2019
 *
 *******************************************************************************/

var readline = require('readline-sync')
var fs = require('fs');
var fullname = readline.question('Enter Full Name:-\n')
var mobileNumber = readline.question('Enter Mobile Number:-\n')
var date = new Date();
date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

var str1 = fs.readFileSync('Rexpresion.txt', 'utf8');
console.log(str1)

   str1 = str1.replace("XX/XX/XXXX", date);//XX/XX/XXXXvar 
   str1=allLetter(fullname,str1)
   str1=mobileNovalidate(mobileNumber,str1)
   
   
   
function allLetter(fullname,str1)   //this function are use to name validate
 { 
   var fullname1=fullname.toString()    
   var letters = /^[a-zA-Z]+$/      //here regex is use for check the enter input is character or not   
   if(fullname1.match(letters))     
   {
   str1 = str1.replace("<<fullname>>", fullname1);
   return str1;
   }
   else
   {
   console.log('Please input alphabet characters only\n \n');
   return false;
   }
 }


function mobileNovalidate(mobileNumber,str1) //this function are use for number is valid or not
{

   if (mobileNumber.match(/^[0]?[789]\d{9}$/))
   {
      str1 = str1.replace("xxxxxxxxxx", mobileNumber);
      return str1;
   }
   else 
   {
      console.log(mobileNumber + " is NaN.Or not a 10 digits please enter atleast 10 digits \n \n");
      return  "Hello <<fullname>>, We have your full.contact number 91-xxxxxxxxxx.todays date XX/XX/XXXX"
      ;
   }
}



fs.writeFileSync('Rexpresion.txt', str1)
console.log("***************After changes**************")
console.log("\n"+str1)