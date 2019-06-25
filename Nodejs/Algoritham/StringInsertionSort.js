var readline=require('readline-sync')
    var i;
    var temp;
    console.log('Enter The String In Array:-')
       var array1=readline.question();
    // for(i=0;i<no;i++)
    // {
    //     console.log('Enter The String In Array:-')
    //     array1[i]=readline.question();
    // }
    var array=array1.toLowerCase().split(' ');
    console.log(array);
     function Insertion(arr)
     {
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
    console.log('Sorted complited By Insertion Sort:-')

     console.log(Insertion(array))
    
alist=array.join();
console.log('Array To list')
console.log(alist)

