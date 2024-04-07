let a = [1,2,3,4,7,9]

// to print this array 
//1. for loop
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

// 2. for each loop
a.forEach((element,index,a) => {
    console.log(element,index, a)
})

//3. for in loop
let obj ={
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
}

// 4. for of loops
let k = [100,200,300]
for (const iterator of k) {
    console.log(iterator)
}