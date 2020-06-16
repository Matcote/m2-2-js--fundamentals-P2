# 2.1.9 - JavaScript Array methods P2

---

- Some array methods need a function as a parameter.
- These are arguably the most flexible and useful methods.

---

- `.forEach()`
- `.map()`
- `.filter()`
- `.every()`

---

### [`.forEach()`](https://www.w3schools.com/jsreF/jsref_foreach.asp)

The `.forEach()` method calls a function once for every element of the array.

```js
// Example
let words = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];
words.forEach(function(word){
    console.log(`${word} (${word.length})`);
})
```

---

### [`.map()`](https://www.w3schools.com/jsreF/jsref_map.asp)

The `.map()` method calls the provided function once for every element in the array and returns _a new array with the result_.

```js
// Example
let words = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

const newWords = words.map(function (word){
    return word.toUpperCase();
});
```

---

### [`.filter()`](https://www.w3schools.com/jsreF/jsref_filter.asp)

The `.filter()` method returns a new array with the values that meet the requirement(s).

```js
// Example
let words = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];
const threePlus = words.filter(function(word) {
    return word.lenth > 3;

});
return threePlus;

```

---

### [`.every()`](https://www.w3schools.com/jsref/jsref_every.asp)

The `.every()` method checks if all elements in an array pass a test.

It returns `true` or `false`.

```js
// Example
let words = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];
const x = words.every(function(word) {
    return word.length > 1;
});
console.log(x);
```

---

On to the workshop!!
