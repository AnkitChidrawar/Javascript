



/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node StackBalancePar.js
 *  
 *  Purpose:     Desc -> Read the Text from a file, split it into words and arrange it as Linked List.
 *                       Take a user input to search a Word in the List. If the Word is not found then add it
 *                       to the list, and if it found then remove the word from the List. In the end save the
 *                       list into a file
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   14-06-2019
 *
 *******************************************************************************/
    // var top;
    var push=-1;
    var pop;
    var peek ;
    var clear ;
    var length=0 ;
function Stack()
 {
    this.file = [];
    this.top=-1;
}
  Stack.prototype.push=function(value) 
 {

    this.file[++this.top] = value;
    return this.file;
 }
//  Stack.prototype.push=function(value){
//   this.file.push(value);
// }

Stack.prototype.peek=function()
  {
    return this.file[this.top];
 }
 
 Stack.prototype.pop=function() //remove and returns the value  at the end of the stack
 {
  return this.file[this.top--];

 }
 
 Stack.prototype.clear=function () 
 {
    this.top = -1;
 }
 
  Stack.prototype.size=function() {
    return this.top;
 }
 var call = new Stack();


var data='(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)'
var length=data.length;

for (i = 0; i <= data.length; i++) {

     if(data[i]==='('||data[i]==='{'||data[i]==='[')
     {
         call.push(data[i])
     }
    
      else if(data[i]===')'||data[i]==='}'||data[i]===']')
      { 

             call.pop(data[i])
      }
    }
     var topp=call.top
    //  console.log(topp)

if(topp===-1)
{
    console.log('Expression is balanced')
}
else
{
    console.log('Exprtesion is not balanced')
}

  




































