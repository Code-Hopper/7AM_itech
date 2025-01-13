// document (html) object model manipulate (properties methods attributes)
console.log(document)

// target the element/s

// by tagname, classname, id & combinator

// document.getElementsByTagName()
// will return a array
// document.getElementsByClassName()
// will return a array
// document.getElementById()
// will return a single element
// document.querySelector()
// will return a single element
// document.querySelectorAll()
// will return a array

let h1s = document.getElementsByTagName("h1")

console.log(h1s[1])