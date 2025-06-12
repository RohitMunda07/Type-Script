// normal funcition
function sum(nums: number, nums2: number) {
    return nums + nums2
}

let res = sum(5, 10);
console.log(res);

// default values in funcition
function check(name: string, email: string, isPaid: boolean = false) {
    if (isPaid) {
        console.log(name, "is a paid user");
    } else {
        console.log(name, "is not paid user");
    }

}

check("ravi", "email")

// function with returned value
function getVal(num: number): number {
    return num * 2;
}
console.log(getVal(5))


export { }