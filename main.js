// Event Bubbling - stopPropagation
// stopPropagation - ngăn chặn sự kiện ra các thẻ cha, không ngăn ngừa sự kiện của 1 element
// stopImmediatePropagation - ngăn chặn sự kiện của cùng 1 element
// capturing - ngược lại bubbling
const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

// child.addEventListener("click", function(e) {
// 	console.log("Child clicked");
// }, {capture: true})

// parent.addEventListener("click", function(e) {
// 	console.log("Parent clicked");
// }, {capture: true})

// grandparent.addEventListener("click", function() {
// 	console.log("Grand parent clicked");
// }, {capture: true})

child.addEventListener("click", function(e) {
	e.stopPropagation();
	console.log("Clicked")
})

child.addEventListener("click", function(e) {
	e.stopPropagation();
	console.log("Clicked-2")
})


