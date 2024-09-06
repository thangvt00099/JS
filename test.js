// Phương thức sort()
// Khi không truyền compareFunction
let M1 = ["b", "a", "c"];
// Xem giá trị unicode dùng charCodeAt()
console.log("b".charCodeAt());
// Duyệt mảng
for (let element of M1) {
	console.log(`${element} có mã unicode: ${element.charCodeAt()}`);
}

let sortedM1 = M1.sort();
console.log(sortedM1);

// TH2: So sánh phần tử có nhiều kí tự
let M2 = ["baa", "a", "c"];
let sortedM2 = M2.sort();
console.log(sortedM2);

// Ví dụ với kí tự số => kết quả ko như mong muốn
let M3 = [10000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3);

// Khi truyền compareFunction
// TH1: compareFunction trả về giá trị < 0 => a sẽ đặt trước b
// TH2: compareFunction trả về 0 => thứ tự giữa a và b không thay đổi
// TH3: compareFunction trả về giá trị > 0 => b sẽ đặt trước a
let M4 = [9, 3, 5, 4];
console.log("Trước khi sắp xếp: ", M4);
let sortedM4 = M4.sort((a, b) => a - b)
console.log("Sau khi sắp xếp: ", sortedM4);