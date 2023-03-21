/*
    Prototype --> Object
    Prototype - contains methods and properties that are accessible to all the Objects linked
    to that prototype. This is prototypical inheritance. Methods are delegated to the linked
    prototype object.

    1. Constructor Functions: Creation of objects from a function. Arrays, Maps and Sets 
       are implemented this way
    2. ES6 Classes: Modern alternative way. 
    3. Object.create(): Easiest and Straightforward way of linking object to prototype.

    Abstraction
    Encapsulation
    Inheritance
    Polymorphism
*/

/*
***************************
Constructor Functions:
***************************
1. Called with 'new' operator.
2. Always start with a capital letter.
3. Arrow function wont work because this doesn't has this keyword. :P
*/

const Person = function(firstName,birthYear){
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    //console.log(this);

    //Instance Methods
    //Never to create a method inside a constructor function. 1000 Object would carry this method
}

const anish = new Person('Anish',1998);
const parth = 'Parth';
//console.log(anish instanceof Person); //returns true
// console.log(parth instanceof Person); //returns false

//console.log(anish.eat());
// console.log(new Person('Soham',1995));
/*
    1. New{} is created.
    2. function is called, this = {}
    3. Newly created object {} is linked to Prototype.
    4. Object is returned from Constructor function.
*/
//All objects created from Constructor function will have access to prototype methods

/*
    All the objects defined with constructor function gets access to prototype:


*/

//console.log(Person.prototype);
Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear);
}

//anish.calcAge();
//parth.calcAge();
//console.log(anish);

//Only one copy of calcAge exists but all the objects created by constructor 
//function can use this method

//Any objects always has access to methods and properties of its prototype.

//console.log(anish.__proto__);
/*
    Person.prototype - This is not the prototype of Person
    It is basically a prototype which will be used by all the objects created with Person
    thats why Person.prototype is strictly equal to anyObject.__proto__

    Person.prototype.isPrototypeOf(anish) true
    Person.prototype.isPrototypeOf(Person) false


*/

//We can always set properties to Prototype not just methods
Person.prototype.species = 'Homosapiens';
//console.log(anish);

//hasOwnProperty shows which property object has on its own vs which is inherited from Prototype


/*
***************************
ES6 Classes
*************************** 

Classes in Js do not work like C++ or Java
Classes are special type of functions:
Thats why class declaration and class expression exists.

1. Classes are NOT hoisted unlike functions
2. Just like functions, classes are also first class citizens
(can be passed inside a function and can be returned)
3. Classes are always executed in strict mode

*/

//class expression
//const PersonCl = class{

//}
//class declaration
// class PersonCl{
//     constructor(name,birthyear){
//         this.name = name;
//         this.birthYear = birthyear;
//     }//this is called when object is initialised with new keyword

//     greet(){
//         console.log(`Hey ${this.name}`);
//     }//This methods are automatically loaded into the prototype    
// }

// const anishCLS = new PersonCl('Anish',1998);
// console.log(anishCLS);
// anishCLS.greet();

/*
**************************
Getters & Settters
**************************

* defined in class as methods but used as properties
*/

// class PersonCl{
//     constructor(fullName,birthyear){
//         this.fullName = fullName;
//         this.birthYear = birthyear;
//     }

//     get birthyear(){
//         return this._birthYear;
//     }

//     set birthYear(yr){
//         this._birthYear = yr;
//     }
// }

// const anishCl = new PersonCl('Anish',1998);
// console.log(anishCl._birthYear);

/* 
*************************************
OOP - Static Methods
*************************************

Methods which are available for Namespace and not exist in the prototype.

i.e.,
Number.parseFloat(Number)
This method is not available for any number or object of Number
But its available for Number constructor

To create a static method in class:
Simply write:

static hey(){
    console.log('hey')
}

Static methods are not available on instances. 
They are class methods

For eg.

*/

Person.hey = function(){
    console.log('Hey there');
}

//Person.hey() //The function is available to function namespace
//anish.hey() //This is wrong, hey() is not available onto the prototype


/*
***********************************
Object.create()
***********************************
Creates a new object and prototype of this object will be the passed object

*/

const PersonProto = {
    calcAge(){
        console.log(2022 - this.birthYear)
    },

    init(firstName,birthYear){
        this.birthYear = birthYear
        this.firstName = firstName
    }
}

const nidhi = Object.create(PersonProto)
console.log(nidhi)
console.log(nidhi.__proto__ === PersonProto)
nidhi.init('Nidhi',1998)
nidhi.calcAge()

