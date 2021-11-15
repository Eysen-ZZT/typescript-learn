class Student {
    // TS 可以在属性前添加属性的修饰符
    /**
     * 属性修饰符
     * public 公共属性，修饰的属性可以在任意的位置访问（修改） 默认值
     * private 私有属性，只能在类内部进行访问（修改）
     *         -- 通过在类中添加方法使得私有属性可以被外部访问。
     * protected 受保护的属性，只能在当前类和当前类的子类中进行访问
     */
    // 使用私有属性的好处是可以将主动权掌握在类的手里，防止数据被随意修改，或数据紊乱。
    private _cname: string;
    private _age: number;
    constructor(cname: string, age: number) {
        this._cname = cname;
        this._age = age
    }

    // // 定义方法用来获取 _cname 属性
    // getName() {
    //     return this._cname
    // }
    // // 定义方法用来设置 _cname 属性
    // setName(value: string) {
    //     this._cname = value
    // }

    // getAge() {
    //     return this._age
    // }
    // setAge(value: number) {
    //     // 由于年龄不能为负数，所以得做限制
    //     if (value >= 0) {
    //         this._age = value
    //     }
    // }

    /**
     * getter 方法用来读取属性
     * setter 方法用来设置属性
     *      -- 他们被称为属性的存取器
     */
    // TS 中设置getter，setter方法的方式
    get name() {
        return this._cname
    }
    set name(value: string) {
        this._cname = value
    }
    get age() {
        return this._age
    }
    set age(value: number) {
        if (value >= 0) {
            this._age = value
        }
    }
}

const stu = new Student('jack', 18);
// stu.setName('rose');
// stu.setAge(-33);
// console.log(stu.getName(),stu.getAge());

// 通过getter，setter方法可以无需改变之前的习惯进行数据的访问（修改）
stu.name = "rose";
stu.age = 19;
console.log(stu);

// 通过public实现创建类的简易写法
class C {
    constructor(public name: string, public age: number) { }
}
// 等价于
// class C {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age
//     }
// }
const c = new C('Eysen', 19);
