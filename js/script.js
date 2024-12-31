let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

// lenghth
// push pop shift unshift | updation
// itrate

// let odd = []

// let even  = []

// let multiple_of_3 = []

// for(let i = 0 ; i < numbers.length ; i++){
 
//     console.log(numbers[i])
//     if(numbers[i] % 2 == 0){
//         even.push(numbers[i])
//     }else{
//         odd.push(numbers[i])
//     }

//     if(numbers[i] % 3 == 0){
//         multiple_of_3.push(numbers[i])
//     }

// }

// console.log(even)
// console.log(odd)
// console.log(multiple_of_3)

// searching and sorting

// forEach , for of, map

// numbers.forEach((number)=>{
//     // cannot return element like map function
//     console.log(number)
// })

// let printArray = (element) => {
//     console.log(element)
// }

// let squareTheArray = (element) => {
//     return element * element
// }

// // numbers.map(printArray)
// numbers.map((number)=>{
//     return number * number
// })

// let squareArray = []

// numbers.forEach((number)=>{
//     squareArray.push(number * number)
// })

// console.log(squareArray)

// let newSquareArray = numbers.map((number)=>{
//     return number * number * number
//     // return a new array 
// })

// console.log(newSquareArray)

// numbers.map((number)=>{
//     // statement
//     // returns a new array
// })

let newArray = []

// for(let i = 0 ; i < numbers.length ; i ++){
//     newArray.push(numbers[i] * numbers[i])
// }

// console.log(newArray)

// for of

for(let number of numbers){
    newArray.push(number * number)
}

console.log(newArray)

// filter, sort |  returns the new array
// binary, linear | bubble sort, selection sort, insertion sort

// 2-D - matrix

// 5 , 1  , 3, 2, 4 - 1,2,3,4,5
// a e b f g i - a b e f g i | ACSII | A 65 a 97 shift 32