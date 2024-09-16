// Javascript Inheritance ES6 - OOP
class School {
	constructor(ID, name, birthYear) {
		this.ID = ID;
		this.name = name;
		this.birthYear = birthYear;
	}
	calcAge(currentYear) {
		return currentYear - this.birthYear;
	}
}

// Lớp Student kế thừa lớp School (Có thêm thuộc tính và phương thức riêng)
class Student extends School {
	constructor(ID, name, birthYear, major) {
		super(ID, name, birthYear);
		this.major = major;
	}
	study() {
		console.log(`${this.name} is studying ${this.major}`);
	}
}

const p1 = new School("P1", "Thắng", 2003);
console.log(p1.ID);
console.log(p1.name);
console.log(p1.birthYear);
console.log(p1.calcAge(2024));

// Tạo đối tượng của class Student - subclass
const s1 = new Student("S001", "Trần Vũ Thắng", 2003, "Robot and Artifical Inteligence");
console.log(s1.ID);
console.log(s1.name);
console.log(s1.birthYear);
console.log(s1.major);
console.log(s1.calcAge(2024));	
s1.study();