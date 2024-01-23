// Quizzes
// 0. Hãy viết chương trình nhập vào một chuỗi s. Nếu chuỗi s có độ dài >= 8,
// in ra màn hình console “Chuỗi này ok”.
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.
// const s = prompt('Mời bạn nhập chuỗi s');
// if (s.length >= 8) {
// 	console.log('Chuỗi này ok');
// } else {
// 	console.log('Ngắn quá, dài thêm tí nữa');
// }

// 1. Hãy viết chương trình nhập vào một số a.
// const a = Number(prompt('Nhập số a'));
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”.
// a=19
// if (a >= 18) {
// 	console.log('Đủ 18 thì quẩy tiếp');
// }else if (a >= 16) {
// 	console.log('Đợi thêm ít năm nữa');
// } else {
// 	console.log('Trẻ con');
// }
// Nếu a >= 16, in ra “Đợi thêm ít năm nữa”.
// Ngược lại, in ra “Trẻ con không được ăn thịt chó”.

// Quizzes
// 0. Hãy tính tổng các số từ 1 đến 50.
// 1,2,3,4,5,6...50 = 1+2+3+4+5+6+...+50
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
// 	sum = sum + i;
// }
// console.log(sum);

// 1. Hãy tính tổng các số chẵn từ -10 đến 50.
// let sum = 0;
// for (let i = -10; i <= 50; i++) {
// 	if (i % 2 === 0) {
// 		sum = sum + i;
// 	}
// }
// console.log(sum);
// 2. Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// 3. Hãy dùng while để in ra dãy số từ 1 đến 200.
// 4. Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’
// cho đến khi độ dài chuỗi s >= l.
// let s = prompt('Nhập chuỗi s');
// let l = Number(prompt('Nhập l'));
// while (true) {
// 	if (s.length >= l) {
// 		break;
// 	}
// 	s = s + 'a';
// }
// // for(let i = s.length; i<=l; i++){
// //     s = s + 'a';
// // }

// console.log(s);
// console.log(s.length);
// console.log(l);
// 5. Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x,
//  giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
let x;
let y;

// do {
// 	x = Number(prompt('Nhập x'));
// 	y = Number(prompt('Nhập y'));
// } while (x < 0 || y > 100 || y < x);

for (; true; ) {
	x = Number(prompt('Nhập x'));
	y = Number(prompt('Nhập y'));
	if (x >= 0 && x < y && y <= 100) {
		break;
	}
}

// for (; true; ) {
// 	if (x >= y) {
// 		break;
// 	}
// 	x = x + 1;
// 	y = y - 1;
// 	console.log('x: ', x);
// 	console.log('y: ', y);
// }

while (x < y) {
	x = x + 1;
	y = y - 1;
	console.log('x: ', x);
	console.log('y: ', y);
}
