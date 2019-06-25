var readline=require('readline-sync')
var num=readline.question('Enter Decimal Input:-')
function binaryConvert(num) {
    
    if (num < 0) {
      console.log("Please enter a number");
      
    } else if (num != Math.floor(num)) {
      console.log("Please enter a positive number");
    
    } else {
      var binary = parseInt(num, 10);
      console.log("Conversion From  Decimal To Binary:-\n ",binary.toString(2));
     var binary1=binary.toString(2)
      
    }
return binary1;
  }
//   binaryConvert(num);
  var r= binaryConvert(num);
// console.log(r)
  function decimal(num)
  {
    
      
    //   console.log(num.length-1)
      count=0;
      console.log('Below Numbers Total are EqualTo the Number:-' )
for(i=num.length-1;i>=0;i--)
{
//   console.log(count)
    if(num.charAt(i)==1)
    {
        var num1=Math.pow(2,count)

         console.log(num1)
       
    }
    else if(num.charAt(i)==0)
    {

    }
   count=count+1;
  }
  var dec = parseInt(num,2);  
   console.log('Convert From Binary To Decimal:-\n',dec)
}
  decimal(r)

