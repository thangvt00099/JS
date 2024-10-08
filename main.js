// Event Delegation: Sự kiện được giao phó từ phần tử cha => phần tử con
/*
Cách thực hiện:
	1. Thêm sự kiện vào phần tử cha
	2. Kiểm tra xem phần tử nào xảy ra sự kiện (event.target)
	3. Thực hiện công việc cần thiết
*/

let formElm = document.querySelector("#form");
let ulElm = document.querySelector("#list_item");
formElm.addEventListener("submit", function(e) {
	e.preventDefault();
	let username = document.querySelector("#username").value;
	let message = document.querySelector("#message").value;
	let liElm = document.createElement("li");
	liElm.innerText = `${username} - ${message}`;
	ulElm.appendChild(liElm);

	// reset form
	formElm.reset();
}) 

// Xóa thẻ li khi click vào, không dùng event delegation
// const liList = document.querySelectorAll("li");
// console.log(liList);

// for (let i = 0; i < liList.length; i++) {
// 	liList[i].addEventListener("click", function() {
// 		liList[i].remove();
// 	})
// }

// Vấn đề: khi thêm 1 li mới vào ul, thì li đó không có sự kiện click
// Xóa phần tử li khi click vào dùng event delegation
ulElm.addEventListener("click", function(e) {
	const li = e.target;
	// Kiểm tra xem thẻ được có phải li không
	if (li.tagName === "LI") {
		li.remove();
	}
})