let name1 = {
    firstName : 'Anish',
    lastName: 'Marathe'
}

let printName = function(){console.log(this.firstName + ' ' + this.lastName);}

let printMyName = printName.bind(name1);
printMyName();

//What if polyfill is not supported by the browser.
Function.prototype.myBind = function(...args){
    let obj = this; //Fetch this which is nothing but the reference
    let params = args.slice(1); //returns an array of the parameters by cutting the first element which was nothing but the reference. These arguements are those which might be passed within the original printName function
    return function (...args2){ // this args2 will have any arguements passed through myBindedName(...arguements)
        obj.apply(args[0],[...params,...args2]); //[...arr1,...arr2] is an ES6 convention with which we combine two arrays and formulate a single one
    }
}

let myBindedName = printName.myBind(name1);
myBindedName();

//Create our own implementation of bind method.