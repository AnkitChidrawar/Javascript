var readline=require('readline-sync')
var a=readline.question('Ente  A :-')
var b=readline.question('Enter B :-')
var c=readline.question('Enter c :-')

    delta = b*b - 4*a*c
    console.log(delta)
    var x1 =(-b + Math.sqrt(delta))/(2*a)
    console.log(x1)
    var x2 = (-b - Math.sqrt(delta))/(2*a)
    console.log(x2)
    var x2=Math.sqrt(delta)
    var quadratic= a*x*x + b*x + c;
                        
