const main = document.getElementById("main")
console.log(main)
main.textContent = "new me";
main.style.backgroundColor = "yellow";

function changeColor(element,color){
    element.style.backgroundColor = color;
}

changeColor(main, "pink")

function simpleChange(element){
    element.style.backgroundColor ="pink";
}

const parents = Array.from(document.getElementsByClassName("parent"))
console.log(parents)

// parent.forEach(changeColor(parent,"blue")) --> will not work
parents.forEach(element => changeColor(element,"green"))
console.log(parents)

const grandparent = document.querySelector(".grandparent") // you grab the biggest one and everything comes
console.log(grandparent)

changeColor(grandparent,"#451")

// Create a array for parents 
const parent2 = Array.from(grandparent.children)
console.log(parent2)

parent2.forEach(element => changeColor(element, "purple")) // affects the children bc 

// grab first parent from the parents array

const parentOne = parent2[0]; // effects the value only
console.log(parentOne)

changeColor(parentOne, "blue")

// new array of p1 children
const p1Children = Array.from(parentOne.children)
console.log(p1Children)

changeColor(p1Children[0],"pink")

// introduce querySelectorAll()
const grandChildren = grandparent.querySelectorAll(".child") // automatically a nodeList
console.log(grandChildren)

// change all children 
grandChildren.forEach(element => changeColor(element, "white"))

// change a single child
const childOne = p1Children[0]
console.log(p1Children)
changeColor(childOne,"red")

// select a parent from a child
const parent = childOne.parentElement;
console.log(parent)
changeColor(parent, "orange")

const grandpa = parent.parentElement
console.log(grandpa)
changeColor(grandpa, "lightblue")

// skip here parent, go from child to grandpa
const grandma = childOne.closest(".grandparent")
console.log(grandma)
changeColor(grandma, "maroon")

// next element siblings
const childTwo = childOne.nextElementSibling
console.log(childTwo)
changeColor(childTwo, "teal")