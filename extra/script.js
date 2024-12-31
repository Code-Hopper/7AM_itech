// js code 
// programming in js 
// logics(core) | DOM | Events 

// data types
// primitive | non-primitive
// int, floats, double, long, short, byte (number)
// char, string (string)
// boolean (true/false) |  can be used in conditional statements
// Null
// NaN | not a number
// undefined 

// variable | container which can hold a data value of certain data type it has a refernce name.
// syntax

// scope variable_name assignment oprator data/vlue
// (var,let,const) rules = data

// naming rules
// a name must not contain any special charchters(expection : _ ),
// no spaces and has to be unique(in same scope)
// a name can be alpha numeric | but must not start with 

// let My_data1 = 123

// oprator, statements and expresion  

// oprator

// Airthamtics 
// + - / * %
// logical
// && , || , !
// increement and dcreement
// ++ , -- | pre and post
// assignment 
// = , += , -=, *=, /= , %=
// conditional
// < > <= >= != == === 
// ternary : ? (ternary statements) 

// statement (conditional and looping) 
// x + y = z

// let a  = 20;
// let b  = 30;

// let c = a % b

// output statments(methods) | input statements

// output
// document.write()
// console.log()
// window.alert()

// input 
// window.prompt()
// window.confirm()

// document.write("This Is Some Content")
// console.log("This is Also some content")
// alert("This is alert")

// "string" , template litrals , variable

// console.log(c)

// let a = 20
// let b = 30
// let c = a + b

// // console.log(a % b)

// // concatenation 
// // joing string with some another string or data

// // console.log("This value of c is")
// // console.log(c)

// let fname  = "Amey"
// let lname = "Khondekar"

// console.log(fname + " " + lname)

// console.log("the value of c is " + c)

// type casting
// change one data type to diffrent

// number -> string
// number -> boolean

// string -> number
// string -> boolean

// boolean -> number
// boolean -> string

// let data = 0

// typeof(data) return the data type of the data

// console.log(typeof(data))
// console.log(data + 100)

// // number to string

// data = String(data)
// console.log(data + 100)
// console.log(typeof(data))

// number to boolean
// console.log(data)
// console.log(typeof(data))

// // if number is 0 -> false 

// data = Boolean(data)

// console.log(data)
// console.log(typeof(data))

// string -> number
// string -> boolean

// let s1 = "asd"

// console.log(s1)
// console.log(typeof(s1))

// s1 = Number(s1) 
// // if a string contains only numbers then it will return the number else if a string has any charchter other than a number it will return NaN(Not a Number)

// console.log(s1)
// console.log(typeof(s1))

// console.log(s1)
// console.log(typeof(s1))

// s1 = Boolean(s1)

// // if string is empty then false else true

// console.log(s1)
// console.log(typeof(s1))


// boolean -> number
// boolean -> string

// let data  = true

// // console.log(typeof(data))
// // console.log(data)

// // data = Number(data)
// // // 0 false 1 true

// // console.log(typeof(data))
// // console.log(data)


// console.log(typeof(data))
// console.log(data)

// data = String(data)

// console.log(typeof(data))
// console.log(data)


// let data = Number(window.prompt("Enter something"))
// will always cast input data to string

// console.log(data)
// console.log(typeof(data))

// let data;

// console.log(data + a)

// statements (conditionals and looping)

// conditionals statement

// if, if-else, if-elseif, if-else-if ladder, switch case, ternary

// syntax if

// if(condition){
// true block
// }

// if(codition){
// true block
// }else{
// false block
// }

// assignments oprators
// = , += -= /= *= %=

// let data = 10

// let x = 50

// data += x 
// // data = data + x

// console.log(data)

// icreement(+1), dcreement(-1)
// (pre,post)++ , (pre,post)--
// ++x(pre),x++(post)


// let age = 10

// // age < 10 : false
// // age > 10 : true
// // age <= 10 : false
// // age >= 10 : true
// // age != 10 : true
// // age == 10 : false
// // age === 10 : false

// // if(age >= 18){
// //     console.log("you can drive !")
// // }else{
// //     console.log("you can't drive !")
// // }

// if(age === "10"){
//     console.log(true)
// }else{
//     console.log(false)
// }

// nasted-if

// if(condition){
// if(condition){
// console.log("")
// }
// }

// if-elseif 

// if(){

// }else if(){

// }

// let main = "pass"
// let advance = "fail"

// if (main == "pass") {
//     if (advance == "pass") {
//         console.log("You Got Admission !")
//     }else{
//         console.log("you passed main but failed advance")
//     }
// } else {
//     console.log("You will not get any Admission !")
// }


// find out greter of 3 numbers

// let a = 10
// let b = 10
// let c = 10
// let d = 10
// let e = 10

// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             console.log("A is greater of all !")
//         } else {
//             console.log("D is greater of all !")
//         }
//     } else if (c > d) {
//         console.log("C is greater of all !")
//     } else {
//         console.log("D is greater of all !")
//     }
// } else if (b > c) {
//     if (b > d) {
//         console.log("B is greater of all !")
//     } else {
//         console.log("D is greater of all !")
//     }
// }else if(c > d){
//     console.log("C is greater of all !")
// }else{
//     console.log("D is greater of all !")
// }

// logical oprator | && | || | !

// true && true : true
// true && false : false
// false && true : false

// true || false : true
// false || true : true
// true || true : true
// false || false : false

// !true : false
// !false : true

// if ((a > b) && (a > c) && (a > d)) {
//     console.log("A is greater of All !")
// } else if ((b > a) && (b > c) && (b > d)) {
//     console.log("B is greater of All !")
// } else if ((c > a) && (c > b) && (c > d)) {
//     console.log("C is greater of All !")
// } else if ((d > a) && (d > b) && (d > c)) {
//     console.log("D is greater of All !")
// } else {
//     console.log("Answer not found !")
// }

// let data = "asdasdasd"
// if(!data){
//     // console.log("not found")
//     exit;
// }

// year leap,
// once in 4 years || not in every 100 years || once in every 400 years 

// 0

// 2024 % 4 == 0 : leap year
// 2024 % 100 == 0 : not a leap year
// 2024 % 400 == 0 : leap year

// 2000 : 1900 : 1800 : 1700 : 1600


// 0

// if(year % 100 == 0){
//     if(year % 400 == 0){
//         console.log("Entred Year " + year + " is a leap year !")
//     }else{
//         console.log("Entred Year " + year + " is not a leap year !")
//     }
// }else if(year % 4 == 0){
//     console.log("Entred Year " + year + " is a leap year !")
// }else{
//     console.log("Entred Year " + year + " is not a leap year !")
// }

// if ( ( (year % 100 != 0) && (year % 4 == 0) ) || (year % 400 == 0) ) {
//     console.log("Entred Year " + year + " is a leap year !")
// }else {
//     console.log("Entred Year " + year + " is not a leap year !")
// }

// ternary statements  ?

// condition ? true block : false block

// let year = 1700

// year % 100 != 0 && year % 4 == 0 || year % 400 == 0 ? console.log("Entred Year " + year + " is a leap year !") : console.log("Entred Year " + year + " is not a leap year !")

// false ? console.log("its true") : console.log("its false")

// let userInput = window.prompt("Enter Some Data")
// console.log(typeof(userInput))

// switch case
// menu driven : option 

// switch(choice){
//     case "" : console.log("this is case 1")
//     break;
//     .
//     .
//     .
//     .
//     case n  : console.log("this is case n")
//     break;
//     default : console.log("no case matched !")

// let choice = window.prompt("Enter a value a,b,c,d,e")

// switch(choice){
//     case "a" : console.log("case a is running !")
//     break;
//     case "b" : console.log("case b is running !")
//     break;
//     case "c" : console.log("case c is running !")
//     break;
//     case "d" : console.log("case d is running !")
//     break;
//     case "e" : console.log("case e is running !")
//     break;
//     default  : console.log("Invalid Input !")
// }

// let charchter = prompt("Enter a charchter")

// a e i o u

// switch(charchter){

//     case "a": console.log("it is a vowel")
//     break;
//     case "e": console.log("it is a vowel")
//     break;
//     case "i": console.log("it is a vowel")
//     break;
//     case "o": console.log("it is a vowel")
//     break;
//     case "u": console.log("it is a vowel")
//     break;
//     default: console.log("not a vowel !")

// }

// switch(charchter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u": console.log("it is a vowel")
//     break;
//     default: console.log("not a vowel !")
// }

// if , if-else, if-elseif, nasted if, ternary, switch case

// looping statement
// whlie, do-while, for
// Array : forEach(), for of, map(), filter()
// object : for in

// function / methods
// reuse | DRY

// 2 syntax : 2 types of function 

// using function keywork
// ES6 : Module / FAT arrow function / Arrow Function

// args : input data for function(optional)

// function functionName(args){
// function body
// }

// calling a function : functionName(args[optional])

// function greet(name){
//     console.log("Hello " + name +" user i'm greet !")
// }

// greet("Amey")
// greet("kunal")
// greet("Rohit")
// greet("Yash")
// greet("Om")

// scope name = (args[optional]) => {
// function body 
// }

// let greet = (name) => {
//     console.log("Hello " + name + " user i'm greet !")
// }

// greet("Amey")
// greet("kunal")
// greet("Rohit")
// greet("Yash")
// greet("Om")

// hoisted data / data hoisting

// fun1()

// function fun1(){
//     console.log("this is function 1")
// }

// fun2()

// let fun2 = () => {
//     console.log("this is function 2")
// }

// js support hoisting | we can hoist a normal function keyword but not a arrow function

// 4 types of function
// no args and no return
// args but no return
// no args but return
// args and return

