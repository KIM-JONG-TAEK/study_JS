// number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object
let obj = {
    name: 'ellie',
    age: 5
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('------');
console.log(obj.name);
console.log(obj2.name);

const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
console.log(result2);

function add(a, b) {
    return a + b;
}

const sum = add(3, 4);
console.log(sum);

function add(num1, num2) {
    return num1 + num2;
}

const doSomething = add;

const result3 = doSomething(2, 3);
console.log(result3);

function print(a, b) {
    console.log('${a} {b}');
}

print(8, 33);

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(2, 3);
    console.log(result);
}

surprise(divide);


// false: 0, -0, '', null, undefined, NaN
// true: -1, 'hello'
let num1; // undefined
if (num1) {
    console.log('true!');
} else {
    console.log('false!');
}

num1 && console.log(num1);



class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
            // if(this.callback){
            //     this.callback(this.counter);
            // }
        }
    }
}

const coolCounter = new Counter(printSomething);
function printSomething(num) {
    console.log(`yo! ${num}`);
}

function alertNum(num) {
    console.log(`Wow! ${num}`);
}

coolCounter.increase();

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);






















