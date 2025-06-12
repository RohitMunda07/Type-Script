class User {
    _counter: number = 1
    readonly city: string = "Ranchi"
    constructor(
        public email: string,
        private name: string,
        private userId?: string // # is used in js for make something private
    ) { }

    // private method
    private deleteToken() {
        console.log("Token deleted");
    }

    // getter
    get getAppEmail(): string {
        return `app${this.email}110`
    }

    // setter -> they don't have return type
    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("value must be greater than 1")
        }
        this.courseCount = courseNum;
    }
}

const rohit = new User("rk@gmail.com", "Rohit",)
console.log(rohit.city);
console.log(rohit.email);
console.log(rohit.getAppEmail);

export { }