"use strict"

function HouseBlueprint(address, description, owner, size) {
    this.address = address;
    this.description = description;
    this.date = new Date(Date.now());
    this.owner = owner;
    this.size = size;
    this._averageBuildSpeed = 0.5;
    this.getDaysToBuild = function() {
        return this.size * 2;
    }
}

function HouseBuilder(address, description, owner, size, rooms) {
    HouseBlueprint.call(this, address, description, owner, size);
    this.roomCount = rooms;
}

// const house = new HouseBuilder('88 Crescent Avenue','Spacious town house with wood flooring, 2-car garage, and a back patio.','J. Smith',110,5);
// console.log(house.address);
// console.log(house.description);;
// console.log(house.size);
// console.log(house.owner);
// console.log(house._averageBuildSpeed);
//  console.log(house.getDaysToBuild());
// console.log(house.roomCount);
// console.log(house.date.toDateString())
// console.log(house);
