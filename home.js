///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/*
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says:
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
greetUser = (userName) => `Welcome back, ${userName}`

console.log(greetUser('Lord Viceroy of the Admiralty'))



//////////////////PROBLEM 2////////////////////
/*
    Below is an array of zip codes that are in
    the restaurant's delivery zone.

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not,
    return a string letting them know that.

    For example:
    canWeDeliver(84606)
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205)
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE
const canWeDeliver = (zipCode) => {
    if(deliveryAreaZipCodes.includes(zipCode)){
        return `You are eligible for delivery`
    }else {
        return `Sorry, you are not eligible for delivery`
    }
}

console.log(canWeDeliver(85205))

// const canWeDeliverOne = (zipCode) => {
//     let inZone = false

//     deliveryAreaZipCodes.forEach((ele) =>{
//         if(zipCode === ele){
//             inZone = true
//         }
//     })
// }

/*
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method.
    Look it up on MDN if you're not sure how to use
    it.

    If you already used the `includes` method,
    write a new function using some sort of
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

function canWeDeliverTwo(zipCode){
    for(i=0; i<deliveryAreaZipCodes.length; i++){
        if(zipCode===deliveryAreaZipCodes[i]){
            return "Yes we can deliver"
        }
    }return "No way Jose"
}

// function canWeDeliverTwo(zipCode) {
//     if(deliveryAreaZipCodes.indexOf(zipCode) !== -1){
//         console.log(`Yes`)
//     }else {
//         console.log(`No`)
//     }
// }
console.log(canWeDeliverTwo(85206))

//tried below first, could not figure out on my own so found a new method online used above
// function canWeDeliverTwo(zipCode) {
//     for(i=0; i<deliveryAreaZipCodes.length; i++){
//         if(deliveryAreaZipCodes[i]===zipCode){
//             return true
//         }
//     }if(canWeDeliverTwo===true){
//         console.log(`Yes`)
//     }else {
//         console.log(`No`)
//     }
// }
//canWeDeliverTwo(85204)

// function canWeDeliverTwo(zipCode) {
//     deliveryAreaZipCodes.forEach(function(element, i){
//         return zipCode {
// }

//     for(i=0; i<deliveryAreaZipCodes.length; i++){
//         if(deliveryAreaZipCodes[i] === zipcode){
//             return `You are eligible for delivery`
//         }else {
//             return `Sorry, you are not eligible for delivery`
//         }
//     }console.log(canWeDeliverTwo())
// }


//////////////////PROBLEM 3////////////////////
/*
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently.

    You are going to access the object's properties
    and change some values. Don't edit the array
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!',
        desc: 'Applied to your entire order when you spend $30 or more'
    },
    {
        title: 'Free Kids Meal with 2 Regular Entrees',
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE
deals[0].title=`10% Off!`
//console.log(deals)


/*
    The restaurant is going to continue its
    family deal for another month.

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE
deals[1].desc = deals[1].desc.replace('March', 'April').trim()

console.log (deals)