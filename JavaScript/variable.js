// Whole-script strict mode syntax
// JavaScript is very flexivle
// flexible ==- dangerous
// added ECMAScript 5

// 1. Use strict
// added in ES5
// use this for Valina Javascript.
'use strict';



// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'kerwin';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
age = 4;
var age;



// 3. Contant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type alwyas for a few reasons;
// -security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log('value: ${count}, type: ${typeof count}');
console.log('value: ${size}, type: ${typeof size}');

// number - speicala numberic values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// binInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // over (-2**53) ~ 2*53
console.log('value: ${bigInt}, type: ${typeof bigInt}');
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log('value: ${greeting}, type: ${typeof greeting}');
const heeloBob = 'hi ${brendan}!'; //template literals (string)
console.log('value: ${heeloBob}, type: ${typeof heeloBob}');

// boolean
// false : 0, null, undifined, NaN, ''
// true : any otehr value
const canRead = true;
const test = 3 <1; //calse

// null
let nothing = null;

// undefined
let x = undefined;

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log('value: ${symbol1.description}, type: ${typeof symbol1.description}');

// object, real-life object, data structure
const ellie = { name: 'elle', age: 20 };
ellie.age = 21;



// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log('value: ${text}, type: ${typeof text}');
text = 1;
console.log('value: ${text}, type: ${typeof text}');
text = '7' + 5;
console.log('value: ${text}, type: ${typeof text}');
text = '8' / '2';
console.log('value: ${text}, type: ${typeof text}');

























