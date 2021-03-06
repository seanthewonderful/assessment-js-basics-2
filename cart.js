///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
let initialValue = 0

// const summedPrice = cart.reduce(() => {
//     return price.cart[0] + price.cart[1] + price.cart[2]
// })
// console.log(summedPrice())

let summedPrice = cart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price
}, initialValue)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let newTotal = cartTotal + (cartTotal*tax)
    let couponTotal = newTotal - couponValue
    return couponTotal
}
console.log(calcFinalPrice(10,2,0.08))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
   Customer Object for cart page includes: Name, Address, Zip Code, Phone, Email. These seem like basic items needed for an online checkout. 
   customer.name is a string because it must be for text
   customer.address is also a string, though the customer.zipCode is a number so that I can verify delivery information without having to extract it from the address string.
   customer.phone is a number, although in an advanced scenario I would have to either specify that they enter as such, otherwise it could be taken as a string and extract the number, since most people may type the - between number sets.
   customer.email is a string because it must be for text. I could also program a verificatin method to make sure the email has valid characters '@' and '.'
   
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Sean',
    address: '212 Happy St. Lehi UT',
    zipCode: 84044,
    phone: 9495559999,
    email: 'grunt@umpire.com'
}
