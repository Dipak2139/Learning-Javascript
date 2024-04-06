// Types of loops 
// 1. for loop

let a =10

for(let i=1;i<=a;i++){
    console.log(i)
}

// 2. for in loops

let obj = {
    'name':'Dipak Das',
    'age':21,
    'course':'BCA'
}

for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
}

// for of loop

for (const iterator of "DIPAK") {
    console.log(iterator)
}

// while loop

let i = 1;
while(i<=10){
    console.log(i)
    i++
}

// do while loop

let d = 2
do {
    console.log(d)
    d++
} while (d<=5);