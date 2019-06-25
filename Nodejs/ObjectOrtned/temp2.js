 var readline=require('readline-sync')
 var fs = require('fs')
 var json=fs.readFileSync("/home/admin1/Desktop/Ankit/Nodejs/ObjectOrtned/Inventery json/stockExtend.json")
json=JSON.parse(json)
// var casee=readline.question("Chose Any option:-")
// console.log("1.Add stock \n 2.Remove Stock \n ")
// do{
// switch (casee) {
//     case '1':
//     var obj = {
//         Name:readline.question("Enter  Name:-"),
//         price: readline.question("Enter price:-"),
//         NoOfShare:readline.question("Enter NoOfShare:-")

//    }
//       break;
//     case '2':
//       pulse(pWeight,words)
//       break;
//     case '3':
//       wheat(pWeight,words)
//       break;
//     case '4':
//     process.exit()
//     break;
//     default:
//       console.log('Sorry, please enter right product name ' + prdSelNum+ '.');
//   }
// }while(prdSelNum!=1 || prdSelNum!= 2 || prdSelNum!= 3);
// var data = {}
// data.detail = []
for (i=0; i <2 ; i++){
   var obj = {
        Name:readline.question("Enter  Name:-"),
        price: readline.question("Enter lastName:-"),
       

   }
   json.detail.push(obj)

}

// var skill = "sdf";
// delete json.detail.name["sdf"];
fs.writeFileSync("/home/admin1/Desktop/Ankit/Nodejs/ObjectOrtned/Inventery json/stockExtend.json",","+ JSON.stringify(json), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);