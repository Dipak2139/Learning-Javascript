// console.log("Dipak Das")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="red"

// document.getElementById("redbox").style.backgroundColor="red"

// we can do the same thing with query selector
// document.querySelector(".box").style.backgroundColor="yellow"

// if we wanted to colot all boxes using query selctor we use
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="lightblue"
})