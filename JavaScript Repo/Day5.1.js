//Element İşlemleri Nelerdir?
const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");

const card = document.querySelector(".card");

let value;

//Erişim için Parent-Child ile erişim sağlamak.

value = todoList;
value = todoList.children[0]; // İlk indeksteki çocuğu getirir.
value = todoList.children[3]; // Son çocuğu çağırır yani 3. indeksi.
value = todoList.children[todoList.children.length-1];// Son çocuğu çağır.

value = Array.from(todoList.children); // Çocukları dizi içerisine atarız.

value.forEach(function(todo){
    console.log(todo.textContent); // İçeriklerin textlerini sırayla yazdırır.

})

// Çocuktan Anneye erişim.
value = todo;
value = todo.parentElement; // Kaç kez üst kısmına erişim istersek o kadar .parentElement ekleriz.

//Kardeşler arası erişim.
value = todo;
value = todo.nextElementSibling.nextElementSibling; // Sıra ile kardeşler arası gezeriz.
value = todo.previousElementSibling; // Bir önceki kardeşe erişim sağlarız.

//Spesifik arama sağlama işlemi.

value = row.children[0].children[3].children[0]; // Row'un ilk çocuğunun 4. çocuğunun ilk çocuğuna erişiriz.
value = row.children[0].children[3].children[0] = "Başlığı Değiştir."; // Başlığı değiştirmemizi sağlar.

//Dinamik olarak element oluşturma.

const cardBody = document.querySelectorAll(".card-body")[1];

console.log(cardBody);

const link = document.createElement("a"); // element oluştur ve etiket olsun.
link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "Link adresi veriyoruz";
link.target = "_blank";
link.innerHtml = "Kişisel Web siteme git";

cardBody.appendChild(link); // Hazırladığımız elementi eklemek için append() fonksiyonu kullanılır.

//Element silme.
const todoListe = document.querySelectorAll(".list-group");
const todos = document.querySelector(".list-group-item");
todos[0].remove(); // ilk çocuğu sil.

todos.removeChild(todos[0]);//remove yerine removeChild fonksiyonu da kullanılabilir.

