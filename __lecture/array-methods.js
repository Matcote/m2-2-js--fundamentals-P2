// -------------------
// .includes()
// Explanation: It checks if an element is in the array. it will always return a boolean.
const pokemonDeck = ['Bulbasaur', 'Liepard', 'Torterra'];
console.log('.includes()', pokemonDeck.includes('Bulbasaur')); // true

// -------------------
// .slice()
// Explanation: Copies elements from an array based on provided positions. It returns a new array.
const arr = [
  'steph curry',
  'lebron james',
  'anthony davis',
  'bugs bunny',
  'michael jordan',
];
const bestPlayerEver = arr.slice(3, 4);
console.log('.slice()', bestPlayerEver);

// -------------------
// indexOf()
// Explanation: It returns the index of the first occurance of an item in an array.
console.log(
  '.indexOf()',
  ['I', 'love', 'bacon', 'but', 'not', 'avocado'].indexOf('bacon')
);

// -------------------
// .push()
// Explanation: Inserts a new item at the end of an array. It changes the original array.
const baconAvocado = ['I', 'love', 'bacon'];
baconAvocado.push('avocado');
console.log('.push()', baconAvocado);

// -------------------
// .pop()
// Explanation: Removes the item in an array. It changes the original array.
const fruits = ['Bacon', 'eggs', 'applewood bacon', 'salad'];
fruits.pop();
console.log('.pop()', fruits);

// -------------------
// .sort()
// Explanation: sort elements in array "alphabetically" or numerically.
const alpha = fruits.sort();
console.log('.sort()', alpha);

// -------------------
// .shift()
// Explanation: Removes the first element in an array. It returns that item/value. It changes the original array.
let stuff = ['avocado', 'bbq', 'drinks'];
let greenStuff = stuff.shift();
console.log('.shift()');
console.log('original array:', stuff);
console.log('item that was shifted:', greenStuff);

// -------------------
// .unshift()
// Explanation: It adds an element at the beginning of the array. It modifies the original array.
let otherStuff = ['avocado', 'bbq', 'drinks'];
otherStuff.unshift('Bacon');
console.log('.unshift()', otherStuff);

// -------------------
// .reverse()
// Explanation: It reverses the order of the elements of the array. It modifies the original array.
const example = ['bacon', 'about', 'message', 'secret', 'a', 'is', 'This'];
example.reverse();
console.log('.reverse()', example);

// -------------------
// .lastIndexOf()
// Explanation: It return the index of the item, starting at the end of the array, by default.
const example2 = ['bacon', 'bacon', 'avocado', 'bacon', 'bacon'];
console.log('.lastIndexOf()', example2.lastIndexOf('bacon')); // 4

// -------------------
// .splice()
// Explanation: Modifies the original array by adding or removing elements to/from it.
// 1st param: Starting index.
// 2nd param: Number of elements to remove from starting index.

// Original
let burger = ['Bun', 'Cheese', 'Meat', 'Ketchup'];

burger.splice(1, 3);
console.log('1 .splice(): ', burger);

burger.splice(1, 2, 'Bacon', 'Lettuce', 'Mayo');
console.log('2 .splice(): ', burger);

burger.splice(0, 0, 'Bacon', 'Grilled Chicken', 'Cheese');
console.log('3 .splice(): ', burger);

// .toString():
// Explanation: Creates a copy of the original and transforms the array into a string separated by commas.
let burger2 = ['Bun', 'Cheese', 'Meat', 'Ketchup'];
let newBurger = burger2.toString();
console.log('.toString(): ', newBurger);
console.log('Original: ', burger2);