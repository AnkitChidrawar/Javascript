function isPrime(n) {   //This function are use to generate prime numbers
    if(n===0||n===1)
    {
        return false
    }
    else if(n===2)
    {
        return true
    }
    else
    {
    for(var i=2;i<n;i++)
    {
        if(n%i===0)
        {
            return false
        }
    }
    return true
    }
    }
    // console.log(isPrime(3))
    // var readline=require('readline-sync');
    
    // var str1=readline.question('Enter 1st string:--');
    // var str2=readline.question('Enter 2nd string:--');
    function anagram(str1,str2)
    {
        // console.log(str1+'===='+str2)
       var arr1 = Array.from(str1).sort();
  console.log(arr1+'sdsd');
       
       var arr2 = Array.from(str2).sort();
    console.log(arr2+'sdsd');
       
       for(var i=0;i<=arr1.length-1;i++)
       {
            var flag=false;
            if(arr1[i] === arr2[i])
           {
               flag=true;
           }
           else
           {
               flag=false;
           }
       }
       if(flag)
       {
          console.log("Given strings are anagrams");
          return true
          
       } 
       else 
       {
          console.log("Given strings are not anagrams");
          return false
       }
    //  return flag;
    }
    // anagram(str1,str2)




    var k = 100;
    var j1 = 0;
    // var l = 0
    function catcht() {
        var arr = new Array() //here create array
    
        var l = 0
        for (i = 0; i < 10; i++) {
            for (j = j1; j<k; j++) {
                if (isPrime(j) == true) {       //this condition check prime number number or not by calling isprime function
                    arr[l] = j
                    l++;
                }
            }
            
            k = k + 100;
            j1 = j1 + 100;
            l=0;
        
            // console.log(j1);//array return to function
            // console.log(k);
            if(k==100||j1==110)
            {
                break;
            }
         number(arr)
        }
    
    
    }
    // catcht()
    // console.log()
        function number(arr)
    {
        // console.log(arr)
        var l=0;
        var arr2 = new Array()
        // var l=0;
        for(var i=0;i<arr.length;i++)
        {
            for(var j=i+1;j<arr.length;j++)
            {
                // console.log(arr[j]+'j pr'+arr[i]+'i print')
                var i1=arr[i].toString(); 
                var j1=arr[j].toString();
                if(anagram(i1,j1)===true)
                {
                    // console.log(true)
                    arr2[l] = arr[j]           
                    l++;
                }
            }
        }
        console.log(arr2)
       
    }
    catcht()
   

// function ankit()
// {
//     number(10)
// }
// function number(k)
// {
//     console.log(k)
// }
// ankit()




