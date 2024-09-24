/**
Promise:
	- Sync: Đồng bộ
	- Async: Bất đồng bộ
	- Pain

Sync / Async:
	Sync: Chạy theo luồng từ trên xuống dưới
	Async: setTimeOut, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
Pain:
	CallBack Hell
	Pyramid of doom
 */
setTimeout(function() {
	console.log(1);
}, 1000)