function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
 function push(value) 
 {

    this.dataStore[this.top++] = value;
 }
 
 function peek() {
    return this.dataStore[this.top-1];
 }
 
 function pop() {
    return this.dataStore[--this.top];
 }
 
 function clear() {
    this.top = 0;
 }
 
 function length() {
    return this.top;
 }
 var call = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// s.push("Rahul");
// s.push("Akshay");
// s.push("ajay");
// console.log("length: " + s.length());
// console.log(s.peek());
// var popped = s.pop();
// console.log("The popped element is: " + popped);
// console.log(s.peek());
// s.push("Cynthia");


var expresion='({[]})'
var length=expresion.length;
for(var i=0;i<length;i++)
{
  call.push(expresion[i])
   call.pop(expresion[i])

  // if(expresion[i]===')')
  // {
  //   call.pop(expresion[i])
  // }

}
console.log(call.dataStore)