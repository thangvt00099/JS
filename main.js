// Keyboard events and event object
const inp = document.querySelector("#inp");
// inp.addEventListener("keydown", function() {
// 	console.log("KEYDOWN!")
// })

// inp.addEventListener("keyup", function() {
// 	console.log("KEYUP!")
// })

// Event object
// inp.addEventListener("keydown", function(e) {
// 	console.log(e);
// })

document.addEventListener("keydown", function(e) {
	if (e.code === "KeyR") {
		document.body.style.backgroundColor = "cyan";	
	}
})

