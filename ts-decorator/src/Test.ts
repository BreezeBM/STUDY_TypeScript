// class CustomIterable implements Iterable<string> {
//   private _array: Array<string> = ["first", "second"];

//   [Symbol.iterator]() {
//     let nextIndex = 0;

//     return {
//       next: () => {
//         return {
//           value: this._array[nextIndex++],
//           done: nextIndex > this._array.length,
//         };
//       },
//     };
//   }
// }

// const cIterator = new CustomIterable();

// for (const item of cIterator) {
//   console.log(item);
// }

// Class Decorator
// function hello(constructFn: Function) {
//   console.log(constructFn);
// }

// @hello
// class Person {}

// function hello(constructFn: Function) {
//   console.log(constructFn);
// }

// function helloFactory(show: boolean) {
//   if (show) {
//     return hello;
//   } else {
//     return null;
//   }
// }

// @helloFactory(false)
// class Person {}

// function hello(constructFn: Function) {
//   constructFn.prototype.ello = function () {
//     console.log("hello");
//   };
// }

// @hello
// class Person {}

// const p = new Person();
// (<any>p).hello();

// Method Decorator
// function editable(canBeEditable: Boolean) {
//   return function (
//     target: any,
//     propName: string,
//     description: PropertyDescriptor
//   ) {
//     console.log(target);
//     console.log(propName);
//     console.log(description);
//   };
// }

// class Person {
//   constructor() {
//     console.log("new Person()");
//   }

//   @editable(true)
//   hello() {
//     console.log("hello");
//   }
// }

// const p = new Person();
// p.hello();
// p.hello = function () {
//   console.log("World");
// };
// p.hello();

// Property Decorator
// function writable(canBeWritable: Boolean): any {
//   return function (target: any, propName: string) {
//     console.log(target);
//     console.log(propName);

//     return {
//       writable: canBeWritable,
//     };
//   };
// }

// class Person {
//   @writable(true)
//   name: string = "Mark";

//   constructor() {
//     console.log("new Person()");
//   }
// }

// const p = new Person();
// console.log(p);

// Parameter Decorator

function print(target: any, methodName: string, paramIndex: number) {
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);
}

class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, @print age: number) {
    this._name = name;
    this._age = age;
  }

  hello(@print message: string) {
    console.log(message);
  }
}

const p = new Person("Elon", 22);
