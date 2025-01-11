// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

// let regex1 = /hello/i

// let regex1 = new RegExp("hello")

// let myString = "world Hello hello hello"

// console.log(myString.match(regex1))

let regex2 = /\d+/
// for digits
let regex3 = /[a-zA-Z]/
// for any letter

let myStr2 = "amey123"

console.log(myStr2.match(regex2))
console.log(myStr2.match(regex3))

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

let password = "Password3@"

console.log(password.match(regex))