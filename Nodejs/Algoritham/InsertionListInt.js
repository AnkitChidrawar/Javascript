
var insertionInt=require(`./utility2`)

// function insertionSort (items) {
//     for (var i = 1; i < items.length; i++) {
//       let value = items[i]
//       // store the current item value so it can be placed right
//       for (var j = i - 1; j > 0 && items[j] > value; j--) {
//         // loop through the items in the sorted array (the items from the current to the beginning)
//         // copy each item to the next one
//         items[j + 1] = items[j]
//       }
//       // the last item we've reached should now hold the value of the currently sorted item
//       items[j + 1] = value
//     }
  
//     return li
//   }
  
//   var li = [54, 26, 93, 17, 77, 31, 44, 55, 20]
//   console.log(insertionSort(li)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
    var readline=require('readline-sync')
    console.log('Enter the Size of array:-')
    var no=readline.question();
    var i;
    var array=[];
    var temp;
    for(i=0;i<no;i++)
    {
        console.log('Enter the number in array:-')
        array[i]=readline.question();
    }
    // console.log(array);
    console.log('Sorted complited By Insertion Sort:-')

console.log(insertionInt.functions.intInsertionSort(array,no))
//      function Insertion(arr,size)
//      {
//         for(i=1;i<size;i++)
//         {
//             temp=arr[i];
//             k=i
//             while(k>0 && arr[k-1]>temp)
//             {
//                 arr[k]=arr[k-1]
//                 k=k-1;
//             }
//             arr[k]=temp; 
            
//         }
//    return arr;
//      }
    // console.log('Sorted complited By Insertion Sort:-')


    
alist=array.join();
console.log('Array To list')
console.log(alist)

