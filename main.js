// DOM Level 0 Event Handling
// Thuật ngữ được sử dụng để chỉ các phương pháp xử lý sự kiện từ thời kỳ đầu của DOM API
// Là phương pháp bắt sự kiện bằng cách gán trực tiếp một hàm JS cho thuộc tính sự kiện của phần tử HTML

let btnElm1 = document.getElementById("btn");

// Dùng expression function
// btnElm1.onclick = function() {
// 	alert("Bạn đã bấm vào nút");
// }

// Dùng declaration function
// function clickHandler() {
// 	alert("Bạn đã click vào button");
// }
// btnElm1.onclick = clickHandler;

// Dùng Arrow function
// btnElm1.onclick = () => {
// 	alert("Bạn đã click vào button");
// }

// Ví dụ
function mouseOver() {
	document.getElementById("message").textContent = "Mouse is over the button";
}

function mouseOut() {
	document.getElementById("message").textContent = "Mouse is out the button";
}

function setUp() {
	let btnElm2 = document.getElementById("btn2");
	btnElm2.onmouseover = mouseOver;
	btnElm2.onmouseout = mouseOut;
}

// onload - sự kiện của đối tượng window được kích hoạt khi toàn bộ trang web tải xong,
// bao gồm tất cả các tài nguyên như hình ảnh, script, stylesheet

window.onload = setUp

