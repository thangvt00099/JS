// Clone M2 từ M1 dùng toán tử spread(...)
let M1 = [1, 2, 3];
let M2 = [...M1];
console.log(M2);

M2[0] = 99;
console.log("Mảng M2 = " + M2);
console.log("Mảng M1 = " + M1);

// Truyền đối số vào hàm
function sum(a, b, c) {
	return a + b + c;
}
let numbers = [1, 2, 3];
let result = sum(...numbers);
console.log(result);

// Kết hợp mảng
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combineArr = [...arr1, ...arr2];
console.log(combineArr);

// Tạo mảng mới
let M3 = [1, 2, 3];
let M4 = [...M3, 4, 5, 9];
console.log(M4);

// Chuyển iterable thành mảng
let myName = "jacky";
let chars = [...myName];
console.log(chars);
