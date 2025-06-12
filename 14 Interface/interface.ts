interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrial: ()=> string
    startTrial(): string
    getCupon(couponname: string, value: number): number
}

// re-opening of an interface
interface User {
    github: string
}

interface job {
    desc: string
}

// inheritance from multiple interfaces
interface Admin extends User, job {
    role: "hr" | "learner" | "devloper"
}

const rohit: User = {
    dbId: 1221,
    email: "rk@gmail.com",
    userId: 201,
    github: "github",
    startTrial: () => {
        return "hello"
    },
    getCupon(name: "rohit50", value: 50) {
        return 200
    }
}

const myAdmin: Admin = {
    dbId: 1221,
    email: "rk@gmail.com",
    userId: 201,
    github: "github",
    role: "devloper",
    desc: "this is a short desc about admin",
    startTrial: () => {
        return "hello"
    },
    getCupon(name: "rohit50", value: 50) {
        return 200
    }
}

export {}