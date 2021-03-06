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
// Custom iterator
// class CustomIterable implements Iterable<string> {
//   [Symbol.iterator]() {
//     const iterator: Iterator<string> = {
//       next() {
//         return {
//           done: false,
//           value: "어렵다",
//         };
//       },
//     };
//     return iterator;
//   }
// }

// const c = new CustomIterable();

// for (const item of c) {
//   console.log(item);
// }

// Type Inference
const array1 = [];
const array2 = ["a"];
const array3 = ["a", 1]; // 유니온으로 추론

class Animal {
  name: string = "Cali";
}

class Dog extends Animal {
  dog: string = "dog";
}

class Cat extends Animal {
  cat: string = "cat";
}

const array4 = [new Dog(), new Cat()]; // Dog, Cat 유니온 타입으로 추론된다.

// 리터럴 타입의 world이거나 0이 나온다.
function hellllo(message: string | number) {
  if (message === "world") {
    return "world";
  } else {
    return 0;
  }
}

// 타입 가드
interface PPerson {
  name: string;
  age: number;
}

interface Car {
  brand: string;
  wheel: number;
}

// type guard
function isPerson(arg: any): arg is Person {
  return arg.name !== undefined;
}

function Hellocar(obj: Person | Car) {
  if (isPerson(obj)) {
    obj.age;
  } else {
    obj.wheel;
  }
}
