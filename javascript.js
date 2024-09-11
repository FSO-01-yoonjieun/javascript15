// ### 1. **객체 생성하기** (난이도: 쉬움)

// - 객체 리터럴을 사용하여 이름이 "홍길동", 나이가 25인 `person` 객체를 만들어보세요.

const person = {
    name: "홍길동",
    age: 25
};

console.log(person.name);

// ### 2. **객체 속성 접근하기** (난이도: 쉬움)

// - 아래 `car` 객체의 `brand` 속성에 접근하여 콘솔에 출력해보세요.

const car = { brand: "Toyota", model: "Corolla" };

console.log(car.brand);

// ### 3. **객체 메소드 호출하기** (난이도: 중간)

const person1 = {
    name: "Alice",
    sayHello: function() {
      console.log("Hello, I am " + this.name + ".");
    }
  };
  
  person1.sayHello();
  person1["sayHello"]();

// ### 4. **객체에 메소드 추가하기** (난이도: 중간)

// - `person` 객체에 `greet` 메소드를 추가하여 "Hi, I'm [name]"을 출력하도록 만들어보세요.

const person2 = { name: "Bob" };

   person2.greet = function() {
    console.log("Hi, I'm " + this.name);
   }; 

person2.greet();



// ### 5. **생성자 함수로 객체 만들기** (난이도: 중간)

// - `Person`이라는 생성자 함수를 사용하여 이름과 나이를 속성으로 가진 객체를 만들고, 해당 객체로 이름이 "John", 나이가 30인 객체를 생성하세요.

function Person(name, age){
    this.name = name;
    this.age = age;
}

const newperson3 = new Person("John", 30);

console.log(newperson3.name)

// ### 6. **객체 배열 필터링하기** (난이도: 중간)

// - 이름과 나이를 속성으로 가진 객체 배열에서 나이가 18 이상인 사람만 필터링하세요.

const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 },
  { name: "Paul", age: 15 },
  { name: "Mark", age: 25 }
];

const adults = people.filter(function(people){
    return people.age >= 18;
});

console.log(adults);


// ### 7. **배열 생성하기** (난이도: 쉬움)

// - "Apple", "Banana", "Orange"를 요소로 가진 배열을 만들어보세요.

const fruits = ["Apple", "Banana", "Orange"];

// ### 8. **배열 요소 접근하기** (난이도: 쉬움)
// - 아래 배열의 두 번째 요소를 출력해보세요.

const fruits1 = ["Apple", "Banana", "Orange"];

console.log(fruits1[1]);

// ### 9. **배열에 요소 추가하기 (`push`)** (난이도: 쉬움)

// - `numbers` 배열에 숫자 5를 추가해보세요.

const numbers = [1, 2, 3, 4];
numbers.push(5);

console.log(numbers);


// ### 10. **배열에서 요소 제거하기 (`pop`)** (난이도: 쉬움)

// - `colors` 배열에서 마지막 요소를 제거하세요.


const colors = ["Red", "Green", "Blue"];
colors.pop();
console.log(colors);


// ### 11. **배열 첫 번째 요소 제거하기 (`shift`)** (난이도: 쉬움)

// - `days` 배열의 첫 번째 요소를 제거하세요.


const days = ["Monday", "Tuesday", "Wednesday"];
days.shift();
console.log(days);

// ### 12. **배열 앞에 요소 추가하기 (`unshift`)** (난이도: 쉬움)

// - `names` 배열의 맨 앞에 "Alice"를 추가하세요.


const names = ["Bob", "Charlie"];
names.unshift("Alice");
console.log(names);


// ### 13. **배열을 순회하며 값 출력하기 (`forEach`)** (난이도: 중간)

// - `numbers` 배열의 각 요소를 `forEach`를 사용하여 출력하세요.


const numbers2 = [1, 2, 3];
numbers2.forEach(function(num){
    console.log(num);
});

// ### 14. **배열을 두 배로 변환하기 (`map`)** (난이도: 중간)

// - `numbers` 배열의 각 요소를 2배로 변환한 새로운 배열을 만드세요.


const numbers3 = [1, 2, 3, 4];
const doubled = numbers3.map(function(num){
    return num * 2;
})

console.log(doubled);

// ### 15. **배열 필터링하기 (`filter`)** (난이도: 중간)

// - `ages` 배열에서 18세 이상인 숫자만 필터링하세요.


const ages = [12, 18, 20, 14, 25];
const adults2 = ages.filter(function(age){
    return age >= 18;
});

console.log(adults2);

// ### 16. **배열 합계 구하기 (`reduce`)** (난이도: 중간)

// - `prices` 배열의 합계를 구하세요.


const prices = [10, 20, 30, 40];
const sum = prices.reduce(function(total,pri) {
    return total + pri;
},0);

console.log(sum);

// ### 17. **배열에 특정 값이 있는지 확인하기 (`includes`)** (난이도: 쉬움)

// - 아래 배열에 "Banana"가 포함되어 있는지 확인하세요.

const fruits4 = ["Apple", "Orange", "Grapes"];

