/*********************************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node AddressBook.js
 *  
 *  Purpose:     Desc -> Create Object Oriented Analysis and Design of a simple ​ Address Book Problem​.
 *
 *
 *  @author  Ankit Chidrawar
 *  @version 8.10.0
 *  @since   22-06-2019
 *
 *********************************************************************************************/
var readline=require('readline-sync')
var fs = require('fs')
var addFirstName;
var addLastName;
var addPhone;
var addAddress;
var addCity;
var addState;
var addZip;
// var flag;
var jsonAddBook=fs.readFileSync("AddressBook.json")
 jsonAddBook=JSON.parse(jsonAddBook)
// console.log(jsonAddBook)
operation()
function operation()    //this function are use to perform all operation Add,update,etc.. 
{
console.log("\t***********************ADDRESS BOOK***************************")
console.log("\t\t\t\t1.Add data\n\t\t\t\t2.Update Data\n\t\t\t\t3.Search Data\n\t\t\t\t4.Remove data\n\t\t\t\t5.Display Data\n\t\t\t\t6.SortByName\n\t\t\t\t7.Sort By ZipCode\n\t\t\t\t8.Quit")
console.log("\t**************************************************************")

var choice=parseInt(readline.question("\nEnter your choice\n"))
do{
switch(choice)      //switch case are use to call function by geting input from user as mation in the case
{
    case 1:addPersonDetails()
    break;
    case 2:updatePersonDetails()  
    break;
    case 3:searchPersonDetails()
    break;
    case 4:removePersonDetails()
    break;
    case 5:displayPersonDetails()
    break;
    case 6:sortByFirstName()
    break;
    case 7:sortByZipCode()
    break;
    case 8:
    console.log("**********[[[[[       THANK YOU      ]]]]]*********")
    process.exit();
    
    break;
}
}while(choice==8)
}
function addPersonDetails()     //this is for adding person details 
{
    console.log("*******************Add Person Detail********************")
    allLetter()    
    addressValidation()
    cityValidation()
    stateValidation()
    zipValidation()
    mobileNovalidate()

    var obj = {
        FirstName:addFirstName,
        LastName: addLastName,
        Address: addAddress,
        City: addCity,
        State:addState,
        ZipCode:addZip,
        MobNumber:addPhone
      }
      jsonAddBook.PersonDetails.push(obj)   //here push obj in .json array
      jsonAddBook = JSON.stringify(jsonAddBook,null,2)      
      fs.writeFileSync("AddressBook.json", jsonAddBook)     //write data in json file
      console.log('Data Store Successfully......Thank You')
     
    //   console.log(jsonAddBook)
      operation()
return obj;
}

function allLetter()   //this function are use to name validate
 { 
    addFirstName=readline.question("\nEnter First Name:-\n")
    addLastName=readline.question("\nEnter Last Name:-\n")   
   var letters = /^[a-zA-Z]+$/    
   if(addFirstName.match(letters) && addLastName.match(letters))     
   {
   return [addFirstName,addLastName];
   }
   else
   {
   console.log('Please input alphabet characters only\n ');
   return false,allLetter();
   }
 }
 function mobileNovalidate() //this function are use for number is valid or not
{
   addPhone=readline.question("\nEnter Mobile Number:-\n")
   if (addPhone.match(/^[0]?[789]\d{9}$/))
   {
      
      return addPhone;
   }
   else 
   {
      console.log(addPhone + " is NaN.Or not a 10 digits please enter atleast 10 digits \n ");
     return false,mobileNovalidate();
   }
}

