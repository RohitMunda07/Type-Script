interface dataBase {
    userName: string,
    password: string,
    email: string
}

function classFunction<T, U extends dataBase>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

// classFunction(12, {
//     userName: "john_doe",
//     password: "mypassword123",
//     email: "john@example.com"
// })

interface Quize {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCard(product: T) {
        this.cart.push(product)
    }
}

// class of Quize Type
const quizCart = new Sellable<Quize>();

quizCart.addToCard({ name: "JS Basics", type: "MCQ" });
console.log(quizCart.cart);


// class of Course Type
const courseCart = new Sellable<Course>();

courseCart.addToCard({
    name: "React",
    author: "Rohit",
    subject: "Frontend"
});
console.log(courseCart.cart);
