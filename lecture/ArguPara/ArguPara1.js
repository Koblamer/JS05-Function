(params)     => parameter ไว้พูดถึง function

function funcName(params) {

}

//------------ parameter end ------------//

funcName("Hi");  // "Hi" is argument
funcName(2);  // 2 is argument
funcName(true);  // true is argument
funcName()  // no value passed, params will be undefined

//----------------- EX ----------------------//

function announcement(stationName) {
    console.log(`Next station ${stationName}`);
   }
   
   let a = "Silom"
   announcement("Asoke") // Next station Asoke
   announcement(a) // Next station Silom
   announcement() // Next station undefined
   
//-----------------EX end----------------------//
// ---------- Multiple parameter -------------//
function funcName(params1, param2, …paramN) {

}
    // ส่วนใหญ่จะไม่ใส้ param เกิน 5 เพราะจะเยอะเกินไป

    function announcement(stationName, doorSide) {
     console.log(`next station ${stationName}.`);
     console.log(`the door will open on the ${doorSide} hand side`);
    }
       
   announcement("Asoke", "right" ) 
   // next station Asoke. 
   // The door will open on the right hand side.



   function announcement(stationName, doorSide) {
    console.log(`next station ${stationName}.`);
    console.log(`the door will open on the ${doorSide} hand side`);
   }
   
   announcement("right", "Asoke" ) 
   // next station right. 
   // The door will open on the Asoke hand side.



   function announcement(stationName, doorSide = "left") {
    console.log(`next station ${stationName}.`);
    console.log(`the door will open on the ${doorSide} hand side`);
   }
   announcement("Asoke") 
   // next station Asoke. 
   // The door will open on the left hand side.
   // ถ้า หลังคำว่า Asoke ไม่ได้ใส่ กำหนด right ไว้ มันก็จะใช้ defult ในการแสดงผล ซึ่งก็คือ left
   // ถ้าใส่ right หลังคำว่า Asoke    right ก็จะแสดงผลออกมา ตามค่าที่เราตั้งไว้
    
   
          