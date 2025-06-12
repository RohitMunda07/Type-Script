function logValue(x: Date | string) {
    //This line checks if x is an actual instance of the Date class. If true, TypeScript narrows the type to Date. Otherwise, it's assumed to be string.
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toLowerCase());
    }
}

// Call with a Date
logValue(new Date());

// Call with a string
logValue("Hello World");


type Fish = { swim: () => void }
type Brid = { fly: () => void }

function isFish(pet: Fish | Brid): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Brid) {
    if (isFish(pet)) {
        pet
        return "Fish Food"
    } else {
        pet
        return "Birde Food"
    }
}