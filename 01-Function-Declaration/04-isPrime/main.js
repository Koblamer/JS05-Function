// let n = 7;
// let isPrime = true

// for(let divider = 2; divider < n; divider++) {

//     if (n % divider == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log(n);

//DESIGN Function
// 1- INPUT ? => number ที่ใช้เช็ค
// 2-LOGIC IMPLEMENT ?
// 3-OUTPUT ? => boolean true,false
// number => bool


function checkPrime(n) {
    let isPrime = true
    for(let divider = 2; divider < n; divider++) {

        if (n % divider == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(n);
    
}

checkPrime(7);
checkPrime(13);
checkPrime(61);
checkPrime(63);
checkPrime(83);
checkPrime(89);

// ABSTRACTION
// - simple ideas => one idea
// - hiding complexity
// - siple interaction
