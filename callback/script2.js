// async function dipak(){
//     let Wbweather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("45 degree")
//         }, 2000);
//     })

//     let jaipurweather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("50 degree")
//         }, 4000);
//     })

//     // Wbweather.then(alert)
//     // jaipurweather.then(alert)

//     let wbw = await Wbweather
//     let jaipurw = await jaipurweather

//     return[wbw,jaipurw]

    
// }

// let a = dipak()
// console.log(a)


//let understand again with an example

async function getData(){
    return new Promise((resolve,reject)=>{
        setInterval(() => {
            resolve(450)
        }, 3000);
    })
}

// console.log("Loading modules....")
// console.log("Do something else....")

// console.log("Load data....")
// let data = getData()
// one normal method to make wait a function execute
// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })


// to write a clean code er use async function

async function getData(){
    // Automatically it it get reques
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // this line promises to get the data
    // // .then(response => response.json())
    // // .then(json => console.log(json))
    // let data = await x.json() // this line promise to pass the data
    // console.log(data)
    // return(55)


    // Using post request
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main(){
console.log("Loading modules....")
console.log("Do something else....")

let data = await getData()
console.log(data)

   console.log("process data")

   console.log("task 2")
}

main()
