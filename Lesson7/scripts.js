// if(condition || truthy){
//     // code if
// }

// condition => true => code if sẽ được thực thi
// condition => false => code if sẽ KHÔNG được thực thi

// const age = 19;
// if (age > 18) {
// 	console.log('Bạn đã trưởng thành');
// }

// const score = 9;
// if (null) {
// 	console.log('Học sinh giỏi');
// }
// falsy => gồm các giá trị <=> false
// 0
// ''
// null
// undefined
// NaN (not a number)

// truthy => gồm các giá trị <=> true

// if(condition){
// code if
// } else{
// code else
// }

// =>condition => true => code if sẽ được thực thi
// =>condition => false => code else sẽ được thực thi

// const score = 7.9;
// if (score >= 8.0) {
// 	console.log('Học sinh giỏi');
// } else {
// 	console.log('Bạn chưa đủ điểm để đạt học sinh giỏi');
// }

// In ra màn hình hôm nay là thứ mấy trong tiếng anh
// let day = 6;

// switch (day) {
// 	case 2:
// 		console.log('Monday');
// 		break;
// 	case 3:
// 		console.log('Tuesday');
// 		break;
// 	case 4:
// 		console.log('Wednesday');
// 		break;
// 	case 5:
// 		console.log('Thursday');
// 		break;
// 	case 6:
// 		console.log('Friday');
// 		break;
// 	case 7:
// 		console.log('Saturday');
// 		break;
// 	case 8:
// 		console.log('Sunday');
// 		break;
// 	default:
// 		console.log('Not found');
// 		break;
// }

// Nhập 2 số từ bàn phím, và khởi tạo 1 biến sum
// => nếu tổng số 2 số nhập > 10 thì
// gán cho biến sum giá trị = 10
// => nếu tổng 2 số vừa nhập <= 10 thì
// gán cho biến sum giá  trị là tổng của 2 số đó

// prompt(message, initValue)
// let a = prompt('Mời bạn nhập giá trị a: ');
// a = Number(a);
// let b = prompt('Mời bạn nhập b:');
// b = Number(b);
// let sum;
// console.log('a + b: ', a + b);
// if (a + b > 10) {
// 	sum = 10;
// } else {
// 	sum = a + b;
// }

// condition ? code true : code else
// let sum = a + b > 10 ? 10 : a + b;

// console.log(sum);

// In ra màn hình các số từ 1-5
// for (let i = 1; i <= 5; i++) {
// 	console.log(i);
// }
// let i = 1;
// while (i <= 5) {
// 	console.log(i);
// 	i++;
// }

// In ra màn hình các số từ -10 đến 20
// for (let i = -10; i <= 20; i++) {
// 	console.log(i);
// }
// let a = -10;
// while (a <= 20) {
// 	console.log(a);
// 	a++;
// }

// In ra màn hình các số chẵn từ -31 đến 53
// for (let i = -31; i <= 53; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }
// let b = -31;
// while (b <= 53) {
// 	if (b % 2 === 0) {
// 		console.log(b);
// 	}
// 	b++;
// }

// In ra màn hình các số chia hết cho 3 trong đoạn từ 100 về 0
// for (let i = 100; i >= 0; i = i - 1) {
// 	if (i % 3 === 0) {
// 		console.log(i);
// 	}
// }
// let c = 100;
// while (c >= 0) {
// 	if (c % 3 === 0) {
// 		console.log(c);
// 	}
// 	c--;
// }

for (let i = 1; i <= 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}
