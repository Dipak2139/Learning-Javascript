console.log("This is Promises");

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        console.log("No random number was not supporting you.")
    }
    else {
        setTimeout(() => {
            console.log("I am done");
            resolve("Dipak")
        }, 3000);
    }
})
let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        console.log("No random number was not supporting you.")
    }
    else {
        setTimeout(() => {
            console.log("I am done 2");
            resolve("Dipak 2")
        }, 1000);
    }
})

// prom1.then((a)=>{
//     console.log(a)
// }).catch((e)=>{
//     console.log(e)
// })

// let p3= Promise.all([prom1,prom2]);
// let p3= Promise.allSettled([prom1,prom2]);
let p3= Promise.resolve([prom1,prom2]);



p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})