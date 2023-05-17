// Homework Week 7 Day 2

// JavaScript OOP and Objects, Switch Cases, Async and Promises 

// QUESTION 1 =============================================================================================
// Use the array of shop items provided and present the information in the following format:

// ```
// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
// Category: shoes
// =======================================
// Name: 	 Adidas NMD R1
// Price: 	 128
// About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
// Category: shoes
// =======================================
// Name: 	 Gucci Oversize T-shirt with Interlocking G
// Price: 	 580
// About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
// Category: shirts
// =======================================
// Name: 	 Nike Sportswear Club
// Price: 	 18.97
// About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
// Category: shirts
// =======================================
// Name: 	 Spanx Flare Jeans, Vintage Indigo
// Price: 	 148
// About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
// Category: pants
// =======================================
// Name: 	 Bonobos Premium Stretch Jeans
// Price: 	 69
// About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
// Category: pants
// ```

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

// ANSWER 1 =============================================================================================

const formatObject = _arr => {
    result = ``
    for ( let _dict in _arr) {
        let item = _arr[_dict]
        result += `=======================================\n`
        result += `Name:\t  ${item.name}\n`
        result += `Price:\t  ${item.price}\n`
        result += `About:\t  ${item.desc}\n`
        result += `Category: ${item.category.charAt(0).toUpperCase()}${item.category.slice(1)}\n`
    }
    return result
}

console.log(formatObject(shopItems))

// QUESTION 2 =============================================================================================
// Write a function that parses through the below object and displays all of their favorite food dishes as shown:

// ```
// pizza contains:
// Deep Dish
// South Side Thin Crust
// tacos contains:
// Anything not from Taco bell
// burgers contains:
// Portillos Burgers
// ice_cream contains:
// Chocolate
// Vanilla
// Oreo
// shakes contains:
// oberwise contains:
// Chocolate
// dunkin contains:
// Vanilla
// culvers contains:
// All of them
// mcDonalds contains:
// Sham-rock-shake
// cupids_candies contains:
// Chocolate Malt
// ```

// Note: The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object.

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// ANSWER 2 =============================================================================================

const parseFaves = fave => {
    switch (fave) {
        case "pizza":
            console.log([ "Deep Dish", "South Side Thin Crust" ])
            break
        case "tacos":
            console.log("Anything not from Taco bell")
            break
        case "burgers":
            console.log("Portillos Burgers")
            break
        case "ice_cream":
            console.log([ "Chocolate", "Vanilla", "Oreo" ])
            break
        case "shakes":
            console.log('')
        case "oberwise":
            console.log("Chocolate")
            break
        case "dunkin":
            console.log("Vanilla")
            break
        case "culvers":
            console.log("All of them")
            break
        case "mcdDonalds":
            console.log("Sham-rock-shake")
            break
        case "cupids_candies":
            console.log("Chocolate Malt")
            break
    }
}
// QUESTION 3 =============================================================================================

// Create a Promised based function that will check a string to determine if it's length is greater than 10. If the length is greater than 10 then resolve it and console log "Big word". If the length of the string is less than 10 then reject it and console log "Small String."

// ANSWER 3 =============================================================================================

const promiseFunction = str => {
    return new Promise((res, rej) => {
        if (str.length > 10) {
            res(true)
            console.log("Big word")
        } else {
            rej(false)
            console.log("Small String")
        }
    })
}

// QUESTION 4 =============================================================================================

// Create a base class of GameMember and 2 children classes of Dealer, Player

// both dealer and player have:

// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

// hit() : ability to add  a random number [1-13] to their hand

// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

// When a Player hits they can hit as long as their total is under 21

// Use the randomNumber function provided below to gernerate a random number 1-12

// ANSWER 5 =============================================================================================

class GameMember {
    constructor() {
        this.hand = []
        this.dealer = undefined
        this.deal()
    }
    static deal() {
        this.hand.push(this.randomNumber())
        this.hand.push(this.randomNumber())
    }
    static randomNumber = () => Math.floor(Math.random() * 13) + 1
    static isDealer = _input => _input ? this.hand.reduce((x,y)=>x+y) < 17 : this.hand.reduce((x,y)=>x+y) < 21
    hit = () => isDealer(this.dealer) ? this.hand.push(this.randomNumber) : ''
}

class Dealer extends GameMember {
    constructor(dealer=True) {
        super(hand, dealer)
    }
    hit = () => super.hit()
}

class Player extends GameMember {
    constructor(dealer=False) {
        super(hand, dealer)
    }
    hit = () => super.hit()
}

// QUESTION 5 =============================================================================================

// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed

// ANSWER 5 =============================================================================================

// 1: Hamming Distance (6kyu) - https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

const hamming = (a, b) => {
    c = [...a]
    d = [...b]
    let count = 0
    for (let i = 0; i < c.length; i++) {
        if (c[i] !== d[i]) {
            count++
        }
    }
    return count
}

// 2: Directions Reduction (5kyu) - https://www.codewars.com/kata/550f22f4d758534c1100025a

const dirReduc = arr => {
    const oppositeDirections = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    }
    const directionStack = []
    for (let direction of arr) {
        if (!directionStack.length) {
          if (directionStack[directionStack.length - 1] == oppositeDirections[direction]) {
            directionStack.pop()
          }
        } else {
            directionStack.push(direction)
        }
    }
    return directionStack
}

// 3: Find the index of the second occurrence of a letter in a string (7kyu) - https://www.codewars.com/kata/63f96036b15a210058300ca9

const secondSymbol = (s, symbol) => {
    const i_arr = []
    for ( let [ idx, sym ] of [...s].entries() ) {
        if ( sym == symbol ) {
            i_arr.push(idx)
        }
    }
    return i_arr.length == 0 || i_arr.length < 2 ? -1 : i_arr[1]
}
