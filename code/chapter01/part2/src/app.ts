import { hi } from "./m.js";
let a = 10;
console.log(hi);
function fn(this: Window) {
    alert(this)
}