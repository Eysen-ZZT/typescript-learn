// 类型别名：此种方法不可以重复声明
type myType = {
    name: string,
    age: number
}

// 接口可以重复声明，并且以多个接口合并为准
interface myInterFace {
    name: string,
    age: number
}

// const obj: myType = {
//     name: 'jack',
//     age: 18
// }
// 与上面的效果是一样的
// const obj: myInterFace = {
//     name: 'jack',
//     age: 18
// }

// 例如，我这里重复声明了一个接口，上面创建的obj对象就会报错，因为没有包含 gender 属性
interface myInterFace {
    gender:number
}

const obj: myInterFace = {
    name: 'jack',
    age: 18,
    gender: 0
}

interface myInter{
    cname: string;
    sayHello():void; // 不能有实际值，抽象类即可以有抽象方法，也可以有实际值
}
class Myclass implements myInter{
    cname:string;
    constructor(cname:string){
        this.cname = cname
    }
    sayHello(){
        console.log('haha')
    }
}