let greet: string = "Hello World"
console.log(greet);

let userId: number = 101;
console.log(userId);
// if I use userId. -> I will be getting all method related to number

let nums
nums = 10;
nums = "string"
// in this case the typeScript can't identify the real value of nums
// since it has been declared in next line
// if the value has been declared in the same line of initialisation it would have recognised it as number

// -----------------------------------------------------------------
// Any keyword -> we need to avoid it as much as possible
// when typeScript can't determine the future value of a variable will be receiving  it assigns the variable with any

// Error
let hero: any; // wheather write 'any' or not
function getHero() {
    return "thor";
}
hero = getHero(); // here the dataType is any

// Correction
let hero2: string;
function getHero2() {
    return "spider man"; // can't assign any different values
}
hero2 = getHero2(); // here the dataType is string

export { } // it can be used to avoid red line
