async function sleep (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// This function will imediately invoked there called in Javascript (IIFE => Immediately Invoked Function Expression) 
// (async function main (){
//     let a = await sleep();
//     console.log(a)
//     let b = await sleep();
//     console.log(b)

// })()

function sum(a,b,c){
    return a+b+c
}

(async function main (){
    console.log(a1) // hosting concepts


    // Destructuring concepts
    // let x,y = [1,4] it will give undefined value therefore we  have to make the variable also array

    // let [x,y] = [1,4] // it will give outptut 1 and 4.
    // console.log(x,y)

    // If there are more elements than the variable created than we have use ...res(any name we can use)

    // let [k,y,...rest] = [1,2,3,6,7,8,9]
    // console.log(k,y,rest)

    // We can also destructure objects

    let obj = {
        a: 1,
        b:2,
        c:4
    }

    let {a,c} = obj;
    console.log(a,c)

    // Spread Operator Concepts
    let arr = [3,5,6];
    console.log(sum(arr[0],arr[1],arr[2]));
    // there is a more better way to send values to sum function
    console.log(sum(...arr)) //...arr is a spread operator it opens the array values//

    // Hosting concepts
    // hosting will happens to var not works on let or const

    var a1 = 6; // if we want to print the a1 value in top of the function . It will host the var a1 at top of the function and it will give undefined value

})()


// Spread synta