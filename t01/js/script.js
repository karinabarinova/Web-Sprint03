"use strict"

String.prototype.removeDuplicates = function() {
    if (this) {
        let arr = this.trim().split(/\s+/);
        arr.filter((item, index) => {
            return arr.indexOf(item) === index;
        })
        console.log(arr);
        return arr.join(" ");
    }
}

// let str = "Giant Spiders?   What’s next? Giant Snakes?";
// str = str.removeDuplicates();
// console.log(str);