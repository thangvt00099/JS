// Getter - phương thức dùng để lấy giá trị của thuộc tính
// Setter - phương thức dùng để thiết lập giá trị cho thuộc tính
class School {
	constructor(ID, name, birthYear, scores) {
		this.ID = ID;
		this.name = name;
		this.birthYear = birthYear;
		this._scores = scores; // _ trạng thái protected - không truy cập được từ bên ngoài (chỉ là quy ước)
	}

	calAge(currentYear) {
		return currentYear - this.birthYear;
	}

	// Getter cho thuộc tính scores
	get score() {
		return this._scores;
	}

	// Setter cho thuộc tính scores
	set score(scores) {
		if (scores >= 0 && scores <= 100) {
			this._scores = scores;
		} else {
			console.log("Điểm số không hợp lệ");
		}
	}
}

const s1 = new School("S01", "John", 2003, 9);
console.log(s1.ID);
console.log(s1.name);
console.log(s1.birthYear);

// Sử dụng getter
console.log(s1.score);

// Sử dụng setter
s1.score = 90;
console.log(s1.score);
