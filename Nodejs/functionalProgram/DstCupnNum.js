
class random
{
    static Cupan_number()
    {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });        
          rl.question('Enter a number',(rt) => {
        
        for(var i=0;i<=rt;i++)
        {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min; 
              }
        var rdm=getRandomInt(0,rt);
        console.log('rando:-'+rdm)
        var count=0;
        var distinct=0;
        if(rdm!=i)
        {
            
            console.log('Distinct cupon number is:-',+i)

                distinct++;


            
        }
        else
        {
                console.log('same cupan number is:-'+i)
                count++;


        }
        }
        console.log('Total distinct number generated',+distinct)

        console.log('Total same cupon are',+count)

        });
    }
}
random.Cupan_number()
