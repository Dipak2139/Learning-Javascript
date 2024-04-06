// Creating function by using 'function' keyword

function nice(name){
    console.log("Hi my name is "+name+" and I am very good boy")
    console.log("Hi my name is "+name+" and I am currently studying BCA")
    console.log("Hi my name is "+name+" and I am currently learning JAVASCRIPT")
    console.log("Hi my name is "+name+" and I am a quick learner")
    console.log("Hi my name is "+name+" and I love web development")

}

nice("Dipak")

function sum(a,b){
    let ans = a+b
    console.log("The final output after additon is = ",ans)
}

sum(10,20)

function multiply(a,b,c=1){  // here c=1 is a default parameter
    return a*b*c
}

result = multiply(2,4,1)
console.log("The final output after multiplication is = ",result)

// arrow function =>

const func1 = (x)=>{
    console.log("The value of x is: ",x)
}

func1(10)
func1(20)
func1(30)

