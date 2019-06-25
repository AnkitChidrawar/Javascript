var readline=require('readline-sync');

var j1=readline.question("Enter a 1st Name:--")
    console.log(''+j1);

    var j2=readline.question("Enter a 2nd Name:--")
    console.log(''+j2);
    function f1(j1,j2)
    {
        var array1=[...j1];
        var array2=[...j2];
        var l1=(array1).length;
        var l2=(array2).length;
        console.log(array1);
        console.log(array2);
        if(l1==l2)
    {
        for( var i=0;i<=l1;i++)
        {
            for(var j=(i+1);j<l2;j++)
            {
                if(array1[i]>array2[j])
                {
                    var temp=array1[i];
                    array1[i]=array2[j];
                    array2[j]=temp;

                }
                   
            }
        }
       
    }
           return 

    }
    
    f1(j1,j2)
    