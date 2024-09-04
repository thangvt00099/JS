/**
Giới thiệu một số hàm built-in
	1. Alert - Hiện ra thông báo
	2. Console - In ra cửa sổ Console
	3. Confirm - Hiện ra thông báo để xác nhận
	4. Prompt - Hiện ra thông báo có thể nhập (alert + confirm)
	5. Set timeout - Cho 1 đoạn code chạy trong 1 khoảng thời gian - chỉ chạy 1 lần
	6. Set interval - giống setTimeout nhưng chạy liên tục
 */

/**
Giới thiệu về toán tử trong JS
1. Toán tử số học - Arithmetic
2. Toán tử gán - Assigment
3. Toán tử so sánh - Comparison
4. Toán tử logic - Logical
 */

/**
Kiểu dữ liệu trong JS
1. Dữ liệu nguyên thủy - Primitive Data
	- Number
	- String
	- Boolean
	- Undefined
	- Null 
	- Symbol
2. Dữ liệu phức tạp - Complex Data
	- Function
	- Object
 */

/**
1. Length => kiểm tra độ dài chuỗi
2. Find Index => tìm vị trí kí tự cần tìm trong chuỗi(), search()
3. Cut string => dùng methods slice()
4. Replace => dùng methods replace()
5. Convert to uper case
6. Convert to lower case
7. Trim => trim() xóa khoảng trắng thừa mà người dùng nhập dữ liệu vào
8. Split => convert chuỗi sang mảng dựa vào điểm chung
9. Get a character by index => charAt() lấy vị trí của một kí tự trong chuỗi
 */
// var myString = 'Trần Vũ Thắng';
// var myString2 = '   Trần Vũ Thắng    '
// console.log(myString.length);
// console.log(myString.search('Vũ'));
// console.log(myString.slice(0, 6));
// console.log(myString.replace('Trần', 'Tran'));
// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());
// console.log(myString2.trim());
// console.log(myString.split(' '));
// console.log(myString.charAt(2))

/**
Làm việc với Array

1. To string => chuyển Array sang chuỗi
2. Join => gần giống Split
3. Pop => Xóa element cuối mảng, khi mảng rỗng trả về undefined
4. Push => Thêm phần tử vào cuối mảng
5. Shift => Xóa element đầu mảng, khi mảng rỗng trả về undefined
6. Unshift => Thêm element vào đầu mảng
7. Splicing => splice() xóa 1 hoặc nhiều elements, có thể chèn
8. Concat => lối Array với Array
9. Slicing => slice(start num, end num) cắt 1 vài elements của Array
 */

// var myArr = [1, 2, 3, 4, 5];
// var myArr2 = [6, 7, 8, 9, 10 ,11];
// var string = '   ';
// console.log(myArr.toString());
// console.log(myArr.join('-'));
// console.log(myArr.pop() + string + myArr);
// console.log(myArr.push(6) + string + myArr);
// console.log(myArr.shift() + string + myArr);
// console.log(myArr.unshift(7) + string + myArr);
// console.log(myArr.splice(-2, -1, 3) + string + myArr);
// console.log(myArr.concat(myArr2));
// console.log(myArr.slice(0));

/*var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate() + 1;
var day1 = date.getDay();
console.log(`${day}/${month}/${year}`);
console.log(day1);
*/

// console.log(Math.PI); => Trả về giá trị đầy đủ của PI
// console.log(Math.round(1.3)); => Làm tròn theo kiểu quá bán (0.5)
// console.log(Math.round(1.5));
// console.log(Math.abs(-2)); => Giá trị tuyệt đối
// console.log(Math.ceil(1.2)); => Làm tròn lên
// console.log(Math.ceil(1.5));
// console.log(Math.floor(1.2)); => Làm tròn xuống
// console.log(Math.floor(1.5));
// console.log(Math.random()); => Random trong khoảng (0,1)
// console.log(Math.floor(Math.random() * 5));
// console.log(Math.trunc(1.9)); => Lấy phần nguyên của một số
// console.log(Math.sign(-4)) => Trả về -1 nếu là số âm
// console.log(Math.sign(0)) => Trả về 0 nếu là 0
// console.log(Math.sign(4)) => Trả về 1 nếu là số dương

// var myArr = ["Java", "Python", "C++"];

// for (var key in myArr) {
//   console.log(key);
// }
// for (var value of myArr) {
//   console.log(value);
// }

var myObject = {
  name: "Trần Vũ Thắng",
  age: 20,
  address: "Nam Hồng",
};

/**Cách lấy ra value của Object */

//Cách 1
// for (var key in myObject) {
//   console.log(myObject[key]);
// }

//Cách 2
// for (var key of Object.keys(myObject)) {
//   console.log(myObject[key]);
// }

//Cách 3
// for (var value of Object.values(myObject)) {
//   console.log(value);
// }

// function giaiThua(num) {
// 	if(num == 0 || num == 1){
// 		return 1;
// 	}
// 	return giaiThua(num-1)*num;
// }
// console.log(giaiThua(10));

/**Làm việc với mảng 2 - Tham số các hàm dưới đây đều là function
1. forEach() => duyệt các phần tử của mảng
2. every => dùng để kiểm tra với điều kiện tất cả đều đúng
3. some => dùng để kiểm tra với điều kiện có ít nhất 1 cái đúng
4. find => tìm kiếm, chỉ tìm ra được 1 phần tử
5. filter() => giống find nhưng trả về tất cả các phần tử thỏa mãn 
6. map()
7. reduce()
*/

// let userName = window.prompt('Tran Vu Thang');
// console.log(userName);

// function nums(num) {
// 	let results = new Array(num.length);
// 	results[0] = num[0];
// 	for (let i = 1; i < num.length; i++) {
// 		results[i] = num[i] + results[i - 1];
// 	}
// 	return results;
// }

// console.log(nums([3,1,2,10,1]));
// 

// let myFullName = 'Tran Vu Thang';

// let lastName = myFullName.slice(myFullName.lastIndexOf(" "));
// console.log(lastName)
// let age = 65;
// if(age > 18) {
// 	console.log("You are an adult");
// }
// if(age >= 65) {
// 	console.log("You are an old man");
// }

// document.getElementById("submitButton").onclick = function() {
// 	let temp;
// 	if(document.getElementById("cButton").checked){
// 		temp = document.getElementById("textBox").value;
// 		temp = Number(temp);
// 		console.log(toCelsius(temp));
// 		document.getElementById("tempLabel").innerHTML = toCelsius(temp) + "C";
// 	}else if(document.getElementById("fButton").checked){
// 		temp = document.getElementById("textBox").value;
// 		temp = Number(temp);
// 		console.log(toFahrenheit(temp));
// 		document.getElementById("tempLabel").innerHTML = toFahrenheit(temp) + "F";
// 	}else{
// 		document.getElementById("tempLabel").innerHTML = "select a unit";
// 	}
// }

// function toCelsius(temp) {
// 	return (temp - 32) * 5/9;
// }
// function toFahrenheit(temp) {
// 	return temp * 9/5 + 32;
// }

// Array.prototype.map2 = function(callBack) {
// 	var output = [], arrLength = this.length;
// 	for(var i = 0 ; i < arrLength ; i++) {
// 		var result = callBack(this[i], i, this);
// 		output.push(result);
// 	}
// 	return output;
// }


