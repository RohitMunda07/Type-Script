// function with the object argument 
function user({ name: string, isPaid: boolean }) {

}

// function call with object argument
user({ name: "Rohit", isPaid: false })


// function with object return type 
function course({ }): { name: string, price: number } {
    return { name: "Ravi", price: 299 }
}

let mycourse = course({ name: "", price: 0 })
console.log(mycourse);



export { }