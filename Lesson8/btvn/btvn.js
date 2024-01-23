// Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không
// Số nguyên tố là số chia hết cho 1 và chính nó
// 6 => 1,2,3,6 => k phải snt
// 2 => 1,2 => snt
// 8 => 1,2,4,8 => k phải snt
// 7 => 1,7 => snt
// const n = Number(prompt('Mời bạn nhập số'));
// let count = 0;
// for (let i = 1; i <= n; i++) {
// 	if (n % i === 0) {
// 		count++;
// 	}
// }

// if (count === 2) {
// 	console.log(n + ' là số nguyên tố');
// } else {
// 	console.log(n + ' không phải là số nguyên tố');
// }

// Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer.
// Nếu answer bằng correct → in ra “Đoán đúng”.
//  Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại ans
const result = Math.floor(Math.random() * 10 * 2 + 1);

let count = 5;
for (let i = 1; i <= 5; i++) {
	let answer = Number(prompt('Nhập số mà bạn dự đoán'));
	if (answer === result) {
		alert('Đoán đúng');
		break;
	} else {
		alert('Đoán sai');
	}
}
