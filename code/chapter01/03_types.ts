let b: 'male' | 'famale';
b = 'male';
b = 'famale';
// b = 233; // Type '233' is not assignable to type '"male" | "famale"'

let notSure: any = 666;
notSure = "Semlinker";
notSure = false;

let value: unknown;
value = true; // ok
let value1: any = value; // ok
// let value2: number = value; // Type 'unknown' is not assignable to type 'number'

let s: string;
// value = 'hello';
if (typeof value === 'string') {
    s = value
    console.log(s);
}
// 类型断言
/**
 * 语法：
 *   变量 as 类型
 *   <类型>变量
 */
s = value as string
s = <string>value

function warnUser(): void {
    console.log("This is my warning message");
    // return 123; // Type 'number' is not assignable to type 'void'
    return null; // ok 
}
