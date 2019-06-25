var readline=require('readline-sync');
var i;
var j;
 console.log('Enter the size of array')
var size=readline.question()
var array=[];
for(i=0;i<size;i++)
{
console.log('Enter number in array')
array[i]=readline.question()
}
console.log(array)

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
console.log(array);
alist=array.join();
console.log('Array To list')
console.log(alist);

