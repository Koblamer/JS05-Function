LECTURE 2023-08-10
/*
### การเขียนฟังก์ชันมี 2 แบบหลักๆ

1. Function Declaration / Named Function
2. Function Expression / มักจะถูกเขียนในรูปของ Anonymous Function
*/

/* 
การใช้งานฟังก์ชันต้อง 
1.ประกาศฟังก์ชัน => กำหนดชื่อ, input 
2.เรียกใช้งาน
*/

// 1 Define
function sayHi(name, lastName) {
    console.log(`Hello ${name} ${lastName}`);
}

// 2 Call
sayHi('John', 'Doe');
sayHi('Pavit', 'Pimchanangul');

// RETURN VALUE ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
// add(5,6) == Return Value, FN Result



//RETURN VALUE ผลลัพธ์ที่ได้ตจากการ Run Function จนเสร็จ

function add(x,y) {
    let result = x + y;

    return result;
}

console.log(11 === add(5,6)) //DONE : add(5,6) === result

let r = add(5,6); // การเขียนแบบที่ 1 reuseable สามารถ reuse result ได้ ใช้เวลาน้อยกว่าวิธีที่ 2 (เช่น ถ้าอันนี้ใช้ 1 ชั่วโมง)

console.log(add(5,6)); // การเขียนแบบที่ 2 one time use ใช้ครั้งนึงต้องคิดใหม่ครั้งนึง ช้าหน่อย (เช่น ถ้าอันนี้จะใช้ 3 ชั่วโมง)


//RETURN VALUE
function square(x) {
    return x * x;
   }
   // store return value in variable
   let area = square(3); // square(3) => 9
   console.log(`Area is ${area}`); // Area is 9
  
////  
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        // console.log()
        // return false;
        // ^^^ ถ้าจะทำอะไร เช่น ใส่ console.log ให้ใส่ก่อน return ^^^
        return n % 2 == 0;
        //return 6 % 2 === 0 (true)
        //return 5 % 2 === 0 (false)
    }
}   
console.log(isEven(6));
console.log(isEven(5));

//------------ RETURN VALUE end -------------//

// CheckPoint
// Declare : ประกาศเป็น
// Params รับ Input
// Return : เข้าใจเรื่อง return
// Call : รันฟังชั่น


// Function Expression

let a = 5 * 2 + 7;
// variable = expression
/*
expressoin คือ สิ่งที่ evaluate แล้วเป็น Single value ได้
- single value : 7
- combine expression : 7+2
- Function : add(7,2)
*/

let myFun = add;
let z = console.log;
// FORMAT : variable  = Function (Function Expression)
// Function Expression คือ การ assign Function ให้กับ Variable

console.log(myFunc(5,2));
z('Hi'); // z = console.log;

// Aninymous Function

//SYNTAX : FUNCTION EXPRESSTION
// อธิบาย : กำลัง assign Anonymous function ให้กับตัวแปร หsayHello

const sayHello = function (name){
    console.log('Hi ' + name);
}

sayHello ('Expression');

// แบบที่1 function add () {}
// แบบที่2 let add = function () {}
// แบบที่3 let add = () => {}
// ^^ ตัวอย่างการ assign function ให้กับ function ที่ชื่อว่า add เขียนได้หลายวิธี ^^^

const minus = (a,b) => a - b;
const minusTwo = a => a - 2;

// console.log(minusTwo(5));
// console.log(two);

// console.log(minusTwo);
// console.log(two());