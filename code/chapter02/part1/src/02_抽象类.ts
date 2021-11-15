abstract class Animal{
    cname:string;
    constructor(cname:string){
        this.cname = cname;
    }
	// 会强制我们在子类中去实现sayHello这个方法，不然语法会报错    
    abstract sayHello(): void;
}
class Dog extends Animal{
    age:number;
    constructor(cname:string,age:number){
        super(cname);
        this.age = age;
    }
    sayHello(){
        console.log('汪汪汪')
    }
}