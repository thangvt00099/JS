/**
Syntax: reduce(function, [initialValue])
1. function: Một hàm để thực thi cho từng phần tử trong mảng
2. initialValue: Giá trị khởi tạo
 */

// Bài toán khi không dùng reduce()
let M1 = [1, 2, 3];
let sum = 0;
for (let element of M1) {
	sum += element;
}
console.log(sum);

/**
accumulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm
currentValue: Giá trị hiện tại đang được xử lý trong mảng
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý
array: (Tùy chọn) Mảng đang được reduce - chính là cái mảng đang gọi reduce()
 */

/**
1. Tham số thứ 2: initialValue giá trị khởi tạo của accumulator ban đầu
2. Nếu bỏ trống initialValue:
	a. accumulator: tích lũy sẽ lấy giá trị đầu tiên trong mảng làm giá trị khởi tạo,
	và sẽ bắt đầu thực hiện từ phần tử thứ 2.
	b. Nếu mảng bỏ trống mà 0 có giá trị initialValue => reduce() báo lỗi
 */
// Khi dùng reduce()
let sum2 = M1.reduce(
	(accumulator, currentValue, currentIndex, array) => {
		return accumulator + currentValue;
	}
);
console.log(sum2)

// Rút gọn
let sum3 = M1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum3);