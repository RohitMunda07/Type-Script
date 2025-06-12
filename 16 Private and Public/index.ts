class User {
    protected _counter = 1 // protected means it is accessible in another class but not directly outside the class
    public email: string
    private name: string
    readonly city: string = "Ranchi"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const rohit = new User("rk@gmail.com", "Rohit")
console.log(rohit.city);
console.log(rohit.email);
// console.log(rohit.name); // private method can't be accessible outside the class

class subUser extends User {
    _counter = 10
}

// class User {
//     readonly city: string = "Ranchi"
//     constructor(
//         public email: string,
//         private name: string,
//         private userId?: string // # is used in js for make something private
//     ) { }
// }

// const rohit = new User("rk@gmail.com", "Rohit",)
// console.log(rohit.city);
// console.log(rohit.email);
// console.log(rohit.name);

export { }