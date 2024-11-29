// DOM ve Seçiciler Nelerdir?
let value;

// ID ile seçmek
value = document.getElementById("IdAdresi");
console.log(value.getAttribute("id"));
console.log(value.className);

// Class ile seçmek
value = document.getElementsByClassName("ClassIsmi");
console.log(value[0]); // İlk elemanı getirir

// Tag ile seçmek
value = document.getElementsByTagName("TagIsmi");
console.log(value[0]); // İlk elemanı getirir

// querySelector ile seçmek
let button = document.querySelector("#ButtonId"); // ID ile seçer
console.log(button.textContent); // İç metni döndürür

// querySelectorAll ile seçmek
let elements = document.querySelectorAll(".ClassIsmi"); // Class ile tüm öğeleri seçer
elements.forEach((el) => console.log(el.textContent)); // Her bir öğenin metnini döndürür
