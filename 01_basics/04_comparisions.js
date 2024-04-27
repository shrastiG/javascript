console.log("3">2); //true
console.log("02"<1); //false

//equality check:
console.log(null == 0); //false
//comparisions:
console.log(null > 0); //false
console.log(null >= 0); //true as when comparing it treats null as 0

/**NOTE: avoid these null type and undefined type comparisions! */

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); //false

//STRICT CHECK: === -> checks not only values but datatypes also
// == -> checks value only

console.log("2"==2); //true
console.log("2"===2); //false