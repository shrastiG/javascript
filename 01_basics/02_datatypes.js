"use strict"; //treat all js code as newer version, not necessary to write

// alert(3+3); //won't work here bcz we are using nodejs, not browser

/* code readability should be high */

/* PRIMITIVE DATATYPES */
let name = "shrasti" //string
let age = 20 //number
let isLoggedin = false //boolean
let state = null //null
let ans //undefined
const id1 = Symbol('123'); //symbol
const id2 = Symbol('123');
console.log(id1==id2); //false

let num = 2134567890n;  BIG INT
console.log(typeof num);
//null -> a standalone value, consisdered as empty
//undefined -> no value is assigned
//symbol -> for uniqueness

/**NON-PRIMITIVE- done later*/
//object

console.log(typeof "sh"); //string
console.log(typeof age); //number
console.log(typeof null); //OBJECT ****
console.log(typeof undefined); //undefined