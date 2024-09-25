// DOM - textContent, innerHTML, innerText

let element = document.getElementById("demo");

// textContent - Trả về nội dung nằm bên trong phần tử, bao gồm cả khoảng trắng, tab xuống dòng,...
console.log("textContent: ");
console.log(element.textContent);

// innerText - Trả về văn bản mà người dùng có thể nhìn thấy trên trình duyệt, loại bỏ các phần tử được ẩn bằng CSS
console.log("innerText: ");
console.log(element.innerText);

// innerHTML - Trả về toàn bộ nội dung HTML của phần tử, bao gồm cả các thẻ HTML và cấu trúc của chúng
console.log("innerHTML: ");
console.log(element.innerHTML);

let element2 = document.getElementById("demo2");
element2.innerHTML = "<p><i>Tuhoc.cc</i></p>";
element2.textContent = "<p><i>Tuhoc.cc</i></p>";


