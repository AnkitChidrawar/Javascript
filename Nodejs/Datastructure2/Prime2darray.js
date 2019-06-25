/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Prime2darray.js
 *  
 *  Purpose:     Desc -> Read the Text from a file, split it into words and arrange it as Linked List.
 *                       Take a user input to search a Word in the List. If the Word is not found then add it
 *                       to the list, and if it found then remove the word from the List. In the end save the
 *                       list into a file
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   16-06-2019
 *
 *******************************************************************************/
function isPrime(n) {   //This function are use to generate prime numbers
    if (n === 0 || n==1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {   //this loop for 
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
var k = 100;
var j1 = 0;
function primeArray() {
    var arr = new Array() //here create array

    var l = 0
    for (i = 0; i < 10; i++) {
        for (j = j1; j < k; j++) {
            if (isPrime(j) == true) {       //this condition check prime number number or not by calling isprime function
                arr[l] = j
                l++;
            }
        }
        k = k + 100;
        j1 = j1 + 100;
        return arr;//array return to function
    }


}

var row = 10;
var array = [];
for (i = 0; i < row; i++) {
    array[i] = new Array()
}
// console.log(array)
function array2d() {
    /**This function to create 2d array and store the prime numbers */
    var arry = []
    arry = primeArray()// call function where prime numbers are come
    for (var i = 0; i < row; i++) {   //this loop for rows
        for (var j = 0; j < arry.length; j++) {
            array[i][j] = arry[j]
        }
        arry = primeArray()//
    }
    console.log(array)
}
array2d()
