'use strict';

// require('babel-polyfill')
var arry = [];

var bar = Array.from("foo");
console.log(bar);

arry.map(function (item) {
    return item + 1;
});

// (x => x * 2)(1)

console.log(function (x) {
    return x * 2;
}(513));

var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core').transform(es6Code, {
    presets: ['es2015']
}).code;

console.log(es5Code);