
var readline=require('readline-sync')
var input=readline.question('Enter Input:-')
class NewtonM
{
    static sqrt(c)
    {
        var epsilon = 1e-15;    // relative error tolerance
        var t = c;              // estimate of the square root of c

        // repeatedly apply Newton update step until desired precision is achieved
        while (Math.abs(t - c/t) > epsilon*t) 
        {
                 t = (c/t + t) / 2.0;
        } 
    console.log(t)
}
}

NewtonM.sqrt(input)