// return statement has to be writen in function body, once in body 

// no args and no return
// function doSomething(){
//     console.log("doing something !")
// }

// doSomething()

// // args but no return 
// function greet(name){
//     console.log("Hello " + name +" user i'm greet !")
// }

// greet("Amey")

// no args but return

// let a = 100

// function doSomething(){
//     let a = 20
//     let b = 30
//     return a+b 
// }

// let data = doSomething()

// console.log(data)

// args and return

// T && F : F
// F && F : F
// F && T : F
// T && T : T


// function add(num1, num2) {
//     if (typeof (num1) == 'number' && typeof (num2) == 'number') {
//         return num1 + num2
//     } else {
//         return "cannot add this data !"
//     }
// }

// console.log(add(1, 2))
// console.log(add(1, "2"))


// let doSomething = data => {
//     console.log('user has sent this data: ' + data)
//     return "function completed"
// }

// doSomething("some data")

// let doSomething = data => 100 + data

// let doSomething = data => data % 2 == 0 ?  data : null

// console.log(doSomething(100))


// array and object

// array : collection of data

// syntax for a array in js 

// dyanmic array : it can increase it's size as the element data added

// let array_name = [element1,element2,....,elementn]

// in array element are stored in contigious memory location

//  1    2    3
// 1000 1004 1008

// let data = 787

// rational
// integer | 4 bit | 8 bit | 16 bit | 32 bit | 64 bit

//  0    0     0       0
// 2^3  2^2   2^1     2^0    
// 0+2+4+8 = 14
// 255
// 8 bit = 1 byte
// RAM 

// let numbers = [1,2,"3",4,true,6,50.5,8,9,10]

// lenght is the size(no of element present in the array)
// array.length

// console.log(numbers.length)

// index number
// element  index
// 1           0
// 2           1
// "3"         2
// 4           3
// true        4 
// 6           5 
// 50.5        6 
// 8           7 
// 9           8 
// 10          9

// array itration, properties, methods

// using while loop armstrong number

// function check_armstrong(number) {
//     let orginal_number = number
//     let sum = 0
//     let digit = null

//     let temp_number = orginal_number

//     while (temp_number != 0) {
//         digit = temp_number % 10
//         sum = sum + (digit * digit * digit)
//         temp_number = parseInt(temp_number / 10)
//     }

//     // if (orginal_number == sum) {
//     //     console.log(`The ${orginal_number} number is armstrong number`)

//     // } else {
//     //     console.log(`The ${orginal_number} number is not armstrong number`)
//     // }

//     if(orginal_number == sum){
//         return true
//     }else{
//         return false
//     }

// }

// let i = 0

// while(i <= 1000){
//     if(check_armstrong(i)){
//         console.log(i)
//     }
//     i++
// }

// wap using js to reverse a number and check if it is palindrome

// reverse

// 123

// function check_palindrome(input) {

//     let number = input
//     let org_number = number
//     let digit = null
//     let reverse = 0

//     // rev = rev * 10 + d

//     // = 0 * 10 + 3 = 3

//     // = 3 * 10 + 2 = 32

//     // = 32 * 10 + 1 = 321

//     while (number != 0) {

//         digit = number % 10

//         reverse = reverse * 10 + digit

//         number = parseInt(number / 10)
//     }

//     if (reverse == org_number) {
//         console.log(`${org_number} it is palindrome `)
//     } else {
//         console.log(`${org_number} it is not a palindrome `)
//     }

// }

// check_palindrome(123)
// check_palindrome(312)
// check_palindrome(121)

// factorial 5! = 5 * 4 * 3 * 2 * 1 = 120

// function find_factorial(number) {

//     let org_number = number
//     let factorial = 1

//     while(org_number != 0){
//         value = org_number
//         factorial = factorial * value
//         org_number--
//     }

//     console.log(`factorial of ${number} is ${factorial} !`)

// }

// find_factorial(5)
// find_factorial(2)
// find_factorial(9)

// array itration
// to access each element from the array

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let odd_numbers = []
// let even_numbers = []

// let i = 0

// while (i < data.length) {

//     if (data[i] % 2 == 0) {
//         even_numbers.push(data[i])
//     }else{
//         odd_numbers.push(data[i])
//     }
//     i++
// }

// console.log(odd_numbers)
// console.log(even_numbers)


// do while, for loop

// do{

// }while(condition)

// it will run atleast 1 even if condition is false 

// let i = 100

// do {
//     console.log(i)
//     i++
// } while (i < 50)

// for loop syntax

// for(initize;condition;updation){
// statement
// }

// for(let i = 0 ; i < 1000 ; i++){
//    i % 2 == 0 ? console.log(i) : null
// }

// 0, 1, 1 , 2 ,3

// let n1 = 0
// let n2 = 1

// let limit = 10

// while(){
//     entry = n1 + n2
//     console.log(entry)
//     n1 = n2
//     n2 = entry
// }