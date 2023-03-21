const anish = {
    firstName : 'Anish',
    lastName:'Marathe',
    friends: ['Karan','Parth'],
    age : 2023 - 1998,
}

console.log(anish.lastName); //Dot notation
console.log(anish['lastName']); //Bracket notation

/*
    For bracket notation we can specify any key which has value in it:
    Eg.
*/

let key = 'lastName';
//So I can say:
console.log(anish[key]);//Wull give Marathe.
//But we cannot do this for dot notation
//console.log(anish.key); //
//Will give output as undefined because there exists no 'key' attribute inside anish object.
//Undefined is returned when we try to access a property that doesnt exist on objects.
//This is true for [] as well as . notation
//Dot notation - Member Access | [] notation is Computed Member Access
//console.log(anish.keys())//Not a function


// key = prompt('Choose what you want to know about Anish?','name');
// console.log(anish[key]);
anish.location = 'Pune';
anish['country'] = 'India';

console.log(anish);

console.log(`${anish.firstName} has ${anish.friends.length} friends, but his best friend is: ${anish.friends[0]}`);