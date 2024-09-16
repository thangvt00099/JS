// Instance Method - Phương thức gắn với 1 thể hiện đối tượng
// Static Method - Phương thức gắn với lớp, có thể gọi mà không cần tạo thể hiện đối tượng

class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	// Instance Method
	draw() {
		console.log("Phương thức draw được gọi.");
	}

	// Static Method
	static calArea(radius) {
		return Math.PI * radius * radius;
	}
}

// Tạo đối tượng
const c1 = new Circle(10);
const c2 = new Circle(5);
c1.draw();
c2.draw();

// Gọi phương thức tĩnh
console.log(Circle.calArea(10));
console.log(Circle.calArea(5));

// Ví dụ về Static Method: Math
a = -10;
console.log(Math.abs(a));
