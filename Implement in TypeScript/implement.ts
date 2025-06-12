interface AuthUser {
    readonly id: string;
    email: string;
    login(): boolean;
}

class SecureUser implements AuthUser {
    public email: string;
    readonly id: string;
    private password: string; // completely hidden

    constructor(email: string, id: string, password: string) {
        this.email = email;
        this.id = id;
        this.password = password;
    }

    login(): boolean {
        // Only this class can access password
        return this.password === "secret";
    }
}

const user = new SecureUser("email", "abc", "secret")
if (user.login()) {
    console.log("Valid User");
} else {
    console.log("Not Valid");
}


export { }