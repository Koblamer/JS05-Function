function sayHi(age) {
    if (age < 12) alert("Hi kid");
  }
  console.log(sayHi);  // ตอบ undifined เพราะ function ไม่มี () ข้างหลัง sayhi จึงไม่เกิดการเรียกใช้ function 


  function sayHi(age) {
    if (age < 12) alert("Hi kid");
  }
  console.log(sayHi(10));  // ตอบ "Hi kid" เพราะ age 10 < 12