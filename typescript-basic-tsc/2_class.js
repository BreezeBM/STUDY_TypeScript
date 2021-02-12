"use strict";
//1️⃣
//Default를 줄 수 있다.
// class Person {
//   name: string;
//   age?: number = 24;
//   private city: string = 'Seoul'
class Car {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    honk() {
        console.log(`부우우웅`);
    }
    accelerate(speed) {
        this.speed = this.speed + speed;
    }
    getSpeed() {
        return this.speed;
    }
}
const car = new Car("Benz");
