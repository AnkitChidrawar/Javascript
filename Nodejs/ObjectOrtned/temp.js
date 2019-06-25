// var str = "ankit";
// var res = str.match(/[:alpha:]+/)
// console.log(res)
// var bleh = {first: '1', second: '2', third:'3'}


// for(i=0;i<3;i++)
// {
// json.blah[i].first =readline.question("Enter name")
// json.blah[i].second =readline.question("Enter name")

// json.blah[i].Third =readline.question("Enter name")

// }
// json=JSON.stringify(json)
// fs.writeFileSync("/home/admin1/Desktop/Ankit/Nodejs/ObjectOrtned/Inventery json/stockExtend.json",json)
 var readline=require('readline-sync')
 var fs = require('fs')
//  var totalStock=0;
 var json=fs.readFileSync("/home/admin1/Desktop/Ankit/Nodejs/ObjectOrtned/Inventery json/stockExtend.json")
json=JSON.parse(json)
// var length=json.StockName.length
console.log("1.Add stock \n 2.Remove Stock \n ")

var casee=readline.question("Chose Any option:-")
// do{
switch (casee) {
    case '1':
    addData()
      break;
    case '2':
    //   pulse(pWeight,words)
      break;
    case '3':
    process.exit()
    break;
    default:
      console.log('Sorry, please enter right product name ' + prdSelNum+ '.');
  }
// }while(casee!=1 || casee!= 2 || casee!= 3);
// var data = {}
// data.detail = []
function addData()
{
    var noOfRecords=readline.question("Enter how many record you want")
for (i=0; i<parseInt(noOfRecords); i++){
   var obj1 = {
        Name:readline.question("Enter  Name:-"),
        price: readline.question("Enter price:-"),
        NoOfShare:readline.question("Enter NoOfShare:-"),
        investmentPrStock:null

   }
   json.detail.push(obj)

}
}
// function calculatETotalRpt()
// {
//     for(var i=0;i<length;i++)
//     {
//     var investmentPrStock=json.StockName[i].price*json.StockName[i].NoOfShares
//     totalStock=totalStock+investmentPrStock
//     }
//     json.detail.push(totalStock)
// }

// var skill = "sdf";
// delete json.detail.name["sdf"];
fs.writeFile("/home/admin1/Desktop/Ankit/Nodejs/ObjectOrtned/Inventery json/stockExtend.json",","+ JSON.stringify(json), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);