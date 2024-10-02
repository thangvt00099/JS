// Event JS - addEventListener
// Sử dụng để gọi hàm khi mà sự kiện được chỉ định xảy ra
// Có thể thêm cùng 1 sự kiện nhiều lần trên 1 phần tử
/*
Syntax: element.addEventListener(event, function, options)
Trong đó:
	element: Phần tử muốn thêm sự kiện
	event: tên sự kiện
	function: hàm xử lý sự kiện
	options: tùy chọn
*/
const btn = document.getElementById("btn3");

// Expression function
// btn.addEventListener("click", function() {
// 	alert("Sử dụng expression function");
// })

// Declartion function
// function clickHandler() {
// 	alert("Sử dụng declaration function");
// }
// btn.addEventListener("click", clickHandler);

// Arrow function
// btn.addEventListener("click", () => {
// 	alert("Sử dụng arrow function");
// })

const btn4 = document.getElementById("btn4");
function clickHandler1() {
	alert("Đây là sự kiện 1!")
}

function clickHandler2() {
	alert("Đây là sự kiện 2!")
}
// btn4.addEventListener("click", clickHandler1);
// btn4.addEventListener("click", clickHandler2);

// DOM Level 0 Event Handling bị ghi đè
// btn4.onclick = clickHandler1;
// btn4.onclick = clickHandler2;

// Xóa event
// btn4.removeEventListener("click", clickHandler1);

// Xử lí sự kiện với options
btn4.addEventListener("click", clickHandler1, {once: true});
btn4.addEventListener("click", clickHandler2);
