// // function func() { 
// // var array=[10,20,30,12,15,28,1,6,66,4,22,11];
// // array.sort();
// // console.log(array);
// // }
// // func();
// var array=[1,6,66,4,22,11];
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
//         }
//     }
//     if(flag===0)
//     {
//         break;
//     }
// }
//     for(i=0;i<=array.length-1;i++)
//     {
//         console.log('array',+array[i]);
//     }
var readline=require('readline-sync')
var srchI=readline.question('Enter a number:-')
var array2=[1,2,3,4,5,6,7,8];
// var array2=array.sort();
var lowI=0;
var highI=array2.length-1;
var mid=Math.floor(highI-lowI)/2;
console.log(array2);
while(lowI<=highI)
{
    mid=Math.floor(highI-lowI/2)

    if(array2[mid]==srchI)
    {
        console.log('Item is '+mid+' index position ');
        break;
    }
    else if(array2[mid]<srchI)
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
