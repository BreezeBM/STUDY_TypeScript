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

// 인터페이스는 퍼블릭이다.
interface IPerson {
  name: string;
  hello(): void;
}

class Person4 implements IPerson {
  name: string = "hi";

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요 ${this.name}`);
  }

  public hi(): void {
    console.log(`안녕 ${this.name}임`);
  }
}

const person4: IPerson = new Person4("Mark");

// interface extends interface
interface KPerson {
  name: string;
  age?: number;
}

interface Korean extends KPerson {
  city: string;
}

const k: Korean = {
  name: "Lee",
  city: "Busan",
};

// function interface 사용할 때 타입을 체크한다.
interface HelloPerson {
  (name: string, age?: number): void;
}

let helloPerson: HelloPerson = function (name: string) {
  console.log(name);
};

helloPerson("Lee");

// 에러 발생!
// interface kaka {
//   name: number;
//   [index: string] : string
// }
