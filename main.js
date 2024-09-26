// classList
let element = document.getElementById("myElement");

// classList.add() - Thêm một lớp mới vào phần tử
element.classList.add("newClass");

// classList.contains() - Kiểm tra xem phần tử có chứa một lớp cụ thể không
console.log(element.classList.contains("newClass"))

// classList.remove() - Xóa một lớp khỏi phần tử
element.classList.remove("newClass");

// classList.replace() - thay thế một lớp cũ bằng một lớp mới
element.classList.replace("myClass", "abc")

// classList.toggle() - Loại bỏ lớp nếu đã tồn tại, thêm mới nếu chưa tồn tại
element.classList.toggle("toggleClass");

// Xem các class trong phần tử
console.log(element.classList)



