"use strict"

function *generator() {
    let res = 1;
    while(!isNaN(res)) {
        res += +prompt(`Previous result: ${res}. Enter a new number:`);
        if (res >= 1000)
            res = 1;
    }
    console.log("Invalid number!");
    return 0;
}

// var gen = generator();
// gen.next();
// gen.next();


