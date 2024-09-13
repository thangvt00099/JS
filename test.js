// Sử dụng let hay const để khai báo đối tượng
// Khai báo đối tượng sử dụng let
let person = {
	name: "Trần Vũ Thắng",
	age: 30
};
person = 5;
console.log(person);

// Khai báo đối tượng sử dụng const
const person2 = {
	name: "Trần Vũ Thắng",
	age: 30
};
// person2 = 5;
console.log(person2);

// Vẫn thêm, sửa, xóa thuộc tính bình thường
// Chỉ không ghi đè lại được đối tượng
person2.isAdmin = true;
console.log(person2);

