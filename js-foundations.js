// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
   const div3 = (num) => {
       if(num % 3 === 0){
           console.log(num + ' is divisible by three')
       } else {
           console.log(num + ' is not divisible by three')
       }
    }
    div3(0)
    div3(10)
    
    
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
    const helloMe = {
        firstName: "Dylan",
        lastName: "Salay",
        favoriteColor: "Blue",
        favoriteFood: "Sushi"
    }
        const aboutMe = () => { 
            return 'My name is ' + helloMe.firstName + ' ' + helloMe.lastName+'. My favorite color is ' + helloMe.favoriteColor + ' and my favorite food is ' + helloMe.favoriteFood + '.'
        }
        
    console.log(aboutMe())
    
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

let grocArr = ['bananas','crackers','butter','chicken','bread']
    const oddArr = (arr) => {
        const newArr = arr.filter((value,index) => index%2 === 0)
        return newArr
    }
    console.log(oddArr(grocArr).join(', '));

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

const alphabetSoup = (str) => {
    return str.toLowerCase().split('').sort().join('').trim()
}

console.log(alphabetSoup('Coding Is Really Really Fun'))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

const animalNums = (arr1, arr2) => {
    let newArr = []
    for(let i=0; i<nums.length;i++){
        // for(let j=0; j<nouns.length;j++){
        newArr.push(`${arr1[i]} ${arr2[i]}`)
    }
    return newArr
}
console.log(animalNums(nums, nouns).join(', '))

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
let numsArr = [3,6,8,2,11]
let NewArr2 = []
const mult5 = (arr) => { 
    return arr.map(value => value *5)
}

console.log(mult5(numsArr))
