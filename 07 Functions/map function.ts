// typeScript automatically detects what type of array we are mapping

let heros = ["SpiderMan", "Thor", "Hulk"]
let nums = [1, 2, 3]

heros.map((hero: string) => { // on hover we get string
    // here we are defining which type of array we are mapping
    return `hero is ${hero}`
})

nums.map((num): number => { // on hover we get number 
    // explicitly it's return type is number
    return num
})


// error handiling function
function errHadle(errMsg:string): void {
    console.log(errMsg);
}

// never type will not return anything
function handleError(errMsg:string): never {
    throw new Error(errMsg);
}