/*


*/

const friends = ['Karan', 'Ashish', 'Omkar']
//console.log(friends)

const years = new Array(1998,1986,1971);//Another way
// console.log(years)

//first element of friends
// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])

/*
    friends[any_expression]
*/

//Number of elements 
// console.log(friends.length) //length is property
// console.log(friends[friends.length-1])

//We can also add elements to array with []
friends[1] = 'Parth'

// console.log(friends)

//We changed const declared variable???
//Arrays and Objects are not premitive so we can mutate the values

//What we cannot do is assign the array to a differant set of array
//e.g., friends = ['Akash','Pratik] --> This gives an error

let firstName = 'Anish'
const anish = [firstName, 'Marathe', 2022-1998, 'Developer', friends]
// console.log(anish)
// console.log(typeof anish)

//Any array + anything will add that value to the last element of that array
//In the form of string

const calcAge = birthYear => 2022 - birthYear

// console.log(calcAge(years[0]))
// console.log(calcAge(years[1]))
// console.log(calcAge(years[2]))

//or we can do

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
// console.log(ages)

/*
**************************************
Array Methods
**************************************

*push()
push() : Add elements to the end of array. 
push is a function which is inside the prototype. 
push being a function returns - length of the new array

*unshift()
unshift() : Adds element to the begining of the array.
unshift also lies inside the prototype.
unshift is also a function which returns the length

*pop()
pop() function removes the last element of the array and 
pop() returns the removed element from the array
pop() also lies in the prototype of the array

*shift()
shift() removes the first element from the array
shift() returns the removed element from the array
shift() lies in the prototype - Array

*includes()
returns true if element found, false otherwise.
includes does not do type coercian. 
'23' === 23 => false

*/

friends.push('Jenifer') //Adds element to the end of array and returns the length
console.log(friends)
friends.unshift('Jyoti') //Adds element to the beginning of the array and returns the length
console.log(friends)
friends.pop() //Removes the last element in the array and returns that element
console.log(friends)
friends.shift() //Removes the first element and returns the removed element.
console.log(friends)

console.log(friends.indexOf('Parth')) // Return the index of element, and returns -1 if not found

//includes() : returns true if element is in the array
console.log(friends.includes('Parth'))
console.log(friends.includes('BOb'))

