let name1 = {
    firstName: 'Anish',
    lastName:'Marathe',
    printFullName: function(){
        console.log(this.firstName + ' ' + this.lastName);
    }
}

name1.printFullName();

//Say for eg we have one more object called name2
//defined as:

let name2 = {
    firstName:'Sneha',
    lastName:'Punekar'
}

//We dont have to write another definition for printfullname function. We can directly call
//printfullname method which is present inside name1. Like this:

name1.printFullName.call(name2); // Prints Sneha Punekar

/*
    For that matter we can even write a function outside and call it directly without initial object reference
*/

let globalPrintFullName = function(){console.log(this.firstName + ' ' + this.lastName);}
//Note here: arrow functions are not supported.

globalPrintFullName.call(name1);//Anish Marathe
globalPrintFullName.call(name2);//Sneha Punekar

//We can pass arguements as well to the function which will print values. Such as:

let globalPrintFullNameDup = function(hometown){console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown);}

globalPrintFullNameDup.call(name1,'Pune'); //Anish Marathe from Sangli
globalPrintFullNameDup.call(name2,'Sangli'); //Sneha Punekar from Pune

//Likewise we can use apply method. Difference being just in passing the arguments.

globalPrintFullNameDup.apply(name1,['Pune']); //Anish Marathe from Pune
//for apply method. We need to pass arguements in array, for call method we pass arguements comma separated.

//There is one more function called bind. bind will create a copy of a function and we can use 
//it later like:

let globalPrintFullNameDupBind = globalPrintFullNameDup.bind(name1,'Sangli');
globalPrintFullNameDupBind();

let globalPrintFullNameDupBind2 = globalPrintFullNameDup.bind(name2,'Pune');
globalPrintFullNameDupBind2();