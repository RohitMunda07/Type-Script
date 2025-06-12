class User {
    constructor(email, name, userId // # is used in js for make something private
    ) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._counter = 1;
        this.city = "Ranchi";
    }
    // private method
    deleteToken() {
        console.log("Token deleted");
    }
    // getter
    get getAppEmail() {
        return `app${this.email}110`;
    }
    // setter -> they don't have return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("value must be greater than 1");
        }
        this.courseCount = courseNum;
    }
}
const rohit = new User("rk@gmail.com", "Rohit");
console.log(rohit.city);
console.log(rohit.email);
console.log(rohit.getAppEmail);
export {};
