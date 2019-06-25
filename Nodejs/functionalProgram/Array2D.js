
var readline=require('readline-sync')
console.log('Enter row')
var row=readline.question()
console.log('Enter col')
var col=readline.question()
var arr=new Array(row)
for(i=0;i<row;i++)
{
arr[i]=new Array(row)
}
for(i=0;i<row;i++)
{
    for(j=0;j<col;j++)
    {
        var val=readline.question('Enter value ')
        console.log(arr[i][j]=val)

    }
}
console.log(arr)

