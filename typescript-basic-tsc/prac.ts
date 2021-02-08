const d = "디이";
let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

type StringOrNumber = string | number;
let b: StringOrNumber;

function test(arg: StringOrNumber): StringOrNumber {
  return arg;
}

// const  person: { name: string; age: number } = {
//     name: "Lee",
//     age: 33
// }

//indexable type

interface Person {
  name: string;
  //   age?: number;
  [index: string]: string;
}

const person: Person = {
  name: "Lee",
};

person.anybody = "Anna";

function hello(p: Person): void {
  console.log(`안녕하세요 ${p.name} 입니다.`);
}

interface Person2 {
  [index: number]: string;
}

const p2: Person2 = {};
p2[0] = "hi";
p2[100] = "hello";

interface Person3 {
  name: string;
  hello(): string;
}

const p3: Person3 = {
  name: "kim",
  hello(): string {
    return "Hell0";
  },
};
