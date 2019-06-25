/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node LinkedList.js
 *  
 *  Purpose:     Desc -> Read the Text from a file, split it into words and arrange it as Linked List.
 *                       Take a user input to search a Word in the List. If the Word is not found then add it
 *                       to the list, and if it found then remove the word from the List. In the end save the
 *                       list into a file
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   12-06-2019
 *
 *******************************************************************************/

function Node(data)
{
    this.data=data;
    this.next=null;
}
function LinkedList()
{
    this.head=null;
}
LinkedList.prototype.add=function(val) //here function added the element 
{
    var node=new Node(val)
    // console.log(node.data)
    if(!this.head)
    {
        this.head=node;
        //  this.length+=1
    }
    else
    { 
    var current=this.head;
    while(current.next)
    {
        current=current.next
    }
    current.next=node;
    // console.log(current.data)
    // this.length+=1
}
}

LinkedList.prototype.remove=function(serchRead) //here function for remove element 
{
    var current=this.head
    while(current != null)
    {
        if(current.data===serchRead)
        {
            current=current.next    
        }
        else
        {
        
            var previousNode = current;    
            var currentN= previousNode.next;
            while(currentN)
            {
                if(currentN.data===serchRead)
                {
                    previousNode.next=currentN.next
    
                    break;

                }
                else
                {
                    previousNode=currentN
                    currentN=currentN.next
                }

            }
        }
        current=current.next

    }
}
// call.remove(serchRead)


LinkedList.prototype.get=function()     //here function for display data
{
    var output='';
    var current=this.head
    while(current != null)
    {
        output+=current.data
        output+=' '
        current=current.next
    }
    return output;
}


var call=new LinkedList()   //here object 'call' created 
var fs = require('fs');     
var readline=require('readline-sync')
var serchRead=readline.question('Enter Search Element:-')
   var data = fs.readFileSync('list.txt', 'utf8');
   var data1=data.split('')
    
   for(var i=0;i<data1.length;i++)  //thise loop for data insert in file
    { 
        call.add(data1[i])
    }
   
    call.get()

    LinkedList.prototype.search=function(serchRead)     //here function is use for search element from file
{
    
    var current=this.head
    var flag=false;
        while(current != null)
        {
            if(current.data===serchRead)
            {
            //     console.log('Data is found '+serchRead+'. \n Remove succesfully')
            //    var k= call.remove(serchRead)
                flag=true;   
            }
            
            current=current.next
            
        }
            if(flag)
            {
                call.remove(serchRead)  //remove function call for search element remove
                console.log('Data is found '+serchRead+'. \n Remove Succesfully')
            }
            else
            {
                call.add(serchRead)     //add function call for not search element add in file
                console.log('Data is not found'+serchRead+'\n Add Succesfully')  
            }
            return flag;
}

call.search(serchRead)
fs.writeFileSync('list.txt',call.get());    //here write data in file

