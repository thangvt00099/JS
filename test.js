// OOP - Phần 1

// 1. Khai báo đối tượng, literal syntax
let student = {
	// Thuộc tính
	fullName: "Trần Vũ Thắng",
	birthYear: 2003,
	address: {
		city: "Hà Nội",
		country: "Việt Nam"
	},
	scores: [8, 9, 10],

	// Phương thức
	getAge: function() {
		return 2024 - this.birthYear;
	},

	diemTrungBinh: function() {
		let sumScores = this.scores.reduce((a, b) => a + b, 0);
		return sumScores / 3;
	}
}

// Kiểm tra kiểu loại
console.log(typeof student);

// OOP - Phần 2
// 2. Truy cập thuộc tính: Dot Notation . và Braket Notation []
// 2.1 Sử dụng Dot Notation (.)
console.log(student.fullName);
console.log(student.address);
console.log(student.scores);

// 2.2 Sử dụng Braket Notation []
console.log(student["fullName"]);
console.log(student["address"]);

// let inputKey = prompt("Mời nhập key: (address, scores)");
let inputKey = "address";
if (student[inputKey]) {
	console.log(student[inputKey]);
} else {
	console.log("Key bạn nhập không tồn tại!");
}

// OOP - Phần 3
// 3.1 Truy cập phương thức
console.log(student.getAge());
console.log(student.diemTrungBinh());

// OOP - Phần 4
// 4. Thêm, xóa thuộc tính
student.email = "tranvuthang57@gmail.com";
console.log(student);
student["website"] = "http://github.com";
console.log(student);
console.log(student.email);
console.log(student.website);

// Xóa thuộc tính
delete student.email;
console.log(student);

// Sửa thuộc tính
student.website = "Changed Value";
console.log(student);