// 1️⃣Generic
// 함수에 generic 타입을 적용 가능 createPromise 함수에 어떠한 타입이 올 지 모를 때 <>를 사용하여 타입을 지정합니다.

// function helloString(message: string): string {
//   return message;
// }

// function helloNumber(message: any): any {
//   return message;
// }

// function helllo<T>(message: T): T {
//   return message;
// }

// helllo("Mark").length
// helllo(35)

// const a: string[] = ['dog']
// const c: Array<string> = ['cat']

// function helllo<T>(message: T[]) {
//   return message;
// }

// type HelloGeneric = <T>(message: T) => T;

// class Persons<T extends string | number> {
//   private _name: T;

//   constructor(name: T) {
//     this._name = name;
//   }
// }

// const mark = new Persons('Mark')
// new Persons(55)

// class Persons<T, K> {
//   private _name: T;
//   private _age: K

//   constructor(name: T, age: K) {
//     this._name = name;
//     this._age = age
//   }
// }
// new Persons('Mark', 22)

// interface Persons {
//   name: string;
//   age: number;
// }

// // 테스트의 타입은 name이나 age이다.
// type Test = keyof Persons;

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// function setProperty<T, K extends keyof T>(obj: T, key: K, val: T[K]): void {
//   obj[key] = val;
// }

// const p1: Persons = {
//   name: "MArk",
//   age: 22,
// };

// getProperty(p1, "name");
// setProperty(p1, "name", "Anna");

// 2️⃣ iterator
