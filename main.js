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