// Prototype trong JS
function Student (fullName, ID, birthYear, homeTown) {
	this.fullName = fullName;
	this.ID = ID;
	this.birthYear = birthYear;
	this.homeTown = homeTown;

	this.showInfo = function() {
		return `${this.fullName} - ${this.ID} - ${this.birthYear} - ${this.homeTown}`;
	}
};

const sv1 = new Student("Trần Vũ Thắng", "2021600099", 2003, "Hà Nội");
const sv2 = new Student("Phạm Quốc Thái", "2021612399", 2003, "Hà Nội");

// Kiểm tra nguyên mẫu cha mẹ của đối tượng
// 4. Xem nguyên mẫu
console.log(Object.getPrototypeOf(sv1));
console.log(Student.prototype);
console.log(Student.prototype === Object.getPrototypeOf(sv1));
console.log(Student.prototype.isPrototypeOf(sv2));

// 5. Thêm phương thức với prototype
Student.prototype.calAge = function() {
	console.log(2024 - this.birthYear);
};
console.log(sv1);

// 6. Thêm thuộc tính
Student.prototype.email = "noemail@gmail.com";
console.log(sv1.email);
console.log(sv2.email);

// Kiểm tra 1 đối tượng có trực tiếp chứa thuộc tính không
console.log(sv1.hasOwnProperty("email"));
console.log(sv1.hasOwnProperty("fullName"));