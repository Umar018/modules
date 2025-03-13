

import Person from "./main.js"

async function main() {
    const person = new Person("Umar", "10-05-2006");
    console.log(await person.getInfo());
}

main();