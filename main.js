// Event Bubbling
const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparent = document.querySelector("#grandparent");

child.addEventListener("click", function(e) {
	e.stopPropagation();
	console.log("Child clicked");
})

parent.addEventListener("click", function(e) {
	e.stopPropagation();
	console.log("Parent clicked");
})

grandparent.addEventListener("click", function() {
	console.log("Grand parent clicked");
})


