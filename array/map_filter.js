// learning map and filter function
let arr = [1,6,9,11,12]
// create a new array which will have the square of newArr
 let newArr = arr.map((element)=>{
    return element**2
 })
// 
console.log(newArr)

// filter function
const greaterthanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterthanSeven));

// reduce function to add or multiply every element of an array
let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))

// to convert string into array we use
newstring=Array.from("Dipak")
console.log(newstring)