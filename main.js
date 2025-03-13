import randomSleep from "./sleep.js";
import coolRand from "./random.js";

class Person{
    constructor(fullName, date){
        this.fullName = fullName;
        this.date = date
    }

    async getInfo(){
        await randomSleep(coolRand());
        return `Ism sharif: ${this.fullName}, tugilgan sana: ${this.date}`
    }
}

export default Person