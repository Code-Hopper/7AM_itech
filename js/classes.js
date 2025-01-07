// Math & Date
// we have some maths methods & properties inside of the Math class that can be access by Math object 

// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.SQRT2)
// console.log(Math.SQRT1_2)
// console.log(Math.LN10)
// console.log(Math.LN2)
// console.log(Math.LOG10E)

// let data = 144

// every method in Math class will always return us a value(number)

// console.log(Math.abs(data))

// // Math.pow(base,exponent)

// console.log(Math.pow(data,0))

// console.log(Math.sqrt(data))

// console.log(Math.cbrt(data))

// rounding off the data
// 0.5 -> 1 ceil
// 0.4 -> 0 floor

// let number = 1.9999

// // number = Math.round(number)

// console.log(Math.ceil(number))
// console.log(Math.floor(number))

// let a = 129

// let d = a % 10

// a = Math.floor(a/10)
// // 12.9 -> 12

// max and min

// let a = 100
// let b = 20 
// let c = 30

// console.log(Math.max(a,b,c,11.2,132,124,1.1))
// console.log(Math.min(a,b,c,11.2,132,124,1.1,0,-1))

let area = (2 * Math.PI * 5).toFixed(2)

console.log(`${area} cm.sq`)