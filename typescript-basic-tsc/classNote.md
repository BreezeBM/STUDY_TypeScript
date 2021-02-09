TypeScript에서 프로그램 작성을 위해 기본 제공하는 데이터 타입

사용자가 만든 타입은 결국 이 기본 자료형들로 쪼개집니다.

JS기본 자료형을 포함

##### ECMAScript 표준에 따른 기본 자료형은 6가지

1. Boolean
2. Number (number에는 null 또는 undefined를 할당할 수 있다. 하지만 컴파일 옵션에서 "--strictNullChecks"를 사용하면 , null, undefined는 void나 자기 자신들에게만 할당할 수 있다.)
3. String
4. Null
5. Undefined
6. Symbol
7. Array : object형

프로그래밍을 도울 몇가지 타입이 더 제공된다.

1. Any(컴파일 옵션중에 any를 쓰면 오류를 뱉도록 하는 옵션도 있다. noImplicitAny)
2. Void
3. Never
4. Enum
5. Tuple : object형

##### let, const 타입 추론

let a: string = '에이' => 스트링 타입
let b = '비이' => 타입 추론에 의한 스트링 타입

const c: string = '씨이' => 스트링 타입
const d = '디이' => 리터럴 타입 "디이"

##### Type assertions

형변환은 실제 데이터 구조를 변경하는 것이다. '타입이 이것이다'라고 컴파일러에게 알려주는 것을 의미한다. 그래서 행동에 대해서 작성자가 100프로 신뢰하는 것이 중요합니다. 문법적으로는 두가지 방법이 있습니다.

1. 변수 as 강제할 타입
2. <강제할타입>변수

```
let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
```

##### Type alias

인터페이스랑 비슷해 보인다. 기타 직접 작성해야 하는 타입을 다른 이름을 지정할 수 있습니다. 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아닙니다. 타입을 만드는 것은 interface이다.

```
let a: any;
let b: string | number;

function test(arg: string | number) : string | number {
    return arg
}
```

```
type StringOrNumber = string | number;
let b : StringOrNumber

function test(arg: StringOrNumber): StringOrNumber {
    return arg
}
```

##### Interface

```
indexable type

interface Person {
  name: string;
//   age?: number;
  [index: string] : string
}

const person: Person = {
  name: "Lee",
};

person.anybody = 'Anna'
```

Person에 프로퍼티 명으로 스트링 타입이 들어갈 수 있고, 해당 프로퍼티의 값은 스트링으로 들어가야 한다.

##### class implements interface

##### interface extends interface

##### function interface

##### indexable type

##### class

1. private으로 설정된 프로퍼티는 dot으로 접근할 수 없다.
2. 클래스 내부에서는 private 프로퍼티를 사용할 수 있다.
