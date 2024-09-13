// OOP - Phần 2
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

// 2. Dùng function constructor: Hàm tạo - tạo khuôn mẫu (prototype)
// Viết hoa chữ cái đầu để phân biệt với hàm thông thường
// Cách 1: function expression (ít dùng)
const SinhVien = function(fullName, ID, birthYear, homeTown) {
	this.fullName = fullName;
	this.ID = ID;
	this.birthYear = birthYear;
	this.homeTown = homeTown;

	this.showInfo = function() {
		return `${this.fullName} - ${this.ID} - ${this.birthYear} - ${this.homeTown}`;
	}
};

// Cách 2: function declaration (thường dùng)
function Student (fullName, ID, birthYear, homeTown) {
	this.fullName = fullName;
	this.ID = ID;
	this.birthYear = birthYear;
	this.homeTown = homeTown;

	this.showInfo = function() {
		return `${this.fullName} - ${this.ID} - ${this.birthYear} - ${this.homeTown}`;
	}
};

// Tạo các đối tượng cụ thể
const sv1 = new Student("Trần Vũ Thắng", "2021600099", 2003, "Hà Nội");
const sv2 = new Student("Phạm Quốc Thái", "2021612399", 2003, "Hà Nội");

// Truy cập thuộc tính và phương thức
console.log(sv1.fullName);
console.log(sv1["fullName"]);
console.log(sv1.showInfo());

// Kiểm chứng instance
let abc = 5;
console.log(sv1 instanceof Student);
console.log(abc instanceof Student);

// Thêm, sửa, xóa thuộc tính
sv2.email = "pqt26@gmail.com";
sv2.fullName = "New Name";
delete sv2.homeTown;
console.log(sv2);
