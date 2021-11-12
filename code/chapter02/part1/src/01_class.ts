class Person {
    static cname:string = "jack";
    age:number;
    constructor(msg: number) {
        this.age = msg
    }
    
}
const per = new Person(18);
console.log(Person.cname);
console.log(per)