##### Generic

타입을 변수로 주고 싶을 때 사용한다.

##### iterator

프로퍼티이며, 함수가 구현이 되어 있으면 iterable이라고 한다. Array, Map, Set, String, Int32Array, etc...에는 내장된 구현체가 있으므로 이터러블 하다.

target: es3, es5에서는 Array만 for...of 사용 가능, 일반 객체에 사용하면 오류

target: es6 iterator 함수를 구현하면 어떤 객체에도 for...of 사용가능

##### Decorator

1. Class Decorator
2. Method Decorator
3. Property Decorator
4. Parameter Decorator

###### 작성준비

1. 프로젝트 생성
2. 타입스크립트 설치
3. tsconfig 설정

- node_modules/.bin/tsc--lint
- experimentalDecorators 추가

4. vscode 컴파일 설정

- ${workspaceRoot}/node_modules/.bin/tsc
- command + shift + <B>

##### Type Inference 타입추론

1. 기본적으로 타입을 명시적으로 쓰지 않을 때 추론하는 방법에 대한 규칙

- 명시적으로 쓰는 것은 타입 추론이 아니라 코드를 읽기 좋게 하는 지름길

2. let은 기본적으로 우리가 아는 기본 자료형으로 추론
3. const는 리터럴 타입으로 추론

- 오브젝트 타입을 쓰지 않으면, 프로퍼티는 let 처럼 추론

```
const person = {
    name: "Mark",
    age: 35
}면
person => {
    name: string,
    age: number
}로 추론
```

4. 대부분 추론이 쉽다.

- 단순변수
- structing, destructing

5. array, 함수의 리턴에서는 원하는데러 얻기가 힘들다.
