//this keyword
/*
 in strict mode value of 'this' is undefined if there is no object.
 But in non strict mode - 'this' points to the global object which is nothing but window.

 * Arrow functions have no 'this'still if reference 'this' inside an arrow function. 
 * It will take the value from outer normal function.
 
 * Constructor functions: They are named with Capital Letter first | Should be executed only with new Operator
 * Why are they even used? :
    When we create a single object we do something like:
        let user = {
            firstName = 'Anish',
            isAdmin = true,
        }
    But say if we want to create 10 such objects with some differant parameters. Here we use constructor function.
        function User(name){
            this.firstName = name;
            this.isAdmin = true,
        }
    Now we can create the object just with one line:
        let user = new User('Anish'); and so on..

    Internally JS will do the following to implement the constructor function
        function User(name){
            this = {} //creates an empty object and assigns it to 'this'
            this.firstName = name; //values assignment
            this.isAdmin = true,
            return this; // returns the object
        }
    new function(){...}
    let user = new function(){
        this.name = 'Anish',
        isAdmin = false,
    }
    this is a constructor which is created and called immidiately and not stored anywhere for future re-use.

    return from constructors:
    
    function BigUser(){ (1)
        this.name = 'John',

        return { name:'Godzilla'} // returns this object
    }

    alert(new BigUser().name);
    * anything other than object is ignored.

    * with properties we can always create a method inside a constructor function (2)

    * Optional Chaining: '?.'
    * say for example we have an object 'user':
    * let user = {
            firstName:'Anish',
            age:18,
        }

      if we access user.firstName it returns Anish. But for web development anywhere if we access user.firstName
      and it doesnt exist.. then it gives an error
      We have a savior over here. '?.' operator.

      


*/

//Constructor function example

/*
function BigUser(){ //(1)
    this.name = 'John';

    //return { name:'Godzilla'}; // returns this object
    return this.name;
}

Symbols are skipped by for...in

*/

//alert(new BigUser().name);
//console.log(new BigUser().name);

/*
function User(name){
    this.name = name;
    this.sayHi = () => { this.name = 'John'; console.log('My first Name is : ' + this.name); }
}

let user = new User('Anish').sayHi();


*/

//var a = 4;
/*
let b = 2;

let a = {
    b:null,
} 

//console.log(a??b);
console.log(a?.b);
console.log(null === undefined);
*/

// let user = null;
// let x = 0;

// let result = user?.(x++);
// let resultR = user && x++;

// console.log(x);

function User(name){
    this.lastName = name;
}

let user = null;
let user1 = new User('Anish');

console.log(user);

delete user?.firstName;

console.log(user);