// require('babel-polyfill')
let arry = []

let bar = Array.from("foo")
console.log( bar )

arry.map(item => item + 1)

// (x => x * 2)(1)

console.log(  (x => x * 2)(513) )


var es6Code = 'let x = n => n + 1';
// var es5Code = require('babel-core')
//     .transform(es6Code, {
//         presets: ['es2015']
//     })
//     .code;
//
// console.log( es5Code )

class Calc {
    constructor(){
        console.log('Calc constructor');
    }
    add(a, b){
        return a + b;
    }
}

var c = new Calc()
console.log(c.add(4,5))

var s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false

'na'.repeat(2.9) // "nana"

console.log('12'.padStart(10, 'YYYY-MM-DD'))
console.log('09-12'.padStart(10, 'YYYY-MM-DD'))

