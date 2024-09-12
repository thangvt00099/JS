// Object JS Method - Phần 1
// Một số phương thức có sẵn trong JS
// 1. Object.keys(obj) => phương thức trả về 1 mảng chứa các key của đối tượng
let person = {
	name: "Trần Vũ Thắng",
	age: 21
};
let keys = Object.keys(person);
console.log(keys);

// 2. Object.values(obj) => phương thức trả về 1 mảng chứa các giá trị của đối tượng
let person2 = {
	name: "Trần Vũ Thắng",
	age: 21
};
let values = Object.values(person2);
console.log(values);

// 3. Object.entries(obj) => phương thức trả về 1 mảng chứa các cặp key-value của đối tượng dưới dạng mảng con
let person3 = {
	name: "Trần Vũ Thắng",
	age: 21
};
let entries = Object.entries(person3);
console.log(entries);

// 4. Object.assign(target, source) => sao chép các thuộc tính từ 1 hoặc nhiều đối tượng nguồn(source) vào một đối tượng đích(target)
let target = {
	c: 100
};
let source1 = {
	a: 1
};
let source2 = {
	b: 2
};
Object.assign(target, source1, source2);
console.log(target);

// Sử dụng toán tử spread để sao chép thuộc tính
let target2 = {...source1, ...source2};
console.log(target2);