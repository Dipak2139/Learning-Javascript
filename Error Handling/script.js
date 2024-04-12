// Try catch and Error

let a = prompt("Enter first number")
let b = prompt("Enter second number")

// if the user give string value than we want to throw an error therefore

if(isNaN(a) || isNaN(b)){
    throw SyntaxError ("Sorry this is not a number")
}

let sum = parseInt(a) + parseInt(b)
// console.log("The Sum is ",sum)

// try and catch 

// try {
//     console.log("The sum is:",sum * x)
// } catch (error) {           
//     console.log("Vai Error Agaya")
    
// }

// finally usage

// for example if we wrap try and catch in a function and want that our finally should execute even after one condition return any true or false value than we will use finally

function main(){
    let x = 1;
    try {
        console.log("The sum is:",sum * x)
        return true
    } catch (error) {           
        console.log("Vai Error Agaya")
        return false
        
    }
    finally{
        console.log("It function has return one value... so, please close the connection")
    }
}

main()

