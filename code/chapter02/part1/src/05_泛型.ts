// 一开始就固定了类型为number
// function fn(a: number): number {
//     return a;
// }
// 不推荐，丢失了TS对语法的检测
// function fn(a: any): any {
//     return a;
// }

// 在定义函数或类时，如果遇到类型不明确就可以使用泛型

function fn<T>(a: T): T {
    return a
}
// 可以直接调用具有泛型的函数
let result = fn(10); // 不指定泛型，ts可以自动对类型进行推断
let result2 = fn<string>('hello'); // 指定泛型

// 指定多个泛型
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}
fn2<string, number>('jack', 20);


interface Inter {
    length: number
}
// T extends Inter 表示泛型T必须是接口Inter的实现类 （子类）
// T extends Inter 中Inter也可以是类
function fn3<T extends Inter>(a: T): number {
    return a.length
}
fn3<Inter>('123'); // ok，因为string类型存在length属性
// fn3(123); // error
// fn3({ age: 22 }); // error
fn3<Inter>({ length: 2 }); // ok


// 类中使用泛型
class Mytype<T, K>{
    name: T;
    age: K;
    constructor(name: T, age: K) {
        this.name = name;
        this.age = age;
    }
}
const mt = new Mytype('hello', 20);
const mt1 = new Mytype<string, number>('hello', 20); // 直接指定泛型