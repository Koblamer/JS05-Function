
let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // *  LOCAL
}

logMessage(message);
console.log(message); // ** GLOBAL
```

```js
let name = "John";

function sayHi(input) {
  console.log(name); // *** 
  name = input;
}

sayHi();
console.log(name); // ****
```
