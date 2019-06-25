var readline=require('readline-sync')
var srchI=readline.question('Enter a number:-')
var array=[10,20,30,12,15,28,1,7];
var lowI=0;
var highI=array.length-1;
var mid=Math.floor(highI-lowI)/2;
var intBsort=require(`./utility2`)
console.log('************Before Sorting***********')
console.log(array)
console.log('************After Bubble Sorting************')

console.log(intBsort.functions.SortInt(array))
var sortArray=intBsort.functions.SortInt(array)

// function Sort1(array)
// {
// var i;
// var j;
// for(i=0;i<array.length;i++)
// {
//     var flag=0;
   
//     for(j=0;j<array.length-1-i;j++)
//     {
//         if(parseInt(array[j])>parseInt(array[j+1]))
//         {
//             var tem=array[j];
//             array[j]=array[j+1];
//             array[j+1]=tem;
//             flag=1;
//                }
//     }
//     if(flag===0)
//     {
//         break;
//     }
// }
// return array;
// }
// var array2=Sort1(array)

// console.log(array2);

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