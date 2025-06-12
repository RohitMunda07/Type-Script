type User = {
    name: string
    pass: number
}

type Admin = {
    unserName: string
    pass: number
}

let rohit: Readonly<User | Admin> = {
    name: "rohit",
    unserName: "rohit04",
    pass: 123
}

function getDBId(id: number | string): number | string {
    if (typeof (id) === "string") {
        return id.toLowerCase()
    } else {
        return id += 10;
    }
}

console.log(getDBId(55));

// -----------------------[Array]---------------------------
// Array of Number
const data: number[] = [1, 2, 3]

// Array of String
const data2: string[] = ['1', '2', '3']

// Array of either String or Number
const data3: string[] | number[] = [1, 2, 3]

// Combined Array of String, Number and Boolean
const data4: (string | number | boolean)[] = [1, 2, '3', 'hello', true]

// -----------------------[only specified values are allowed]----------------
let seatAllotment: "alise" | "middle" | "window"

seatAllotment = "alise"
seatAllotment = 'middle'
// seatAllotment = 'crew' // instantly throws an error

export { }