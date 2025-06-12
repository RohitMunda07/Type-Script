function detectType(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please Provide Id");
        return
    }
    id.toLowerCase()
}

function printAll(str: string | string[] | null) {
    if (str) { // narrow for string !null
        if (typeof str === 'string') { // narrow for string string
            if (str.length === 0) {
                console.log("Empty string");
                return;
            }
            return str
        } else if (typeof str === 'object') { // narrow for object
            if (str.length === 0) {
                console.log("Empty array");
                return;
            }
            for (let obj of str) {
                console.log(obj);
            }
        }
    }
}