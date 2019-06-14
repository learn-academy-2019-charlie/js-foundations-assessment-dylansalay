# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

Primitive: numbers, string, boolean, null, undefined
Non-Primitive: Symbols and Objects

2. What's the difference between =, ==, and === in JavaScript?

The = is used to assign a value to a variable. 
The == performs type coercion and tests for loose equality. This means that the two values are only compared after attempting to convert them to a common type.
The === tests for strict equality. This means that both type and value are the same. 

3. What is the difference between an array's index and length?


The length of an array refers to the number of elements in the array. An arrays index refers to a specific element in the array. Arrays are zero indexed so the first element in the array is at index 0. 


4. What are the three parts of a for loop?

The three parts of a for loop include:
The intial expression. This is the starting point for our loop.
The condition we wish to evaluate.
The increment expression.

5. What is a function's declaration, argument, and call?

The declaration includes the function name, return type, and parameters.
The functions argument(s) are placeholders for whatever we wish to pass into the function.
The function call allows for a function to be utilized in another object or code block.  

6. What are the three main steps in saving work to github?

git add .
git commit -m"details"
git push

7. What is the terminal command to move directories?

mv

8. Do you have a suggestion for a Check In question?

Are there any topics the we (the class) are having a hard time grasping and wish to go back over?

9. What was your favorite topic this week?

I enjoyed learning filter and map. 

10. What was your "A-ha!" moment this week?

I felt like react made no sense on Thursday, but things started to come together on Friday working through the Color Box Challenge.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
When I plugged this into my js file, the console returned undefined. 

2. What is JSON? How does it relate to javascript objects?

JavaScript Object Notation. JSON converts JavaScript objects into texts so that it can be converted and sent to the server.

3. Describe a closure, what is it good for and how do you recognize one?

A closure is used to give an inner function access to an outer function's scope. 
