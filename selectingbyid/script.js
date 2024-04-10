// console.log("Dipak Das")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="red"

// document.getElementById("redbox").style.backgroundColor="red"

// we can do the same thing with query selector
// document.querySelector(".box").style.backgroundColor="yellow"

// if we wanted to colot all boxes using query selctor we use
    // document.querySelectorAll(".box").forEach(e=>{
    //     e.style.backgroundColor="lightblue"
    // })

    // // Inn the browser
    // document.getElementsByTagName("div")
    // HTMLCollection(7) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, redbox: div#redbox.box]
    // let e = document.getElementsByTagName("div")
    // undefined
    // e[4].mat
    // undefined
    // e[4].matches("#redbox")
    // true
    // e[4].closest("redbox")
    // null
    // e[3].closes("container")
    // VM358:1 Uncaught TypeError: e[3].closes is not a function
    //     at <anonymous>:1:6
    // (anonymous) @ VM358:1
    // e[3].closest("container")
    // null
    // e[3].closest(".container")
    // <div class=​"container">​…​</div>​
    // e[3].closest("html")
    // <html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
    // document.querySelector(".container").contains(e[2])
    // true
    // document.querySelector(".container").contains(e[0])
    // true