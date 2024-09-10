/**
Syntax: array.filter(function)
	function(currentValue, [currentIndex], [Array])
	1. currentValue: Giá trị hiện tại đang xử lý trong mảng
	2. currentIndex: (Tùy chọn) Chỉ số của phần tử đang xét
	3. Array: (Tùy chọn) Mảng gọi phương thức filter
 */
let number = [1, 2, 3, 4, 5];
let evenNums = number.filter(function(currentValue) {
	return currentValue % 2 === 0;
});
console.log(evenNums)