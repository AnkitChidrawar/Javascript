/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Inventery.js
 *  
 *  Purpose:     Desc -> Create a JSON file having Inventory Details for Rice, Pulses and Wheats
 *                       with properties name, weight, price per kg.e
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   19-06-2019
 *
 *******************************************************************************/
function product()     
{
  /*all operation can be call in that method for perform the operation */
do
{
var readline=require('readline-sync')

console.log('*******************Please Select Product Number****************');
var prdSelNum= readline.question('1.Rice\n\n2.Pulse\n\n3.Wheats\n\n4.Exit\n')
var pWeight = readline.question("\nPlease Enter weight:--\n")

var fs=require('fs');
var productName=fs.readFileSync('Items.json', 'utf8');
var words=JSON.parse(productName);


switch (prdSelNum) {
    case '1':
     rice(pWeight,words)
      break;
    case '2':
      pulse(pWeight,words)
      break;
    case '3':
      wheat(pWeight,words)
      break;
    case '4':
    process.exit()
    break;
    default:
      console.log('Sorry, please enter right product name ' + prdSelNum+ '.');
  }
}while(prdSelNum!=4);
}
product()
    
function rice(pWeight,words)
{
  /**here rice report is generated */
    var readline=require('readline-sync')
    var riceName=readline.question('Enter Rice name:-\n\n'+'Ex:-Basmati or Kolam \n')

    if(words.rice[0].ricename==riceName)
    {
    console.log("\n RiceName  Riceprice  Weight"+"\t"+"TotalPrice")
    console.log(words.rice[0].ricename+"\t\t"+words.rice[0].price+"\t"+pWeight+"\t"+pWeight*words.rice[0].price)
    console.log("\n")
    }
    else if(words.rice[1].ricename==riceName)
    {
    console.log("\n RiceName"+"\t\t"+"Riceprice"+"\t"+"Weight"+"\t"+"TotalPrice")
    console.log("  "+words.rice[1].ricename+"\t\t\t"+words.rice[1].price+"\t\t"+pWeight+"\t\t"+pWeight*words.rice[1].price)
    console.log("\n")
    }
}   
    
 function pulse(pWeight,words)
 {  /*here pulse reoport is gnerated */
    var readline=require('readline-sync')
    var pulseName=readline.question('Enter Pulse name:-\n\n'+'Ex:-Chickpeas or GreenGram \n')

    if(words.pulses[0].pulseName==pulseName)
    { 
    console.log("\n PulseName"+"\t"+"Pulseprice"+"\t"+"Weight"+"\t"+"TotalPrice")
    console.log(words.pulses[0].pulseName+"\t"+words.pulses[0].price+"\t"+pWeight+"\t"+pWeight*words.pulses[0].price)
    console.log("\n")
    }
    else if(words.pulses[1].pulseName==pulseName)
    console.log("\n PulseName"+"\t\t"+"Pulseprice"+"\t\t"+"Weight"+"\t\t"+"TotalPrice")
    console.log(words.pulses[1].pulseName+"\t\t"+words.pulses[1].price+"\t\t\t"+pWeight+"\t\t\t"+pWeight*words.pulses[1].price)
    console.log("\n")
 }
function wheat(pWeight,words)
{
  /*here wheat report generated */
    var readline=require('readline-sync')
    var wheatName=readline.question('Enter wheat name:-\n'+'Ex:-spelt or einkorn\n ')

    if(words.wheats[0].wheatName==wheatName)
    { 
    console.log("\n WheatName"+"\t\t"+"Wheatprice"+"\t"+"Weight"+"\t"+"TotalPrice")
    console.log(words.wheats[0].wheatName+"\t\t"+words.wheats[0].price+"\t"+pWeight+"\t"+pWeight*words.wheats[0].price)
    console.log("\n")
    }
    else if(words.wheats[1].wheatName==wheatName)
    console.log("\n WheatName"+"\t\t"+"Wheatprice"+"\t"+"Weight"+"\t"+"TotalPrice")
    console.log(words.wheats[1].wheatName+"\t\t"+words.wheats[1].price+"\t"+pWeight+"\t"+pWeight*words.wheats[1].price)
}





  


