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
// void 类型
function warnUser() {
    console.log("This is my warning message");
    // return 123; // Type 'number' is not assignable to type 'void'
    return null; // ok 
}
// enum 类型
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName1 = Color[1]; // 'Red'
var colorName2 = Color[2]; // 'Green'  因为上面代码里它的值是2
var c1 = Color.Red; // 1
var c12 = Color[Color[1]]; // 1
var c2 = Color.Green; // 2
// let c22: string = Color.Green; // Type 'Color' is not assignable to type 'string'
// console.log(typeof c12); // number
// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 3] = "NORTH";
    Direction[Direction["SOUTH"] = 4] = "SOUTH";
    Direction[Direction["EAST"] = 5] = "EAST";
    Direction[Direction["WEST"] = 6] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction[3]; // NORTH
var dir2 = Direction.NORTH; // 3
// 字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["NORTH2"] = "NORTH";
    Direction2["SOUTH2"] = "SOUTH";
    Direction2["EAST2"] = "EAST";
    Direction2["WEST2"] = "WEST";
})(Direction2 || (Direction2 = {}));
var dir3 = Direction2[0]; // undefined
var dir4 = Direction2[0]; // undefined
var dir5 = Direction2[Direction2.NORTH2]; // undefined
// 以上两个不管怎么替换都是undefined
var dir6 = Direction2.NORTH2; // NORTH
// 通过上面的代码对比，可以发现数字枚举相对字符串枚举多了 “反向映射”
