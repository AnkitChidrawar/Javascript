var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["Jack", "Queen", "King", "Ace","2", "3", "4", "5", "6", "7", "8", "9", "10"];
var catchh=[];

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var j = 0; j < values.length; j++)
		{
			var card = values[j]+" "+suits[i];
			deck.push(card);
		}
	}

	// console.log(deck)
	return deck;
}
// var dk=[]
//  dk=getDeck()
//  console.log(dk)
 
// function getRandomInt(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min)) + min; 
//   }
// // function random()
// {
// 	var randomRange=[];
// 	for(var i=0;i<9;i++)
// 	{
// 		randomRange[i]=getRandomInt(2,9)

// 	}

// 	console.log(randomRange)
//    return randomRange
// }
// var rad=[]
// var rad=random()

function twoD()
{
	var dk=getDeck()
	var d;
  for(var i=0;i<4;i++)
  {
	  var k=new Array()
	for(var j=0;j<=8;j++)
	{
		d=dk[Math.floor(Math.random() * dk.length)]
		var c=dk.indexOf(d)
		k.push(d);
		dk.splice(c,1)
	}
catchh.push(k)

	// console.log(k)
	// console.log(dk)
	//  console.log(dk)
 }
return catchh;
 }
// twoD(dk)


var array = [];
for (i = 0; i < 4; i++) {
    array[i] = new Array()
}
// console.log(array)
function array2d() {
    var arry = []
    arry = twoD()
    for (var i = 0; i < 4; i++) {   //this loop for rows
        for (var j = 0; j < 9; j++) {
            array[i][j] = arry[j]
		}
		
    }
    console.log(array)
}
array2d()