// // Kiểm tra xem các số sau có phải số nguyên tố không

// function checkSoNguyenTo(number) {
// 	let count = 0;
// 	for (let i = 1; i <= number; i++) {
// 		if (number % i === 0) {
// 			count++;
// 		}
// 	}
// 	if (count === 2) {
// 		console.log(number, ' là số nguyên tố');
// 	} else {
// 		console.log('Đây không phải số nguyên tố');
// 	}
// }

// // 1
// checkSoNguyenTo(1);
// // 2
// checkSoNguyenTo(2);
// // 3
// checkSoNguyenTo(3);
// // 4
// checkSoNguyenTo(4);
// // 5
// checkSoNguyenTo(5);
// // 6
// checkSoNguyenTo(6);
// // 7
// checkSoNguyenTo(7);
// // 8
// checkSoNguyenTo(8);
// // 9
// checkSoNguyenTo(9);

// function add(number1, number2) {
// 	let sum = number1 + number2;
// 	console.log('Hello đây là trong hàm');
// 	return sum;
// }
// console.log(add(1, 2));

// Quizzes
// 1. Khai báo 1 function nhận đầu vào là chuỗi name,
// thực hiện in ra màn hình “Hello world, ” + name.
// const ten = 'Tiến';
// function logger(name) {
// 	console.log('Hello world, ', name);
// }
// logger(ten);
// 2. Khai báo 1 function nhận đầu vào là 2 số a, b.
// Đầu ra là kết quả của phép tính (a + b)^2 .
// function cal(a, b) {
// 	return (a + b) ** 2;
// }
// console.log(cal(2, 4));
// 3. Khai báo 1 function để nhập vào a từ bàn phím,
// tiếp tục nhập đến khi a là một số lớn hơn 0.
// Đầu ra là giá trị số vừa nhập.

function inputNumber() {
	let a = -1;
	while (a <= 0) {
		a = prompt('Nhập a');
	}

	return a;
}
console.log(inputNumber());
