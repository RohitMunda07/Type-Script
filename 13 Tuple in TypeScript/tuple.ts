const user: [string, number] = ["rohit", 101]

let rgb: [number, number, number]
rgb = [255, 255, 255]

type User = [number, string]

const newUser: User = [222, "email.com"]
newUser[1] = 'ravi'
newUser.push("hello")
console.log(newUser);

export {}
