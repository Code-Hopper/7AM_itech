// js promise

// let myPromise = new Promise((resolved, rejected) => {

//     let x = 40

//     if (x < 50) {
//         resolved("this promise is resolved !")
//     } else {
//         rejected("this promise is rejected !")
//     }

// })

// myPromise.then(value => {
//     console.log("my promise is resolved ", value)
// }).then(error => {
//     console.log("my promise is rejected ", error)
// }).catch(err => {
//     console.error("some error in promise !", err)
// })

// async programs
// built in 
// setInterval(()=>{},time) , setTimeout(()=>{},time)
// 1000ms - 1s

console.log('this is log 1')

let interval1 = setInterval(() => {
    console.log("this statement will repeat in every 2s")
}, 1000)

// document.getElementById("btn").onclick = () => { clearInterval(interval1) }

console.log('this is log 2')


console.log('this is log 3')


console.log('this is log 4')

setTimeout(() => {
    console.log("this function has timeout of 3s !")
}, 3000)

async function promise1() {
    let newPromise = new Promise((resolved, rejected) => {
        setTimeout(
            () => { rejected("my promise is resolved"), 2000 }
        )
    })

    return newPromise
}

promise1().then((result) => {
    console.log("promise resolved !", result)
}).catch((err) => {
    console.error("promise rejected !", err)
});