const incBanana = fruits4.includes("Banana");

console.log(incBanana); 


// ### 18. **배열 정렬하기 (`sort`)** (난이도: 중간)

// - `numbers` 배열을 오름차순으로 정렬하세요.

const numbers5 = [5, 2, 8, 1, 3];

numbers5.sort(function(a, b){
    return a - b;
});

console.log(numbers5);

// ### 19. **배열 뒤집기 (`reverse`)** (난이도: 쉬움)

// - `letters` 배열을 뒤집어보세요.

const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);

// ### 20. **배열 일부 잘라내기 (`slice`)** (난이도: 중간)

// - `animals` 배열에서 첫 번째와 두 번째 요소를 잘라내어 새로운 배열을 만드세요.

const animals = ["Cat", "Dog", "Elephant", "Lion"];
const sliced = animals.slice(2, 4);

console.log(sliced);


// ### 21. **배열 요소 추가 및 제거하기 (`splice`)** (난이도: 중간)

// - `fruits` 배열의 두 번째 위치에 "Strawberry"를 추가하세요.

const fruits5 = ["Apple", "Banana", "Orange"];

fruits5.splice(1, 0, "Strawberry");

console.log(fruits5);


// ### 22. **배열 두 개 합치기 (`concat`)** (난이도: 쉬움)

// - `arr1`과 `arr2` 배열을 합쳐 새로운 배열을 만드세요.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);

console.log(arr3);


// ### 23. **조건을 만족하는 첫 번째 요소 찾기 (`find`)** (난이도: 중간)

// - `products` 배열에서 가격이 100 이상인 첫 번째 상품을 찾으세요.


const products = [
  { name: "Shirt", price: 50 },
  { name: "Shoes", price: 120 },
  { name: "Hat", price: 80 }
]

const product = products.find(function(p){
    return p.price >= 100;
});

console.log(product);

// ### 24. **모든 요소가 조건을 만족하는지 확인하기 (`every`)** (난이도: 중간)

// - `numbers` 배열의 모든 요소가 짝수인지 확인하세요.


const numbers6 = [2, 4, 6, 8];
const allEven = numbers6.every(function(num){
    return num % 2 === 0 ;
});

console.log(allEven);


// ### 25. **배열 요소 중 하나라도 조건을 만족하는지 확인하기 (`some`)** (난이도: 중간)

// - `ages` 배열의 요소 중 하나라도 21세 이상인지 확인하세요.

const ages8 = [16, 20, 18, 19];
const inc21 = ages8.some(function(age){
    return age >= 21
});

console.log(inc21);






// ______________________________________________________________________________________________________________________________________
// ### 26. **배열에 중복된 값이 있는지 확인하기** (난이도: 중간)

// - 아래 배열에 중복된 값이 있는지 확인하는 코드를 작성하세요.

const numbers7 = [1, 2, 3, 4, 2, 5];
const my_set = new Set(...[numbers7]);

console.log("numbers7.length: " + numbers7.length);
console.log("my_set.size" + my_set.size);

// +++ 아직 잘 모르겠음.,,++++


// const numbers6 = [1, 2, 3, 4, , 77, 88, 33, 44, 11, 1];
// const my_set = new Set(...[numbers6]);

// console.log("numbers6.length: " + numbers6.length);
// console.log("my_set.size: " + my_set.size);

// const checkIsThereAnyDuplicate = () => {
//   let isThere = false;

//   for (let i = 0; i < numbers6.length; i++) {
//     for (let k = i + 1; k < numbers6.length; k++) {
//       if (numbers6[i] === numbers6[k]) {
//         isThere = true;
//         console.log("numbers6[i]: " + i + " " + numbers6[i]);
//         console.log("numbers6[k]: " + k + " " + numbers6[k]);
//       }
//     }
//   }

//   return isThere;
// };

// console.log(checkIsThereAnyDuplicate());






// ### 27. **객체 배열의 속성 값을 기준으로 정렬하기** (난이도: 중간)

// - 아래 배열을 나이(`age`)를 기준으로 오름차순 정렬하세요.

const people3 = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mark", age: 35 }
];
people3.sort(function(a, b){
    return a.age - b.age
})

console.log(people3);

// ### 28. **조건을 만족하는 요소의 인덱스 찾기 (`findIndex`)** (난이도: 중간)

// - `ages` 배열에서 21세 이상의 요소의 인덱스를 찾으세요.


const ages3 = [16, 18, 22, 20];
const index = ages3.findIndex(function(a){
    return a >= 21;
});

console.log(index);

// ### 29. **배열을 문자열로 변환하기 (`join`)** (난이도: 쉬움)

// - `words` 배열을 쉼표로 구분된 문자열로 변환하세요.

const words = ["Hello", "World", "JavaScript"];
const result = words.join(", ");

console.log(result);


// ### 30. **중첩된 배열 평탄화하기 (`flat`)** (난이도: 쉬움)

// - 중첩된 배열을 평탄화하여 하나의 배열로 만드세요.

const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];
const flatarray = nestedArray.flat(2);

console.log(flatarray);