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

function parseFaves(fave) {
    for ( let key in fave ) {
        if (Array.isArray(fave[key])) {
            console.log(`${key} contains:`)
            for ( let obj of fave[key] ) {
                if ( typeof obj === "object" ) {
                    parseFaves(obj)
                } else {
                console.log(`\t${obj}`)
                }
            }
        } else if ( typeof fave[key] === "object" ) {
            parseFaves(obj)
        } else {
            console.log(`${key} contains:`)
            console.log(`\t${fave[key]}`)
        }
    }
}

parseFaves(hwPerson)