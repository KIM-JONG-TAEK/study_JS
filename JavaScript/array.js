'use strict';

// Array?

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];



// 2. Index position
const fruits = ['?', '?'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 처음
console.log(fruits[fruits.length -1]); // 마지마


console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));



// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('?', '?');
console.log(fruits);

// pop: remove an item from teh end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('?', '?');
console.log(fruits);

// shift: remove an item to the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('?', '?', '?');
console.log(fruits);
fruits.splice(1); // 지울 개수 지정하지 않으면 뒤에 싹다 지움(배열 1 이후에 싹다 삭제됨)
console.log(fruits); 
fruits.splice(1, 1); // 배열 1 에 있는 1개만 삭제
console.log(fruits);
fruits.splice(1, 1, '?', '?'); // 배열 1 에 있는 1개 삭제하고 그 자리에 뒤에 과일 삽입
console.log(fruits);

// combine two arrays
const fruits2 = ['?', '?'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('?')); // 몇번째 있는지, 없으면 -1 return

// includes
console.log(fruits.includes('?')); // 포함되어 있는지 true or false

// lastIndexOf
console.clear();
fruits.push('?');
console.log(fruits);
console.log(fruits.indexOf('?'));
console.log(fruits.lastIndexOf('?'));



















