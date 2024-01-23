const PI = 3.14;
let number = 10;

console.log(number);
console.log(PI);

try {
	number = 20;
	PI = 5;
} catch (e) {
	console.log('lỗi: ', e);
}

console.log(number);
console.log(PI);
