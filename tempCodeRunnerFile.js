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

function parseFaves(fave) {
    for ( let key in fave ) {
        
        if (Array.isArray(fave[key])) {
            console.log(`${key} contains:`)
            for ( const item of fave[key] ) {
                console.log(`\t${item}`)
            }
        } else if (typeof fave[key] == "string") {
            console.log(`${key} contains:`)
            console.log(`\t${fave[key]}`)
        } else {
            console.log(`${key} contains:`)
            parseFaves(fave[key])
        }
    }
}

parseFaves(hwPerson)