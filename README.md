**What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

Ans: By getElementById, we can get any element by using the id tag, whereas by getElementsByClassName, we get the elements with its class name.
By querySelector, we get the first match element using CSS selectors, whereas by querySelectorAll, we get all the match elements as a NodeList.

**How do you create and insert a new element into the DOM?**

Ans: create and insert a new element in the DOM:
const newElement = document.createElement("ElementName")  
newElement.innerText = "Hello"  
document.body.appendChild(newElement);
ex: to create a new div,
const newDiv = document.createElement("div") 
newDiv.innerText = "Hello"  
document.body.appendChild(newDiv)

**What is Event Bubbling and how does it work?**

Ans: When we click a child element, the event starts t0 traveling to its parent, to its grandparents, to its great-grandparents, and stops at the topmost element(document). It's called event bubbling.
how it works-
"First, clicking the event start, then it travels to its immediate parent element and continues this process until it reaches its top."

**What is Event Delegation in JavaScript? Why is it useful?**

ans: Adding 1 listener to the parent instead of adding an event listener to many children is called event delegation. Events are handled by event bubbling.
It is useful for better performance, less memory consumption, and cleaner code.

**What is the difference between preventDefault() and stopPropagation() methods?**

ans: PreventDefault() stops the browser’s default action, whereas stopPropagation() stops the event from bubbling up to parent elements.

