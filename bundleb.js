(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



},{}]},{},[1]);
