
  var word='abae';
  var rword='';
function Queue()
{
  var Datastore = []
  var front=-1;
  var rear=-1;
}
  this.get=function()
  {
    //   if(this.isEmpty())
    //   {
    //     console.log('Empty Queue')

    //   }
    //   else
    //   {
      console.log(Datastore)
      
  };
  this.enqueu=function(element)
  {
   return Datastore.push(element)
  };
  this.dequeu=function()  //pointer the front of queue
  {
      return Datastore.shift()
  };
  this.front=function()
  {
    return Datastore[0]
  };
  this.size=function()
  {
    return Datastore.length
  };
  this.isEmpty=function()
  {
      if(front==-1&&rear==-1)
      {
          return true;
      }
      else
      {
          return false
      }
  };
}
var call =new Queue()
// console.log(word.length)


// for(var i=0;i<word.length;i++)
// {
//    call.enqueu(word[i])
// }
// call.get()

// for(var i=0;i<word.length;i++)
// {
//     rword+=call.dequeu();
// }
// var rword1=rword.split('').sort()
// var word1=word.split('').sort()
// var length=rword.length
// if(word===rword)
// {
//     console.log(word+" Is palindrome")
// }
// else
// {
//     console.log(rword+" Is not a palindrome")
// }

call.enqueu('hi')
call.enqueu('how')
call.enqueu('are')
call.enqueu('you')
call.enqueu('fine')
// call.get()
// // console.log(call.front())
// console.log(call.dequeu())
// console.log(call.dequeu())
// console.log(call.dequeu())

// console.log(call.dequeu())

// console.log(call.dequeu())

 call.get()
 call.isEmpty()
