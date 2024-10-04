// PreventDefault - Form Events
// Ngăn chặn hành vi mặc định của sự kiện
const form = document.querySelector("#login");
const userName = document.querySelector("#name");
const ulElm = document.querySelector("#list");
const passWord = document.querySelector("#password");

form.addEventListener("submit", function(e) {
	e.preventDefault();	
	const liElm = document.createElement("li");
	liElm.innerText = userName.value;
	ulElm.appendChild(liElm);
	userName.value = "";
	passWord.value = "";
})

const aElm = document.querySelector("a");
aElm.addEventListener("click", function(e) {
	e.preventDefault();
	console.log("Link đã được click!");
})

