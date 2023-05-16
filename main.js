console.log('Day 2')

// Flow Control
// Syntax for Conditional
// if (boolean) {action} else {action}

// Working with Dates 

const today = new Date()
// server dayOfweek, month, year, time, timezone
// console.log(today)
// console.log(today.toString())
// console.log(today.getMonth())
// console.log(today.getDay())
// console.log(today.getYear())

// Switch Case

// switch (day) {
//     case 0:
//         console.log("Time to prepare for Monday's class")
//     case 1:
//         console.log("Weekend is over, glad I finished my homework")
//     case 2:
//         console.log("Time to prepare for Monday's class")
//     case 3:
//         console.log("Weekend is over, glad I finished my homework")
//     case 4:
//         console.log("Time to prepare for Monday's class")
//     case 5:
//         console.log("Weekend is over, glad I finished my homework")
//     case 6:
//         console.log("Time to prepare for Monday's class")
// }

// console.log(today.getMonth())

// switch (today.getMonth()) {
//     case 0:
//         console.log("Jan")
//     case 1:
//         console.log("Feb")
//     case 2:
//         console.log("Mar")
//     case 3:
//         console.log("Apr")
//     case 4:
//         console.log("May")
//         break
//     case 5:
//         console.log("Weekend is over, glad I finished my homework")
//     case 6:
//         console.log("Time to prepare for Monday's class")
// }

// OBJECTS

const instructor = {
    firstName: 'Sean',
    age: 25,
    sweetRide: 'honda scooter',
    favoriteFramework: 'NextJS'
}

console.log(instructor['firstName'])
console.log(instructor.firstName)
console.table(instructor)

const { firstName, age, sweetRide } = instructor

console.log(firstName)

function logAttr({ firstName, age }) {
    console.log(age)
}

logAttr(instructor)

function describePerson(height, {firstName, favoriteFramework, age}) {
    console.log(`${firstName} is ${height} and ${age} who loves ${favoriteFramework}`)
}

describePerson('6\'3', instructor)

// spread operator & functionality of objects

console.log({} ? "empty object true" : "false") 

console.log([] ? "empty array true" : "false")

console.log( {a:1,b:2} == {a:1,b:2})

instructor.change = true

const shallowCopy = {...instructor}

console.table(shallowCopy)
delete shallowCopy.change

console.table(shallowCopy)
console.table(instructor)

const object1 = {
    id: 1, name: 'Item A', price: 9.99
}

const object2 = {
    desc: 'Describing Cool Object', price: 5
}

const newObject = {...object1, ...object2}

console.table(newObject)

function descOnbj({id, name, ...remaining}) {
    console.log(id)
    console.log(name)
    console.table(remaining)
    console.log(remaining)
}

descOnbj(newObject)

// Optional Chainings with ?

console.log(newObject.notexist?.anotherkey)

const memberOne = {
    name: 'Joe', friends: ['Bob', 'Jim', 'Jack', 'Jill']
}

const memberTwo = {
    name: 'Jordan',
}

memberOne.friends.push('Dave')
memberTwo.friends?.push('Dave')

console.table(memberTwo)
console.table(memberOne)

eventOne = {
    name: 'Late Night Event', startingTime: 10
}

eventTwo = {
    name: 'Midnight', startingTime: 0
}

eventThree = {
    name: 'Midnight', startingTime: null
}

console.log(`${eventOne} starts at`, eventOne.startingTime || '12')

console.log(`${eventTwo} starts at`, eventTwo.startingTime || '12')

// nullish coalescing factor: null or undefined

console.log(`${eventTwo} starts at`, eventTwo.startingTime ?? '12')

console.log(`${eventTwo} starts at`, eventTwo.startingTime ?? '12')


// Checking empty object

const blank = {1:1}
const blank_arr = []

if (Object.keys(blank).length) {
    console.table(blank)
}

// Getting Keys as an array of an object

const instructorKeys = Object.keys(instructor)
console.log(instructorKeys)

// Getting Values as an array of an object


const instructorVals = Object.values(instructor)
console.log(instructorVals)

// For Of

for (let k of Object.keys(instructor)) {
    console.log(instructor[k])
}
for (let v of Object.values(instructor)) {
    console.log(v)
}

// For In

for (let k in instructor) {
    console.log(instructor[k])
}

// .entries()
// .enumerate() on Python

for (let e of [12, 3, 4, 5].entries()) {
    console.log(e)
}

for (let [i, item] of [12, 3, 4, 5].entries()) {
    console.log(`${item} at index ${i}`)
}

const comedian = {
    firstName: 'Chris',
    lastName: 'Rock',
    fullName: function() {
        return `{this.firstName} {this.lastName}`
    },
    fullName2() {return `{this.firstName} {this.lastName}`},
    fullName3: () => `{this.firstName} {this.lastName}`
}

console.log(typeof comedian)

console.log(instructor instanceof Object)

class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    describeHuman() {
        return `${this.name} is ${this.age} years old`
    }
}

const human = new Human("Dylan", 100)

console.log(human.name)
console.log(human.describeHuman())
console.log(human.name)

class Child extends Human {
    constructor(name, age, school) {
        super(name, age)
        this.school=school
    }
    describeHuman() {
        return `${super.describeHuman()} and goes to ${this.school}`
    }
}

// console.log('Before Timeout')
// setTimeout(() => console.log('During Timeout'), 2000)
// console.log('After Timeout')

function func1() {
    func2()
}
function func2() {
    func3()
}
function func3() {
    console.log('Hello')
}

setTimeout(() => console.log('In Timeout'), 1000)
func1()

// Promises

const isEven = number => {
    return new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            setTimeout(() => resolve(true), 1000)
            return true
        } else {
            reject(false)
        }
    })
} 

console.log(isEven(10))

isEven(13)
    .then(result => console.log('is an even number', result))
    .catch(error => console.log('Odd number'))

// Asyncronous

async function apiEx() {
    await isEven(12)
    console.log(`${a} Need to data to run`)
}