function addressValidation()       // this function are use for address input  is valid or not
{
    addAddress=readline.question("\nEnter Address:-\n")
    if (addAddress.match(/[A-Za-z0-9'\.\-\s\,]/))
    {
       
       return addAddress;
    }
    else 
    {
       console.log(addAddress + " Please enter Proper Address... \n ");
      return false, addressValidation()
    }
}

function cityValidation()       //this function are use for user input in character are not
{
    addCity=readline.question("\nEnter city:-\n")
    if (addCity.match(/^[A-Za-z . ,'-]+$/))
    {
       
       return addCity;
    }
    else 
    {
       console.log(addCity,addState+ " Please enter Proper city & state name... \n ");
       return false, cityValidation();
    }
}
function stateValidation()      //this function are use for user input in character are not
{
    addState=readline.question("\nEnter State:-\n")
    if (addState.match(/^[A-Za-z . ,'-]+$/))
    {
       
       return addState;
    }
    else 
    {
       console.log(addState+ " Please enter Proper state name... \n ");
       return false, stateValidation();
    }
}

// \\d{5}(-\\d{4})?

function zipValidation()      //  this function are use for number are 6 digit or number or not
{
    addZip=readline.question("\nEnter Zip Code:-\n")
    if (addZip.match(/([0-9]{6}|[0-9]{3}\s[0-9]{3})/)&&addZip.length==6)
    {
       
       return addZip;
    }
    else 
    {
       console.log(addZip+ " Only Enter 6 digit Zip code... \n ");
       return false,zipValidation();
    }
}


function updatePersonDetails()     //This function are use to update the user data by geting input from user with validation check
{
    var firstName=readline.question("\nEnter First Name:-\n")
    var lastName=readline.question("\nEnter Last Name:-\n") 
    flag=false;
    console.log(jsonAddBook.PersonDetails.length)
    for(var i=0;i<jsonAddBook.PersonDetails.length;i++)
    {
        console.log(jsonAddBook.PersonDetails.length)
        if(firstName==jsonAddBook.PersonDetails[i].FirstName && lastName==jsonAddBook.PersonDetails[i].LastName)
        {
                
                flag=true;
                console.log("\n1.Update Firstname & Lastname\n2.Update Addresss\n3.Update city\n4.Update State\n5.Update Zip code\n6.Update MobileNumber\n7.Exit")
            var choice=readline.question("\n---------------------\nChose Any Option\n---------------------\n")
        }
        switch(choice)
        {
            case '1':
            var fn=[]
            fn=allLetter()
            jsonAddBook.PersonDetails[i].FirstName=fn[0]
            jsonAddBook.PersonDetails[i].LastName=fn[1]
            jsonAddBook = JSON.stringify(jsonAddBook,null,2)
            fs.writeFileSync("AddressBook.json", jsonAddBook)
            console.log("\nName is Updated Successfully.......\n")

            break;
            case '2':    
            var add=addressValidation()
            jsonAddBook.PersonDetails[i].Address=add
            jsonAddBook = JSON.stringify(jsonAddBook,null,2)
            fs.writeFileSync("AddressBook.json", jsonAddBook)
            console.log("\nAddress is Updated Successfully.......\n")

            case '3':
            var ct=cityValidation()
            jsonAddBook.PersonDetails[i].City=ct
            jsonAddBook = JSON.stringify(jsonAddBook,null,2)
            fs.writeFileSync("AddressBook.json", jsonAddBook)
            console.log("\nCity is Updated Successfully.......\n")

            break;
            case '4':
            var st= stateValidation()
            jsonAddBook.PersonDetails[i].State=st
            jsonAddBook = JSON.stringify(jsonAddBook,null,2)
            fs.writeFileSync("AddressBook.json", jsonAddBook)
            console.log("\nState is Updated Successfully.......\n")

            case '5':
            var zip=zipValidation()
            jsonAddBook.PersonDetails[i].ZipCode=zip
            jsonAddBook = JSON.stringify(jsonAddBook,null,2)
            fs.writeFileSync("AddressBook.json", jsonAddBook)
            console.log("\n Zip code is Updated Successfully.......\n")

            break;
            case '6':
            var mob=mobileNovalidate()
       
            jsonAddBook.PersonDetails[i].MobNumber=mob
            jsonAddBook = JSON.stringify(jsonAddBook,null,2)
            fs.writeFileSync("AddressBook.json", jsonAddBook)
            console.log("\nMobile Number is Updated Successfully.......\n")

            break;
            case '7':
            process.exit()
            default:
            console.log("\nPlease chose right option...Thank You\n")
        }
        if(flag==true)
        {
            break;
        }
    }
        if(flag==false)
        {
                console.log("Given name is not available...Please try again ")
                return updatePersonDetails();        
        }
        else
        {
            operation()
        }
    }
    function searchPersonDetails()  //this function are use for search deatils by mobile number
    {
        
        var mobileNumber=readline.question("Please Enter Mobile Number For Search PersonDetails:-\n")
        console.log("\n----------------------------------------------------------------------------\n")
        flag=false;
        
        for(var i=0;i<jsonAddBook.PersonDetails.length;i++)
        {
           
            if(mobileNumber==jsonAddBook.PersonDetails[i].MobNumber)
            {
                   
                    flag=true;
                    console.log("\t*********************************************************\n")
                    console.log("\tFirst Name:-\t\t"+jsonAddBook.PersonDetails[i].FirstName)
                    console.log("\tLast Name:-\t\t"+jsonAddBook.PersonDetails[i].LastName)
                    console.log("\tAddress:-\t\t"+jsonAddBook.PersonDetails[i].Address)
                    console.log("\tCity:-\t\t\t"+jsonAddBook.PersonDetails[i].City)
                    console.log("\tState:-\t\t\t"+jsonAddBook.PersonDetails[i].State)
                    console.log("\tZipCode:-\t\t"+jsonAddBook.PersonDetails[i].ZipCode)
                    console.log("\tMobNumber:-\t\t"+jsonAddBook.PersonDetails[i].MobNumber) 
                    console.log("\t*********************************************************\n") 
            }
           

        }
        if(flag==false)
        {
            console.log("Search Detail is not available.....Please Try Again....")
            console.log("\n-----------------------------------------------------")

            searchPersonDetails()
        }
        operation()
    }
    function removePersonDetails()      //this function are use for delete specific data by user name & mobile number  
    {
        var firstName=readline.question("Please Enter PersonName you want To Delete details:-\n")
        var mobilenumber=readline.question("Please Enter MobileNum you want To Delete details:-\n")

        console.log("\n----------------------------------------------------------------------------\n")
        flag=false;
        
        for(var i=0;i<jsonAddBook.PersonDetails.length;i++)
        {
            
            if(firstName==jsonAddBook.PersonDetails[i].FirstName && mobilenumber==jsonAddBook.PersonDetails[i].MobNumber)
            {
                jsonAddBook.PersonDetails.splice(i,i+1)     //here is remove specific data into the array by splice method 
                flag=true;   
                jsonAddBook = JSON.stringify(jsonAddBook,null,2)
                fs.writeFileSync("AddressBook.json", jsonAddBook) 
                console.log("Data deleted Successfully")
            }
            if(flag==true)
            {
                operation()
                break;

            }
            
        }
        
        if(flag==false)
        {
            console.log("Data is not found....Try Again")
            removePersonDetails()
        }
    }

    function displayPersonDetails()     //this function are use for display the details of specific person
    {
        
        var FirstName=readline.question("Please Enter First Name For Display PersonDetails:-\n")
        console.log("\n----------------------------------------------------------------------------\n")
        flag=false;
        
        for(var i=0;i<jsonAddBook.PersonDetails.length;i++)
        {
            
            if(FirstName==jsonAddBook.PersonDetails[i].FirstName)
            {
                   
                    flag=true;
                    console.log("\t*********************************************************\n")
                    console.log("\tFirst Name:-\t\t"+jsonAddBook.PersonDetails[i].FirstName)
                    console.log("\tLast Name:-\t\t"+jsonAddBook.PersonDetails[i].LastName)
                    console.log("\tAddress:-\t\t"+jsonAddBook.PersonDetails[i].Address)
                    console.log("\tCity:-\t\t\t"+jsonAddBook.PersonDetails[i].City)
                    console.log("\tState:-\t\t\t"+jsonAddBook.PersonDetails[i].State)
                    console.log("\tZipCode:-\t\t"+jsonAddBook.PersonDetails[i].ZipCode)
                    console.log("\tMobNumber:-\t\t"+jsonAddBook.PersonDetails[i].MobNumber) 
                    console.log("\t*********************************************************\n") 
            }
           

        }
        if(flag==false)
        {
            console.log(" Detail is not available.....Please Try Again....")
            console.log("\n-----------------------------------------------------")

            displayPersonDetails()
        }
        operation()
    }
     function sortByFirstName()     //this function are use for sort person details by name
     {
       console.log(j)
        
        for(var i=0;i<jsonAddBook.PersonDetails.length-1;i++)
        {
            for(var j=i+1;j<jsonAddBook.PersonDetails.length;j++)
            {
                
                
                if(jsonAddBook.PersonDetails[i].FirstName>jsonAddBook.PersonDetails[j].FirstName)
                {
                    /**here sort operation perform */
                    var temp=jsonAddBook.PersonDetails[i]
                    jsonAddBook.PersonDetails[i]=jsonAddBook.PersonDetails[j]
                    jsonAddBook.PersonDetails[j]=temp
                }
            }
        }

                 jsonAddBook = JSON.stringify(jsonAddBook,null,2)
                 fs.writeFileSync("AddressBook.json", jsonAddBook)
                  console.log("Sort Successully...By name\n")

         console.log(jsonAddBook)
     }
    function sortByZipCode()  // //this function are use for sort person details by zip code
    {
     for(var i=0;i<jsonAddBook.PersonDetails.length-1;i++)
        {
            for(var j=i+1;j<jsonAddBook.PersonDetails.length;j++)
            {
                
                
                if(jsonAddBook.PersonDetails[i].ZipCode>jsonAddBook.PersonDetails[j].ZipCode)
                {
                     /**here sort operation perform */
                    var temp=jsonAddBook.PersonDetails[i]
                    jsonAddBook.PersonDetails[i]=jsonAddBook.PersonDetails[j]
                    jsonAddBook.PersonDetails[j]=temp
                }
            }
        }

                 jsonAddBook = JSON.stringify(jsonAddBook,null,2)
                 fs.writeFileSync("AddressBook.json", jsonAddBook)
                  console.log("Sort Successully...By ZipCode\n")

         console.log(jsonAddBook)
     }
    // sortByZipCode()
   
  


    