const score: Array<number> = []
const names: Array<string> = []

function identityOne(value: boolean | number): boolean | number {
    return value;
}

function identityTwo(value: any): any {
    return value;
}

function identityThree<Type>(value: Type): Type {

    return value
}

function identityFour<score>(value: score): score {
    // The commented line console.log(value.length) would also cause an error because the generic type T doesn't guarantee that the value has a length property

    // console.log(value.length); 
    return value;
}
const result1 = identityFour("hello"); // T is inferred as string
const result2 = identityFour(42); // T is inferred as number
const result3 = identityFour(score); // T is inferred as number[]

interface User {
    name: string
    age: number
}

function getUser<User>({ }: User) {
    console.log("hello")
}

// Now you can call:
getUser({});
getUser({ name: "John" });
getUser({ name: "John", age: 25 });

export { }