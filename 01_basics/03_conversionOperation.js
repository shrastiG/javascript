let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true
console.log(typeof score1); //string
//or
console.log(typeof(score1)); //string

/** convert string to number */
let valueInNum1 = Number(score1)
console.log(typeof valueInNum1); //number
console.log(valueInNum1); //33

let valueInNum2 = Number(score2)
console.log(typeof valueInNum2); //number
console.log(valueInNum2); //NaN i.e, Not a Number

let valueInNum3 = Number(score3)
console.log(typeof valueInNum3); //number
console.log(valueInNum3); //0

let valueInNum4 = Number(score4)
console.log(typeof valueInNum4); //number
console.log(valueInNum4); //NaN

let valueInNum5 = Number(score5)
console.log(typeof valueInNum5); //number
console.log(valueInNum5); //1 for true, 0 for false 

/**NOTE: */
console.log(typeof NaN); //number


/** convert number or string to boolean */
let isLoggedin1 = 1;
let isLoggedin2 = ""
let isLoggedin3 = "abc"

let booleanIsLoggedin1 = Boolean(isLoggedin1); 
console.log(booleanIsLoggedin1); //true

let booleanIsLoggedin2 = Boolean(isLoggedin2); 
console.log(booleanIsLoggedin2); //false, empty string

let booleanIsLoggedin3 = Boolean(isLoggedin3); 
console.log(booleanIsLoggedin3); //true


/** convert number or boolean to string */
 let num1 = 33
let num2 = true

 let stringNum1 = String(num1)
 console.log(typeof stringNum1); //string

 let stringNum2 = String(num2)
 console.log(typeof stringNum2); //string
 console.log(stringNum2); //true


 /************** OPERATIONS ******************/
console.log("1"+2); //12
console.log(1+"2");  //12
console.log("1"+4+4+"2"); //1442
console.log("1"+2+1); //121, if string is first then next is considered as string
console.log(1+2+"1"); //31 , if number is first then next is also considered as number


console.log(true); //true
console.log(+true); //1, converted to num as incremented
console.log(+""); //0

let n1,n2,n3
n1 = n2 = n3 = 2+2

let counter = 100;
++counter; //prefix
console.log(counter);
counter++; //postfix
console.log(counter);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment