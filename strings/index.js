// Declaring a string
// Strings are immutable , hence once created cannot be deleted

let a = "Dipak";
// to print letter of Dipak one by one
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// console.log(a[5]) =>  Output=undefined
// To  calculate length of string Dipak
console.log(a.length)
let my_name = "Dipak";
let friend_name = "Rahul"
console.log("My name is "+my_name+" and my friend name is "+friend_name)
// Insted of ^ this statement we will use template literals
console.log(`My name is ${my_name} and my friend name is ${friend_name}`)

// Escape sequence characters
// console.log("My name is Roh"an ") it will produce an error in Roh"an name there
console.log("My name is Roh\"an ")
console.log("My name is Roh\nan ")
console.log("My name is Roh\tan ")

// String functions
let d = "Rahul"
console.log(d.toUpperCase())
console.log(d.toLowerCase())
//slicing function
console.log(d.slice(1,3))

console.log(d.replace("Ra","Pa")) // Output: Pahul
console.log(d.concat(a))  // Output : RahulDipak
// to remove white space we use trin() function

let k = "  RAjiv"
console.log(k.trim())

