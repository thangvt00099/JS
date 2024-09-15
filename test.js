// ES 6 Classes
// Bản chất JS không có class, Class chỉ là 1 hàm đặc biệt và tuân theo kế thừa từ Prototype
// Class không hoisted (Không tự đưa khai báo lên đầu)
// 1. Class Expression (ít dùng)
const SinhVienEx = class {

};

// 2. Class Declaration (dùng chủ yếu)
class SinhVien {
	constructor(firstName, ID, birthYear, homeTown) {
		this.firstName = firstName;
		this.ID = ID;
		this.birthYear = birthYear;
		this.homeTown = homeTown;
	}

	showInfo() {
		return `${this.firstName}/${this.ID}/${this.homeTown}`;
	}
}

// Tạo đối tượng
const stu3 = new SinhVien("Trần Vũ Thắng", 1, 2003, "Hà Nội");
const stu4 = new SinhVien("Phạm Quốc Thái", 2, 2003, "Hà Nội");
console.log(stu3);
console.log(Object.getPrototypeOf(stu3));
console.log(Object.getPrototypeOf(stu3) === SinhVien.prototype);

// Thêm phương thức vào class SinhVien
SinhVien.prototype.calAge = function(currentYear) {
	return currentYear - this.birthYear;
}
console.log(stu3.calAge(2024));
