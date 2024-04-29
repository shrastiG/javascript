//primitive:
/**
 * 7 types:
 * string, boolean,number, null, undefined, symbol and BigInt
 */



//Reference(non-primitive): ref can be allocated in memory 
/**
 * arrays, objects**, functions
 */

const heros = ["shaktiman", "naagraj", "doga"]; //array
let myObj = {  //object
    name: "hitesh",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myobj); //undefined
console.log(typeof heroes); //object
console.log(typeof myFunction); //function, type of obj

/**https://262.ecma-international.org/5.1/#sec-11.4.3 */