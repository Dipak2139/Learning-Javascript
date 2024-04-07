let arr = [1,10,20,39]

console.log(arr)
console.log(arr[0]) // output= 1
console.log(arr.length) // 4
// Arrays are mutable it can be changed for example

arr[2]= 400;
console.log(arr)     // [1,10,400,39]
console.log(arr[2])  // 400

// Array methods
//1. convert to string
let arr2 = [1,2,4,5,6]
let ans = arr2.toString();
console.log(ans); // 1,2,4,5,6

//2. join method

console.log(arr.join(" and ")) // 1 and 2 and 4 and 5  and 6

//3. pop() and push method

console.log(arr2.pop()) // removes the last element 6
console.log(arr2)      // [1,2,4,5]
console.log(arr2.push("Dipak"))
console.log(arr2)

// shift and unshift

console.log(arr2.shift())  // it pops the 1st element in the array
console.log(arr2)  // [2,4,5,'Dipak']

console.log(arr2.unshift("Rahul")) // it push elements inn the 1st index
console.log(arr2)

// delete method 
console.log(delete arr2[4])
console.log(arr2)

//concat method
let a1=[1,2,3];
let a2 = [4,5]
let a3 = [6,7,8]

console.log(a1.concat(a2,a3))

// splice method is used to delete element from a specific index to another index for example

let numbers = [1,3,4,6,7]
// console.log(numbers.splice(1,3))  // [3,4,6]
// console.log(numbers)             // [1,7]
// to add number at those index where we have deleted elements
console.log(numbers.splice(1,3,100,200))  // [3,4,6]
console.log(numbers)                      // [1,100,200,7]

