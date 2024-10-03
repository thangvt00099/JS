const btn = document.querySelector("#btn");
const h1Elm = document.querySelector("#title");
function changeColor() {
	const redColor = Math.floor(Math.random() * 256);
	const greenColor = Math.floor(Math.random() * 256);
	const blueColor = Math.floor(Math.random() * 256);
	return `rgb(${redColor},${greenColor},${blueColor})`;
}

btn.addEventListener("click", function() {
	document.body.style.backgroundColor = changeColor();
	h1Elm.textContent = changeColor();
})
