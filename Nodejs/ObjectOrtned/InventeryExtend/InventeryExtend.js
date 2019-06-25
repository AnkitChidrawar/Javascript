/*********************************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node InventeryExtend.js
 *  
 *  Purpose:     Desc -> Extend the above program to Create InventoryManager to manage the
                 Inventory. The Inventory Manager will use InventoryFactory to create Inventory
                 Object from JSON. The InventoryManager will call each Inventory Object in its 
                 list to calculate the Inventory Price and then call the Inventory Object to 
                 return the JSON String. The main program will be with InventoryManager
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   21-06-2019
 *
 *********************************************************************************************/
var readline=require('readline-sync')
var fs = require('fs')
var json=fs.readFileSync("InventeryExtend.json")
json=JSON.parse(json,null,2)   //json object is created
var price1;
var name;
console.log("\n****************************InventeryExtend*****************************\n")
console.log(" 1.Add data \n 2.Remove Data \n 3.Exit\n")   
var casee=readline.question("\nChose Any option:-\n") 
do {
  switch (casee) {    //Here choose the casses  for perform the operation
    case '1':
      var productOperation = readline.question("\nChose product\n1.Rice\n2.Pulse\n3.Wheat\n4.Exit\n")
      console.log("\n********************************************************************\n")

      if (productOperation == 1) {
        addRice() //here call the addRice function for adding data
      }
      else if (productOperation == 2) {
        addPulse()  //here call the addpulse function for adding data
      }
      else if (productOperation == 3) {
        addWheat()  //here call the addwheat function for adding data
      }
      else if(productOperation==4)
      {
        process.exit()
      }
      break;
    
    case '2':  //this case are perform remove operation.
      var productOperation = readline.question("\nChose product Number:--\n1.Rice\n2.Pulse\n3.Wheat\n4.Exit\n\********************************************************************\n")
    

      if (productOperation == 1) {
        removeRiceData()
      }
      else if (productOperation == 2) {
        removePulseData()
      }
      else if (productOperation == 3) {
        removeWheatData()
      }
      else if(productOperation==4)
      {
        process.exit()
      }
      break;
    case '3':
    default:
      console.log('\n**************Thanks You*************** '+'\n');
      break;
  }
} while (casee != 3);

function addRice() //these function is use for add rice data
{
  var weight = readline.question("\nEnter Weight in per kg\n")
  name = readline.question("Enter  Ricename:-")
  price1 = readline.question("Enter price:-")

  var obj1 = 
  {
    ricename:name,
    price: price1,
    weight: weight + " kg",
    TotalPrice: weight * price1
  }
  console.log("Add item sucessfully......")
  json.Inventery.rice.push(obj1)
  json = JSON.stringify(json,null,2)
  fs.writeFileSync("InventeryExtend.json", json)
  console.log(json)
}
function addPulse() //these function is use for add Pulse data
{
  var weight = readline.question("\nEnter Weight in per kg\n")
  name = readline.question("Enter Pulsename:-")
  price1 = readline.question("Enter price:-")

  var obj2 = {
    pulseName: name,
    price: price1,
    weight: weight + " kg",
    TotalPrice: weight * price1
  }
  console.log("Add item sucessfully......")
  json.Inventery.pulses.push(obj2)
  json = JSON.stringify(json,null,2)
  fs.writeFileSync("InventeryExtend.json", json)
  console.log(json)
}

function addWheat() //these function is use for add Wheat data
{
  var weight = readline.question("\nEnter Weight in per kg\n")
  name = readline.question("Enter Pulsename:-")
  price1 = readline.question("Enter price:-")
    var obj3 = {
    wheatName: name,
    price: price1,
    weight: weight + " kg",
    TotalPrice: weight * price1
  }
  console.log("Add item sucessfully......")
  json.Inventery.wheats.push(obj3)  //here add data in the json file at the specify position
  json = JSON.stringify(json,null,2)   // //write data in json file
  fs.writeFileSync("InventeryExtend.json", json)
  console.log(json)
  

}


function removeRiceData() //these function is use for remove key wit value data from json data
{
  var ricename = readline.question("\nPLEASE ENTER RICE NAME\n")
  var length = json.Inventery.rice.length
  for (var i = 0; i < length; i++) 
  {
    if (json.Inventery.rice[i].ricename == ricename) 
    {
      delete json.Inventery.rice[i].ricename;
      
    }
  }

  json = JSON.stringify(json,null,2)   //here convert json object to string conversion
  fs.writeFileSync("InventeryExtend.json", json)    // //write data in json file
  console.log("Remove item sucessfully......")
}
function removePulseData()
{
  var pulseName=readline.question("\nPLEASE ENTER PULSES NAME\n")
  var length=json.Inventery.pulses.length
  for(var i=0;i<length;i++)
  {
    if(json.Inventery.pulses[i].pulseName==pulseName)
    {
  delete json.Inventery.pulses[i].pulseName;
    }
  }
 
  json=JSON.stringify(json)   //here convert json object to string conversion
  fs.writeFileSync("InventeryExtend.json",json)   // //write data in json file

  console.log("Remove item sucessfully......")
}
function removeWheatData()
{
  var wheatName=readline.question("\nPLEASE ENTER WHEAT NAME\n")
  var length=json.Inventery.wheats.length
  for(var i=0;i<length;i++)
  {
    if(json.Inventery.wheats[i].wheatName==wheatName)
    {
  delete json.Inventery.wheats[i].wheatName;
    }
  }
  json=JSON.stringify(json,null,2)   //here convert json object to string conversion
  fs.writeFileSync("InventeryExtend.json",json)   //write data in json file
  console.log("Remove item sucessfully......")

}
