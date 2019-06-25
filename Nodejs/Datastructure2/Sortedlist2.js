/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Sortedlist2.js
 *  
 *  Purpose:     Desc -> Read .a List of Numbers from a file and arrange it ascending Order in a
                         Linked List. Take user input for a number, if found then pop the number out of the
                         list else insert the number in appropriate position
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   13-06-2019
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
LinkedList.prototype.add=function(data) //here function added the element 
{
    var node=new Node(data)
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

    for (var i = 0; i < l.size(); i++) {
        current = this.head
        while (current.next) {
            if (current.data > current.next.data) {
                temp = current.data
                current.data = current.next.data
                current.next.data = temp
            }
            current = current.next
        }
       
    }
}
}

LinkedList.prototype.isEmpty = function () {
    
    current = this.head;
    if (current == null) {
        return true;
    }
    else {
        return false;
    }
}
LinkedList.prototype.size = function () {
    
    var items = 0;
    if (!call.isEmpty()) {
        current = this.head;
        while (current != null) {
            items++;
            current = current.next;
        }
    }
    else {
        console.log('List is empty.')
    }
    return items;
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
                    currentN=currentN.next
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


LinkedList.prototype.get = function () {
    output = ''
    current = this.head
    while (current != null) {
        output += current.data
        output += ' '
        current = current.next
    }
    return output
}

var call=new LinkedList()   //here object 'call' created 
var fs = require('fs');     
var readline=require('readline-sync')
var serchRead=readline.question('Enter Search Element:-')
   var data = fs.readFileSync('list.txt', 'utf8');
   var data1=data.split(' ')
    // console.log(call.get())
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
            if(current.data==serchRead)
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
                console.log('Data is found '+ serchRead+'. \n Remove Succesfully')
            }
            else
            {
                call.add(serchRead)     //add function call for not search element add in file
                console.log('Data is not found'+ serchRead+'\n Add Succesfully')  
            }
            return flag;
}

call.search(serchRead)
fs.writeFileSync('list.txt',call.get());    //here write data in file

