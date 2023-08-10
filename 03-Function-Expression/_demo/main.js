// console.log('anonymous');

// #1 : Named fn, FN Declararattion
// function add () {}

// #2 : Anonymous

// (function(message) {console.log(message)})('hi');



// IIFE Intermidiate Invke Function Ecpression
// (function(x,y) {console.log(x,y)})(10+5);


// console.log(x,y)
//     (function (x,y) {
//         return x + y;
//     }) (10,7);
    



// let a = (function (x,y) {
//         return x + y;
//     }) (10,7);

//     console.log(a)
    

// VARIABLE = EXPRESSION
let myVar = ((5 * 2 * 20) / 2) % 7;

// VARIABLE = FN (FN == EXPRESSION)

// ASSIGN  Anonymous Function to variable
const myFunc = function (x,y) {
    return x + y;
};

// ASSIGN Named Function to variable
console.log(MyFunc(5,10));



// A: Shortest
let a = function (x) {return x ** 2};
let b = (x) => x ** 2;


// B: Bracket
let c = (x,y) => {
    let result = x + y;
    return result;
};
//console.log(z(3));
console.log(a(5));
// console.log(b(3, 5));
// console.log(c(3,5));

// ---จดต่อจาก IPAD ----