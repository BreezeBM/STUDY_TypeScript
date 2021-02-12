"use strict";
const d = "디이";
let someValue = "this is a string";
// let strLength: number = (<string>someValue).length;
let strLength = someValue.length;
let b;
function test(arg) {
    return arg;
}
const person = {
    name: "Lee",
};
person.anybody = "Anna";
function hello(p) {
    console.log(`안녕하세요 ${p.name} 입니다.`);
}
const p2 = {};
p2[0] = "hi";
p2[100] = "hello";
const p3 = {
    name: "kim",
    hello() {
        return "Hell0";
    },
};
class Person4 {
    constructor(name) {
        this.name = "hi";
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요 ${this.name}`);
    }
    hi() {
        console.log(`안녕 ${this.name}임`);
    }
}
const person4 = new Person4("Mark");
const k = {
    name: "Lee",
    city: "Busan",
};
let helloPerson = function (name) {
    console.log(name);
};
helloPerson("Lee");
// 에러 발생!
// interface kaka {
//   name: number;
//   [index: string] : string
// }
