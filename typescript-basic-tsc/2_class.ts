//1️⃣
//Default를 줄 수 있다.
// class Person {
//   name: string;
//   age?: number = 24;
//   private city: string = 'Seoul'

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const One = new Person("Mark");

// 2️⃣
// class Parent {
//     protected name: string = 'Mark'
//     private age?: number
// }

// age는 사용할 수 없다.
// 상속받을 때는 super사용
// class Child extends Parent {
//     constructor(name: string) {
//         super();
//         this.name = '자식'
//     }
//     getName() {

//     }
// }

//3️⃣
// 컨스트럭터에 바로 할당을 할 수 있다.
// class Parent {
//   //   protected name: string = "Mark";
//   //   private age?: number;

//   constructor(protected name: string, protected age: number) {}

//   hello(): void {
//     console.log(this.name);
//   }

//   hi = (): void => {
//     console.log(`Hello`);
//   };
// }

// const Three: Parent = new Parent("Mark", 25);

// class Child extends Parent {
//   name: string = "Robert";

//   constructor() {
//     super("Mark Jr", 5);
//   }
// }

// const child: Child = new Child();
// child.hello();

//4️⃣
// class Parent {
//   constructor(private name: string, private age: number) {}

//   hello(): void {
//     console.log(this.name);
//   }

//   getName(): string {
//     return this.name;
//   }

//   setName(newName: string) {
//     this.name = name;
//   }
// }

// const Four: Parent = new Parent("Mark", 25);

//5️⃣ Static
// class Parent {
//   static HEIGHT: number = 160;
//   constructor(private name: string, private age: number) {}

//   hello(): void {
//     console.log(this.name);
//   }

//   getName(): string {
//     return this.name;
//   }

//   setName(newName: string) {
//     this.name = name;
//   }
// }

// console.log(Parent.HEIGHT)

// Parent.HEIGHT 값을 가져올수도 있고, 퍼블릭이면 변경할 수 있따.

// EX1
interface ICar {
  honk(): void;
  accelerate(speed: number): void;
  getSpeed(): number;
}

class Car implements ICar {
  private speed: number = 0;
  constructor(private name: string) {}

  public honk(): void {
    console.log(`부우우웅`);
  }

  public accelerate(speed: number) {
    this.speed = this.speed + speed;
  }

  getSpeed(): number {
    return this.speed;
  }
}

const car: ICar = new Car("Benz");
