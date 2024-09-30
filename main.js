// https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
const baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
let container = document.getElementById("container");

// Bài toán 1: Thêm 151 ảnh
// for (let i = 1; i < 152; i++) {
// 	let newImg = document.createElement("img");
// 	newImg.src = `${baseUrl}${i}.png`;
// 	container.appendChild(newImg);
// }

// Bài toán 2: Thêm 1 khối div, trong có img, span số thứ tự ảnh
for (let i = 1; i < 152; i++) {
	let divElm = document.createElement("div");
	container.appendChild(divElm);
	let newImg = document.createElement("img");
	newImg.src = `${baseUrl}${i}.png`;
	let spanElm = document.createElement("span");
	spanElm.innerText = `#${i}`;
	divElm.append(newImg, spanElm);
}