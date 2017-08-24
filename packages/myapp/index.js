// @flow

const mylib = require('mylib');


console.log(mylib.getdb().simple({a: '1', b:'2'}));
console.log(mylib.getdb().simple());
