class SecureUser {
    constructor(email, id, password) {
        this.email = email;
        this.id = id;
        this.password = password;
    }
    login() {
        // Only this class can access password
        return this.password === "secret";
    }
}

const user = new SecureUser("email", "abc", "secret");
if (user.login()) {
    console.log("Valid User");
}
else {
    console.log("Not Valid");
}
// export {};
