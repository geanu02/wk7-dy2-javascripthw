const secondSymbol = (s, symbol) => {
    const i_arr = []
    for ( let [ idx, sym ] of [...s].entries() ) {
        if ( sym == symbol ) {
            i_arr.push(idx)
        }
    }
    return i_arr.length == 0 || i_arr.length < 2 ? -1 : i_arr[1]
}

console.log(secondSymbol('Hello world!!!','l'))