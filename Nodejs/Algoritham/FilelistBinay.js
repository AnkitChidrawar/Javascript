
var fs = require('fs');
var srchvalue=''

    var data = fs.readFileSync('hi.txt', 'utf8');
    console.log(data);  
     var catchh=data.split(",")
    var i;
    var stringBsort=require(`./utility2`)
    var arR=stringBsort.functions.sortString(catchh)//array pass to bubble sort
     const prompts = require('prompts');
 
     (async () => {
       const response = await prompts({
         type: 'text',
         name: 'meaning',
         message: 'Enter search name\n',
        
       });
      //  console.log(response.meaning)
       srchvalue=response.meaning
    //  console.log(srchvalue)
      //  for(i=0;i<catchh.length;i++)
      //  {
      //      if(catchh[i]===value)
      //      {
      //          console.log('Name are present in List')
      //          break;
      //      }
         
      //  }
      //  if(catchh[i]!=value)
      //  {
      //  console.log('Name are not present in list')
      //  }
      // console.log(stringBsort.functions.strBinarySrch(arR,srchvalue))//sorted array&srchkey pass to strBinarySrch
    
      var s=stringBsort.functions.strBinarySrch(arR,srchvalue)
      // console.log(s)
     })();

    
  
   