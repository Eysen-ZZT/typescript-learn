// js 中的函数是不考虑参数的类型和个数的
// function sum(a, b) {
//     return a + b;
// }
function sum(a, b) {
    return a + b;
}
var he = sum(1, 2);
console.log(he);
// sum(1, '2'); // Argument of type 'string' is not assignable to parameter of type 'number'.
