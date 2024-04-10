console.log("Hello I am first")
console.log("Hello I am second")

setTimeout(() => {
console.log("Hello I am third")  // it will run at last because of the asynchrous nature of the javascipt
    
}, 2000);

console.log("Hello I am fourth") 

const fn = () => {
  console.log("Nothing bro chill");
}


const callback = (arg) => {
  console.log(arg)
  fn()
}


const loadscript = (scr,callback) => {
  let sc = document.createElement("scipt")
  sc.scr = scr;
  sc.onload = callback("Dipak",fn)
  document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

