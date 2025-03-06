//DOm elements

// add element to page


//set veriable to elemt that we want to add to
const body = document.body


// append() & append child ()
// appendChild() will only work with adding to element

// body.appendChild("Hi") --> this does not work
body.append("Hi bob") // --> add hi bob to the body text node

// append lets you do multiple lines and add string

// create element
const div = document.createElement('div')
console.log(div)
body.appendChild(div)

// add text to div

// op 1
div.innerText = "hello chell"
console.log(div)

// op 2
div.textContent = "why chell"
console.log(div)

// modify html as a whole
div.innerText = "<strong>HI<strong>" // --> does not show up bolded
div.innerHTML = "<strong>HI<strong>" // --> shows up bolded

// another bold method
const strong = document.createElement("strong")
strong.innerText = " this is also bold"
console.log(strong)
div.append(strong) // --> adds this is strong to the page so it can show up to the user

// Target by class or element
const span = document.querySelector('span') // --> attaches to the first element
console.log(span)

const spans = document.querySelectorAll('span') // --> pulls all elements of span
console.log(spans)

const spanBi = document.querySelector('#bye') // --> you have to have the # so js knows you are looking for an id
console.log(spanBi)

const spanHi = document.querySelector('#hi')
console.log(spanHi)

// remove element from structure
spanBi.remove() // removeChild also works

// Bring the structure back
document.body.append(spanBi) // --> adds to the end
//spanHi.append(spanBi) --> adds spanBi within spanHi

const myList = document.getElementById('myList')
console.log(myList)

const cssListItem = myList.children[1] // grabs by list index
console.log(cssListItem)

const newListElement = document.createElement('li')
newListElement.textContent = "Python"
console.log(newListElement)

// .replaceChild() syntax = .replaceChild(newCHild, oldChild)
myList.replaceChild(newListElement, cssListItem)

// modify element styling

console.log(spanHi.getAttribute("id")) // --> show id
console.log(spanHi.id) // --> Works the same as above

// change Id
spanHi.setAttribute("id","newID") // --> cannot put console.log() and setAttribute together
console.log(spanHi.getAttribute("id"))

// remove Id
console.log(` The value of spanBi id is: ${spanBi.id}`)
spanBi.removeAttribute('id') // --> removes the spanBi id
console.log(` The value of spanBi id is: ${spanBi.id}`)



// Mr. Gardner practice Html code