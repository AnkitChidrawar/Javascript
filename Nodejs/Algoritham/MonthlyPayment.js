


var pla=parseInt(process.argv[2])
var years=parseInt(process.argv[3])
var percentinter=parseInt(process.argv[4])
class MonthlyPayment
{
    
    static monthlyPayment(P,Y,R)
    {
        var r=R/(12*100)

       var n=12*Y

       var payment=P*r/(1-Math.pow(1+r,-n))
       console.log('Monthly Payment is:-',Math.round(payment))
    
    }
}

MonthlyPayment.monthlyPayment(pla,years,percentinter)
// console.log(DayOfWeak.dayOfWeak(m,d,y))