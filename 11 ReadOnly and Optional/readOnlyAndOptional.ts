type User = {
    readonly _id: string, // readOnly mode
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number // optional mode (?)
}

let myUser: User = {
    _id: "101",
    name: "Rohit",
    email: "rohit@.com",
    isActive: true,
}


// myUser._id = "505"
myUser.name = "Harry"
myUser.creditCardDetails = 15434661

// --------------------Read Only Array------------------------------------ \\
type Data = {
    readonly arr: ReadonlyArray<number>
    name: string
}

// or 
// You can also use Readonly<T> for whole objects:
type Data1 = Readonly<{
    arr: number[]
    name: string
}>

let data: Data = {
    arr: [1, 2, 3],
    name: "hello"
}

// data.arr.push(15)
console.log(data.arr);

export { }
