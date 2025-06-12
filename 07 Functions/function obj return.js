"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function with the object argument 
function user(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// function call with object argument
user({ name: "Rohit", isPaid: false });
// function with object return type 
function course(_a) {
    return { name: "Ravi", price: 299 };
}
var mycourse = course({ name: "", price: 0 });
console.log(mycourse);
