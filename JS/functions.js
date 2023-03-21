// function logger(){
//     console.log('Anish');
// }
// //defining

// logger(); // invoking | Calling | running
// logger();
// logger();
// logger();


/*
    Functions can reuse data as well.. 
    Takes input as parameters 
    Returns output..


    Note: Function names should be descriptive
*/

// console.log(fruitProcessor(2,3)); //actual values are arguements

// console.log(fruitProcessor()); //function whose defination has params but called without args
//prints undefined for var value

/*
function fruitProcessor(apples,oranges){ // apples and oranges are i/p data
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples & ${oranges} oranges`;
    return juice;
}
*/

//Hoisting can also be seen as function is called before defining.

// var a = 20;
// var b = 10;

// console.log(a , b);

// function changeValues(p,q){
//     console.log(p , q);
//     p = 5;
//     q = 6;
//     console.log(p , q);
//     return p,q;
// }

// changeValues(a,b);

// console.log(a , b); //Prints 20 , 10. So Premitives are passed by Value

// let obj1 = {
//     'name':'Anish',
// }

// console.log(obj1.name);

// changeValues(obj1);

// function changeValues(parameter){
//     parameter.name = 'Viraj';
// }

// console.log(obj1.name); //Prints Viraj. So Non-Premitives are passed by Reference


//function calcAge1(birthYear){ return 2023 - birthYear;} //function declaration

// console.log(calcAge1(1998));
// console.log(calcAge1(1997));


//function expression This is a function without a name stored into calcAge2 variable
//Note here hoisting doesnot work.
//calcAge2() if called here i.e. before declaration will give an error
// const calcAge2 = function (birthYear){
//     return 2023 - birthYear;
// }

// console.log(calcAge2(1897));

//Arrow function: Special sort of function expression
//const calcAgeWithArrowFunc = birthYear => 2023 - birthYear; //no need to write return for ONE LINER

//console.log(calcAgeWithArrowFunc(1997));

// const yearsUntilRetirement = birthYear => 65 - calcAgeWithArrowFunc(birthYear);

// console.log('Years till retirement are: ', yearsUntilRetirement(1997));
/*
const yearsUntilRetirementMultiLines = (birthYear,firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years..!!`;
}

console.log(yearsUntilRetirementMultiLines(1998,'Anish'));
*/
/*
    Arrow functions do not get 'this' keyword

    Functions calling other functions within.
*/


//function that cuts a fruit in multiple pieces.

// const cutFruitPieces = fruit => fruit * 6;

// function fruitProcessor(apples,oranges){
//     return `Juice with ${cutFruitPieces(apples)} pieces of Apple & ${cutFruitPieces(oranges)} of Oranges`;
// }

// console.log(fruitProcessor(2,5));

const calcAge = birthYear => 2023 - birthYear;

function yearsUntilRetirement(birthYear,firstName){
    const years = calcAge(birthYear);
    return years >= 65 ? `${firstName} has Already retired` : `${firstName} will retire in ${years}`;
}

console.log(yearsUntilRetirement(1967,'Milind'));
console.log(yearsUntilRetirement(1945,'Manohar'));
console.log(yearsUntilRetirement(1998,'Anish'));



