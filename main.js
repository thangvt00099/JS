// DOM
// 1. removeChild - xóa phần tử con
// Syntax: parentElm.removeChild(childElement)
let childElm = document.querySelector("#item2");
let parent = document.querySelector("#list");
parent.removeChild(childElm);

// Không cần lấy phần tử cha, ngắn gọn hơn
let childElm2 = document.querySelector("#item3");
childElm2.parentElement.removeChild(childElm2);

// 2. remove
// Syntax: element.remove()
let childElm3 = document.querySelector("#item4");
childElm3.remove();




