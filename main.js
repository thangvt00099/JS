// This keyword
function randomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

const btnList = document.querySelectorAll(".btn");
// for (let btn of btnList) {
// 	if (btn instanceof HTMLElement) {
// 		btn.addEventListener("click", function() {
// 			btn.style.background = randomColor();
// 			btn.style.color = randomColor();
// 		})
// 	}
// }

const titles = document.querySelectorAll(".title");
// for (let title of titles) {
// 	if (title instanceof HTMLElement) {
// 		title.addEventListener("click", function() {
// 			title.style.background = randomColor();
// 			title.style.color = randomColor();
// 		})
// 	}
// }

function changColor() {
	this.style.background = randomColor();
	this.style.color = randomColor();
}	

for (let btn of btnList) {
	btn.addEventListener("click", changColor)
}
for (let title of titles) {
	title.addEventListener("click", changColor)
}