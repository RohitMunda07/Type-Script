"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// normal funcition
function sum(nums, nums2) {
    return nums + nums2;
}
var res = sum(5, 10);
console.log(res);
// default values in funcition
function check(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid) {
        console.log(name, "is a paid user");
    }
    else {
        console.log(name, "is not paid user");
    }
}
check("ravi", "email");

// function with returned value
function getVal(num) {
    return num * 2;
}
console.log(getVal(5));
