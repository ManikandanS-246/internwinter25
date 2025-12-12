// Global scope
var a = 20;
let b = 11;
const c = 12;

// Data Types
var h = 19;                 // number
var d = "Manikandan";       // string
var e = true;               // boolean
var f = null;               // null
var g = undefined;          // undefined

// Object
var object = {
    name: "Manikandan",
    age: 19,
    phone: 9042915939,
    email: "manikandan24072006@gmail.com",
    address: {
        houseno: "7/91",
        address: "sulthanpet",
        district: "coimbatore",
        pincode: 641669,
    }
};
console.log(object);

// For loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// While loop
let k = 0;
while (k <= 10) {
    console.log(k);
    k++;
}

// Switch
switch (1) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("default");
}

// Ternary
let mark = 90;
let result = mark >= 90 ? "O" : mark >= 70 ? "A" : mark >= 50 ? "B" : "Fail";
console.log(result);

// Function
function add1() {
    console.log(a + b);
}
add1();

function add2(a, b) {
    console.log(a + b);
}
add2(1, 2);

// Type Check
var p = 20;
var q = "Hello";
var bool = true;
var r;
var s = null;
var big = BigInt("123456789012345678901234567890");
var sym = Symbol("Hello");

console.log(typeof p);
console.log(typeof q);
console.log(typeof bool);
console.log(typeof r);
console.log(typeof s);
console.log(typeof big);
console.log(typeof sym);

// For in (index)
var arr = [1, 2, 3, 4, 5];
for (let i in arr) {
    console.log(i);
}

// For of (values)
for (let j of arr) {
    console.log(j);
}

// ForEach
arr.forEach((val, index) => {
    console.log(val, index);
});

// Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name, this.age);
    }
}
var p1 = new Person("Manikandan", 19);
p1.display();

// Prime number
var num = 10;
let isPrime = true;

if (num <= 1) isPrime = false;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Prime" : "Not Prime");

// Undefined and reassigned
var x;
console.log(x);
x = 10;
console.log(x);

// For in object
var obj = {
    name: "Manikandan",
    age: 19,
    marks: 90
};
for (let i in obj) {
    console.log(i, obj[i]);
}

// Promise
const promise = new Promise(function (resolve, reject) {
    var success = true;
    success ? resolve("Success") : reject("Failed");
});
promise.then((msg) => console.log(msg)).catch((err) => console.log(err));

// Fetch (then)
const getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1");
}
getData()
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Fetch (async/await)
const getData1 = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
};
getData1();
