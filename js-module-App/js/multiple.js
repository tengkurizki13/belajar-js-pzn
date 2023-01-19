function sayGoodBye(name) {
    console.log(`data :  good bye ${name}`);
}
class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(name){
        console.log(`hello my name is ${name}`);
    }
}

const name = "rizki";

export{sayGoodBye,Person,name};