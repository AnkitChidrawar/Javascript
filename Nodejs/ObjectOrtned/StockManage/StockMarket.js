/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node StockMarket.js
 *  
 *  Purpose:     Desc -> Write a program to read in Stock Names, Number of Share, Share Price.
                         Print a Stock Report with total value of each Stock and 
                         the total value of Stock.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   20-06-2019
 *
 *******************************************************************************/

var fs=require('fs');
var stockMarket=fs.readFileSync('Stock.json', 'utf8'); //here read json file
var words=JSON.parse(stockMarket);  //here create a json object


var totalStock=0;
var length=words.StockName.length
console.log("**********************************Stock Report***************************************\n ")
console.log("StockName  \t     StockPrice\t\tNumberOfShares\t\tInvestmentPrStock\t\t\t")

function stockMarketReport()  //this function are use for generate stockreport 
{
for(var i=0;i<length;i++)
{
    var investmentPrStock=words.StockName[i].price*words.StockName[i].NoOfShares
    var s=words.StockName[i].Name
    var p=words.StockName[i].price
    var nos=words.StockName[i].NoOfShares
    totalStock=totalStock+investmentPrStock
    console.log("----------------------------------------------------------------------------------")
    console.log(s+"\t|\t\t"+p+"\t|\t\t"+nos+"\t|\t\t"+investmentPrStock+"\t|\t\t")
    
}
console.log("----------------------------------------------------------------------------------")
console.log("\t\t\t\t\t\t\t  TotalStock:--"+totalStock)
}

stockMarketReport()
