///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/
//CODE HERE
const pizza = {
    name: 'Lightyear',
    price: 10,
    category: 'entree',
    popularity: 2,
    rating: 8,
    tags: ['buzz','woody','toy','zurg']
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/
//CODE HERE
console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/
//CODE HERE
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/
//CODE HERE
let {price} = pizza
console.log(price)

/*
    Fourth, and last, destructure the category
    property.
    Print the value of your category variable. 
*/
//CODE HERE
let {category} = pizza
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/
//CODE HERE
// class foodClass {
//     constructor(name, price, category, popularity, rating, tags){
//         this.name = name
//         this.price = price
//         this.category = category
//         this.popularity = popularity
//         this.rating = rating
//         this.tags = tags
//     }
// }
// let burger = new foodClass('Buzz Burger',7,'entree',4,7,['burgers','buns','meat','cheese'])
// let hotDog = new foodClass('Slink',4,'entree',8,5,['dog','slinky','ketchup','wiener'])
// let nachos = new foodClass('Nice Nachos',8,'appetizer',5,6,['chips','salsa','cheese'])
// let iceCream = new foodClass('Space Cream',4,'dessert',3,4,['cold','sweet','chocolate'])

const burger = {
    name: 'Buzz Burger',
    price: 7,
    category: 'entree',
    popularity: 4,
    rating: 7,
    tags: ['burgers','buns','meat','cheese']
}
const hotDog = {
    name: 'Slink',
    price: 4,
    category: 'entree',
    popularity: 8,
    rating: 5,
    tags: ['dog','slinky','ketchup','wiener']
}
const nachos = {
    name: 'Nice Nachos',
    price: 8,
    category: 'appetizer',
    popularity: 5,
    rating: 6,
    tags: ['chips','salsa','cheese']
}
const iceCream = {
    name: 'Space Cream',
    price: 4,
    category: 'dessert',
    popularity: 3,
    rating: 4,
    tags: ['cold','sweet','chocolate']
}

let foodArr = [pizza, burger, hotDog, nachos, iceCream]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
//My code returns all objects, cannot uncover the secret
const result = foodArr.filter(obj => {
    let newArr = []
    for(let tags in obj){
        if(tags.includes('cheese')){
            newArr.push(obj)
        }
    }
    return newArr
})
console.log(result)

// const result = foodArr.filter(obj => {
//     if(obj.tags(foodArr)){
//         return obj
//     }
// })
// console.log(result)

// const result = (arr, tag, callback) => {
//     arr.forEach((element) => {
//         if(element.tags.includes('cheese')){
//             return element
//         }
//     })
// }

// const result = foodArr.filter(obj(tags, 'cheese') => {
//     let newArr = []
//     newArr.push(obj)
//     return newArr
// })
// console.log(result)

// foodArr.forEach(food => {
//     for(let tags.includes('cheese') in food) {
//         console.log(food)
//     }
// })
//foodArr.forEach(foodClass)
// const filteredFood = foodArr.filter(/* CALLBACK HERE */)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function filterByProperty(property,number,type) {
    let filtArr= []
    foodArr.filter()
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE