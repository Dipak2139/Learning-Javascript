// Types of Operators
// 1. Arithmetic Operators

// let a = 20;
// let b = 10;

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b) // It returns the remainder
// console.log(a** 2) // Output = 400
// console.log(a ++) // Increment operator
// console.log(a) // Output = 21

// console.log(a --) // Decrement Operator
// console.log(a) //Output = 20

// // 2. Assignment Operators
// let c = 20
// let d=10
// d=c
// console.log(d)   // Output = 20
// d+=c // b= b+a
// console.log(d)  // Output = 40
// d-=c            // d= d -c
// console.log(d)  // Output = 20
// // hence there are many assignment operators
// // > d*=c
// // > d/=c
// // > d%=c

// 3. Comparison Operators

let e = 20
let f = 20

if (e==f){
    console.log("Same Same but different")
}
else{
    console.log("Not same")
}
//Output = Same Same but different

 f=10 
if(e!=f){
    console.log("Condition true")
}
else{
    console.log("Condition not true")

}
//Output =  condition true
// if we want to check the value and its type we will use '==='

f=20
g='20'
if(f===g){
    console.log("Same SAme")
}
else{
    console.log("Not same")
}
// Not same
/*
 there are many more comparison operators
 > !== not equal value or not equal type
 > < & >  greater or less than
 > <= & >= greater than equal to or less than equal to
 > ? ternary opertor
*/

// 4. Logical operators

let h=20
let i = 30

if(h==20 && i==30){ //&&= if both conditon are true than it will give true value
    console.log("Condition true")
}
else{
    console.log("Conndition not true")
}

if (h==20 || i!=30){ // ||= if one conditon is true than it will give true value
    console.log("Condition true")
}
else{
    console.log("Conndition not true")
}


// else if condition statements

let age = 18

if(age<18){
    console.log("Learn Driving")
}
else if(age==18){
    console.log("You can get your learner driver license")
}
else{
    console.log("You are totally ready to get your final driving license")

}
