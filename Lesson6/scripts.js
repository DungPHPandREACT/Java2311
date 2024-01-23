let number1 = 9;
let number2 = 2;

// console.log(number1 + number2); //11
// console.log(number1 - number2); // 7
// console.log(number1 * number2); // 18
// console.log(number1/number2); // 4.5
// console.log(number1**number2); //81
// console.log(number1%number2); //1

// number1 = number1 + 10;
// number1 += 10;
// number1 = number1 - 5;
// number1 -= 5;
// number1 = number1 * number2;
// number1 *= number2;
// number1 = number1 / 3;
// number1 /= 3;
// console.log(number1); //19

// let x = 'Hello';
// let y = 'World';
// console.log(x + ' ' + y);

let a = 10;
let b = 20;
let c = '10';
// So sánh bằng
// console.log(a === b); // false
// console.log(b === c); // false
// console.log(c == a); // true
// console.log(c === a); // false

// So sánh không bằng
// console.log(a != b); //true
// console.log(b != c); //true
// console.log(c != a); //false
// console.log(a !== b); //true
// console.log(b !== c); //true
// console.log(c !== a); //true

// console.log(a < b); // true
// console.log(a > b); // false
// console.log(a < 10); // false
// console.log(a <= 10); // true


// const PI;

// 1. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// x = true, y = true, z = false

// x && y && z → false
// x && y && !z → true
// (x && y) || z → true
// (x && y) || !z → true
// x && (y || z) → true
// x && !(y || z) → false
// x && (y || !z) → true
// x && (!y || z) → false

// 2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// name = 'AAA', age = 20, isGood = true

// age + 10 = 30
// age % 3 = 2
// name + ' BBB' = 'AAA BBB'
// !isGood = false
// name == 'aaa' && age >= 20 → false
// name != 'aaa' && isGood → true
// !(age < 10) && !isGood → false

// 3. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
// a = 10, b = 20, c = 30, d = '40'
// a + b + c = 60
// a - b / c = 10 - 2/3 = 9.3333
// a - (b * c) = 10 - 600 = -590
// d - (a * b) - c = '40' - 200 - 30 = -190
// a + b + c + d = 60 + '40' = '6040'
// d + a + b + c = '40102030'
// d + a - b + c = '40' + 10 - 20 + 30 = '4010' - 20 + 30 = 4020
// a - b + d - c = 10 - 20 + '40' + 30 = -10 + '40' - 30 = -1070
// d - c + a - b = '40' - 30 + 10 - 20 = 0
// a * b + d * c = 10 * 20 + '40' * 30 = 1400