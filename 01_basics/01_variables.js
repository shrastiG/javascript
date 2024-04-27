const accountId = 123; //cannot be changed later
let accountEmail = "123@gmsil.com"; //used 
var accountPassword = "1234"; //global variable, not prefered bcz of issue in block scope and functional scope
accountCity = "Jaipur"; //never use
let accountState; //undefined

// accountId = 2; //not allowed
// console.log(accountEmail);

accountEmail = "abc@gmail.com";
console.log(accountEmail);

accountPassword = "abcd";
console.log(accountPassword);

accountCity = "delhi";
console.log(accountCity);

/** Another way to print: */
console.table([accountEmail,accountId,accountPassword,accountState,accountCity]);