<h2>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h2>

ANS. = getElementById means getting specific element by specific id name and getElementsByClassName means getting all elements with same class name, it gives html collection.  By querySelector we can get all html items and tags, but only the first item / tag. By querySelectorAll we get all items with same class name and tags, it gives nodelist.


<h2>2. How do you create and insert a new element into the DOM?</h2>

ANS. = To creat a new element we use ".creatElement()" and by using 
".append() / .appendChild()" we insert the new element into the DOM.


<h2>3. What is Event Bubbling? And how does it work?</h2>

ANS. = Event bubbling means continuously getting upward from a child element to parent. whenever a chid element get triggered , it affects childs parent and then childs parents parent and it goes until it finds the Document.


<h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>

ANS. = Event Delegation is a easier way to add "eventListener". It is useful because by Event Delegation we add eventListener to a parent element by not adding eventListener to all child element.


<h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>

ANS. = "stopPropagation()" stops event bubbleing, means it stops continuous going from a chils element to parent element. And "preventDefault()" stops browsers default working system, as example when we use "preventDefault()" on a link, the link stops working.