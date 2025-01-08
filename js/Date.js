// to use the date class i.e. the properties and methods 
// we have to create a date object

// let date = new Date()
// using date class contructor
// yyyy-mm-ddThours:minutes:seconds
// let date = new Date("2024-12-05T00:00:00")

let date = new Date()

date.setDate(5)
date.setMonth(5)
date.setFullYear(2026)
date.setHours(0)
date.setMinutes(0)
date.setSeconds(0)
date.setMilliseconds(0)

// date.properties & date.methods

console.log(date.getDate())
// starting from 0
console.log(date.getMonth())
console.log(date.getFullYear())
// starting from 1
console.log(date.getDay())
console.log(date.getTime())

// getter & setter (contructor) 

console.log(date.getTimezoneOffset())

console.log(date.toTimeString())
console.log(date.toLocaleTimeString())
console.log(date.toDateString())
console.log(date.toLocaleDateString())

let student = {
    admitDate : new Date().toDateString()
}

console.log(student.admitDate)

// use to date class is to give timestamp at a created data for a database