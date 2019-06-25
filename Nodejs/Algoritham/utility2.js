exports.functions =
{
    
Prime:function (r2)
{
    var arr=[]
    var prime= "";                                                 
    var i=0;
    var num=0;
    var j=0;
    for (i = 0; i <= r2; i++)  	   
    {
      var counter=0; 		  
                        
      if(i>1)
      {
       for(num =1; num<=i; num++)
       {
        if(i%num==0)
          {
            counter++;
          }
        }
      }
        if (counter ==2)
      {
      arr[j]=i;
      j++;  
    }	                         
    }
    return arr; 
},
Palindrm:function (no)
{
    var reverse=0;
    var sm=0;
    var temp;
    temp=no;


    while(no>0)
    {    
            reverse=no%10;  //get reminder 
            sm=(sm*10)+reverse;    
            no=Math.floor(no/10);    //get div
    }  
    //    console.log('Below Are Prime + Palindrome')
        if(temp==sm) 
            {
                  console.log(sm)  
            } 
    //    else
    //    {
    //        console.log('Number is not a Palindrome')
    //        console.log(temp) 
    //     }
// 
// return sm,temp;
},
Anagram:function(str1,str2)
    {
        var arr1 = Array.from(str1).sort();
        console.log(arr1);
        
        var arr2 = Array.from(str2).sort();
        console.log(arr2);
        if(arr1.length==arr2.length)
        {
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
        } 
        else 
        {
           console.log("Given strings are not anagrams");
        }
        // console.log("Given strings are not anagrams");
    }
    return flag;
    },

SortInt:function(array)
{
var i;
var j;
for(i=0;i<array.length;i++)
{
    var flag=0;
   
    for(j=0;j<array.length-1-i;j++)
    {
        if(parseInt(array[j])>parseInt(array[j+1]))
        {
            var tem=array[j];
            array[j]=array[j+1];
            array[j+1]=tem;
            flag=1;
        }
    }
    if(flag===0)
    {
        break;
    }
}
// for(i=0;i<array.length-1;i++)
// {
//     console.log(array[i]);
// }
  // console.log(array);

return array;

},
sortString:function(array)
{
  var i,j;

  for(i=0;i<array.length;i++)
  {
      var flag=0;
     
      for(j=0;j<array.length-1-i;j++)
      {
          if(array[j]>array[j+1])
          {
              var tem=array[j];
              array[j]=array[j+1];0.
              array[j+1]=tem;
              flag=1;
                 }
      }
      if(flag===0)
      {
          break;
      }
  }
  
  console.log(array);
  return array;

},
 intBinarySearch:function(array,srchI)
 {
  var sortArray=array.split(" ").sort() 
  var lowI=0;
  var highI=array.length-1;
  var mid=Math.floor(highI-lowI)/2;
  while(lowI<=highI)
  {
      mid=Math.floor(highI-lowI/2)
  
      if(parseInt(sortArray[mid])==srchI)
      {
          console.log('Item is '+mid+' index position ');
          break;
      }
      else if(parseInt(sortArray[mid])<srchI)
      {
          lowI=mid+1;
      }
      else
      {
          highI=mid-1;
      }
      mid=Math.floor(highI-lowI/2)
      
  }
   if(lowI>highI)
   {
       console.log('Item are not found');
   }
   return mid;
 },
strBinarySrch:function(arr,srchS)
{
  var lowI=0;
  var highI=arr.length-1;
  var mid=Math.floor(highI-lowI)/2;
  // var k=arr.split(' ').sort();
  var foundStr='';
  console.log(arr)
  
  while(lowI<=highI)
  {
      mid=Math.floor(highI-lowI/2)
  
      if(arr[mid]==srchS)
      {
           foundStr=console.log('Item is '+mid+' index position ');
          break;
      }
      else if(arr[mid]<srchS)
      {
          lowI=mid+1;
      }
      else
      {
          highI=mid-1;
      }
      mid=Math.floor(highI-lowI/2)
      
  }
   if(lowI>highI)
   {
     foundStr=console.log('Item are not found');
   }
   return foundStr;
  //  return mid;

},
intInsertionSort:function(arr,size)
{
   for(i=1;i<size;i++)
   {
       temp=arr[i];
       k=i
       while(k>0 && arr[k-1]>temp)
       {
           arr[k]=arr[k-1]
           k=k-1;
       }
       arr[k]=temp; 
       
   }
return arr;
},
stringInsertionSort:function(arr)
{
  var i;
   for(i=1;i<arr.length;i++)
   {
       temp=arr[i];
       k=i
       while(k>0 && arr[k-1]>temp)
       {
           arr[k]=arr[k-1]
           k=k-1;
       }
       arr[k]=temp; 
       
   }
return arr;
}

};

