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

// void 类型
function warnUser(): void {
    console.log("This is my warning message");
    // return 123; // Type 'number' is not assignable to type 'void'
    return undefined; // ok 
}

// enum 类型
enum Color { Red = 1, Green, Blue }
let colorName1: string = Color[1]; // 'Red'
let colorName2: string = Color[2]; // 'Green'  因为上面代码里它的值是2
let c1: Color = Color.Red; // 1
let c12: string = Color[Color[1]]; // 1
let c2: Color = Color.Green; // 2
// let c22: string = Color.Green; // Type 'Color' is not assignable to type 'string'
// console.log(typeof c12); // number

// 数字枚举
enum Direction {
    NORTH = 3,
    SOUTH = 4,
    EAST,
    WEST,
}
let dir: string = Direction[3]; // NORTH
let dir2: Direction = Direction.NORTH; // 3

// 字符串枚举
enum Direction2 {
    NORTH2 = "NORTH",
    SOUTH2 = "SOUTH",
    EAST2 = "EAST",
    WEST2 = "WEST",
}
let dir3: Direction2 = Direction2[0]; // undefined
let dir4: string = Direction2[0]; // undefined
let dir5: Direction2 = Direction2[Direction2.NORTH2]; // undefined
// 以上两个不管怎么替换都是undefined
let dir6: Direction2 = Direction2.NORTH2; // NORTH

// 通过上面的代码对比，可以发现数字枚举相对字符串枚举多了 “反向映射”