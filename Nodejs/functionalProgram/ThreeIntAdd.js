var readline=require('readline-sync')
console.log('Enter Number Of Input')
var n=readline.question()
var arr=new Array(n)
let count=0;
var i;

for(i=0;i<n;i++)
{
    arr[i]=parseInt(readline.question())
}
console.log(arr)
for(i=0;i<arr.length-2;i++)
{
    for(j=i+1;j<arr.length-1;j++)
    {
        for(k=j+1;k<arr.length;k++)
        {
            var r=arr[i]+arr[j]+arr[k]
             console.log(r)
            if(r==0)
            {
                var r=arr[i]+arr[j]+arr[k]
                // console.log(r)
                count=count+1;
                console.log(arr[i]+'+'+arr[j]+'+'+arr[k]+'='+r)
            }
        }
    }
}
console.log('Total count',+count)








// for (int i = 0; i < arr.length; i++) {
//     for (int j = i + 1; j < arr.length; j++) {
//         for (int k = j + 1; k < arr.length; k++) {
//             if (arr[i] + arr[j] + arr[k] == 0) {
//                 count++;
//                 System.out.println(arr[i] + "+" + arr[j] + "+" + arr[k] + "=" + "0");
//             }
//         }
//     }
// }
// // output
// System.out.println("total pairs are " + count);

// }