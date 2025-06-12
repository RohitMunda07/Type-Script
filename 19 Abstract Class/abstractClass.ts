abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    // getSepia(): void  this is not valid it 
    abstract getSepia(): void // it's simillar to interface
    getReelTime(): number {
        return 10
    }
}

// abstract class can't be used to create new obects as interface do but we can inherit it to another class 
// const user = new TakePhoto("camera mode", "filter")

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
}
const insta = new Instagram("camera", "filter", 120)
console.log(insta.getReelTime())
console.log(insta.getSepia())

export { }

