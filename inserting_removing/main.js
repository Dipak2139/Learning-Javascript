// // document.querySelector(".box").innerHTML
// // 'I am box 1'
// // document.querySelector(".container").innerhtml
// // undefined
// // document.querySelector(".container").innerHtml
// // undefined
// // document.querySelector(".container").innerHTML
// // '\n        <div class="box">I am box 1</div>\n    '
// // document.querySelector(".container").innerText
// // 'I am box 1'

// // document.querySelector(".container").outerHTML
// // '<div class="container">\n        <div class="box">I am box 1</div>\n        <div class="box">I am box 1</div>\n\n    </div>'
// // document.querySelector(".container").tagName
// // 'DIV'
// // document.querySelector(".container").nodeName
// // 'DIV'
// // document.querySelector(".container").textContent
// // '\n        I am box 1\n        I am box 1\n\n    '
// // document.querySelector(".container").hidd
// // undefined
// // document.querySelector(".container").hidden
// // false
// // document.querySelector(".container").hidden=true
// // true

// document.querySelector(".box").hasAttribute("style")
// true
// document.querySelector(".box").getAttribute("style")
// 'display: flex;'
// document.querySelector(".box").setAttribute("style","backgroun-color:red")
// undefined
// document.querySelector(".box").setAttribute("style","background-color:red")


// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
// document.querySelector(".box").removeAttributeAttribute("style")
// VM1180:1 Uncaught TypeError: document.querySelector(...).removeAttributeAttribute is not a function
//     at <anonymous>:1:32
// (anonymous) @ VM1180:1
// document.querySelector(".box").removeAttribute("style")
// undefined

// // we can change the content of the page
// document.designMode="on"
// 'on'

// document.querySelector(".box").dataset
// DOMStringMap {created: 'Dipak'}

// // get class name and class list
// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'green', value: 'container red green']0: "container"1: "red"2: "green"length: 3value: "container red green"[[Prototype]]: DOMTokenList
// document.querySelector(".container").className
// 'container red green'