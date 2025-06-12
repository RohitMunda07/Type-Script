type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {
    // return {
    //     name: user.name,
    //     email: user.email,
    //     isActive: user.isActive
    // }

    return { ...user } // here we are returning a new object 
}

let user = createUser({ name: "Rohit", email: "email@gmail.com", isActive: true })
console.log(user);

export {}

// Create a new type if you want a partial structure
// type BasicUser = {
//     name: string,
//     email: string
// }

// let data: BasicUser = {
//     name: user.name,
//     email: user.email
// }