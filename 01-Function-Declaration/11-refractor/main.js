function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm("Did parents allow you?");
    }
  }

//------- if -------//

  function checkAge(age) {
    if (age > 18) {
      return true;
    } 
    if (age <= 18) {
      return confirm("Did parents allow you?");
    }
  }
//------- if end -------//

//------- ? -------//s

  function checkAge(age) { 
    age > 18 ? true : confirm("Did parents allow you?")
  }
//------- ? end -------//  


const checkAge = (age) => {

}


