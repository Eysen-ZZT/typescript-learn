var b;
b = 'male';
b = 'famale';
// b = 233; // Type '233' is not assignable to type '"male" | "famale"'
var notSure = 666;
notSure = "Semlinker";
notSure = false;
var value;
value = true; // ok
var value1 = value; // ok
// let value2: number = value; // Type 'unknown' is not assignable to type 'number'
var s;
// value = 'hello';
if (typeof value === 'string') {
    s = value;
    console.log(s);
}
// 类型断言
/**
 * 语法：
 *   变量 as 类型
 *   <类型>变量
 */
s = value;
s = value;
function warnUser() {
    console.log("This is my warning message");
    // return 123; // Type 'number' is not assignable to type 'void'
    return null; // ok 
}
