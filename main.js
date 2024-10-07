// Input & Change Events
// change event: sự kiện xảy ra khi giá trị thay đổi và mất focus
const inputElm = document.querySelector("#name");
// inputElm.addEventListener("change", function(e) {
// 	console.log(e.target.value);
// })

// input event: một sự kiện mà trình duyệt kích hoạt khi người dùng thực hiện
// bất kỳ hành động nhập liệu nào trên 1 phần tử HTML
inputElm.addEventListener("input", function(e) {
	console.log(e.target.value);
	const hiElm = document.querySelector("#hi");
	hiElm.textContent = e.target.value;
})

