"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rohit = {
    name: "rohit",
    unserName: "rohit04",
    pass: 123
};
function getDBId(id) {
    if (typeof (id) === "string") {
        return id.toLowerCase();
    }
    else {
        return id += 10;
    }
}
console.log(getDBId("hello"));
