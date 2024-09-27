// DOM appendChild
/*
1. Chỉ thêm được đối tượng Node
2. Trả về phần tử vừa thêm
3. Chỉ thêm được 1 phần tử mỗi lần gọi
*/

let parentElm = document.querySelector("#header");

let pElm = document.createElement("p");
pElm.textContent = "Một con vịt xòe ra 2 cái cánh"
pElm.style.color = "green";
pElm.setAttribute("Class", "doan_van");

parentElm.appendChild(pElm);
console.log(parentElm.appendChild(pElm))

let h3Elm = document.createElement("h3");
h3Elm.textContent = "Đây là thẻ h3 mới thêm";
parentElm.append(pElm, h3Elm, "Đây là văn bản mới thêm");

let btn = document.createElement("button");
btn.textContent = "Click me";

let addBtn = parentElm.appendChild(btn);
addBtn.addEventListener("click", function() {
	alert("Bạn đã click vào đây!");
})



