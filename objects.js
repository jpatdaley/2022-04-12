// ===== OBJECTS =====
// We use objects to store key/value pairs, or any other data type. This includes all primitive and reference types.
// We declare objects using the curly brackets
// Left side are called properties/key and the right side are the values
// Key is a string (JS coerced it automatically)
// Value is any JS expression (code that evaluates to a single value or thing), including other objects (yes, functions too)
// In computer science, collections of key/value pairs are commonly referred to as dictionaries - a good visualization of what an object is

// Separated by commas

const person = {
    firstName: 'Teo',
    age: 99,
    fruit: ['apple', 'banana'],
    'favorite-color': 'olive'
}

// Task: Ask questions
// What is our object called?
// How many properties do we have? 4
// How many values do we have? 4 

// Print our person obj
// console.log(person)
// ===== ACCESSING =====

// Using "dot notation" access name

// Access banana
// console.log(person.fruit[1])

// Favorite color
// console.log(person["favorite-color"])

// console.log(person.favorite-color) => won't be able to access throws err: ReferenceError: color is not defined

// Using square bracket property to access color - we have to wrap property/key in quotations.
// console.log(person.firstName)

// What happens if we have the same property/key name?
const instructor = {
    name: 'teo',
    name: 'josh',
    name: 'teddy'
}

// console.log(instructor.name)

// It will always print the final key's value.

// ===== ADDING PROPERTIES =====
// console.log(instructor)

instructor.email = 'josh@perscholas.org'
// console.log(instructor)

// ===== CHANGING OBJECT PROPERTIES =====

instructor.email = 'hello@aol.com'

// console.log(instructor)

// ===== ACCESS USING OBJECT DESTRUCTURING =====
// We can grab the object property and treat it as a variable. 
const { firstName, age, fruit } = person

// console.log(firstName)
// console.log(age)
// console.log(fruit)