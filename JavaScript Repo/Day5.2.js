//Event Olayları Nelerdir?

//Event olayları belli koşullar sağladığında belli etkinlikler gerçekleşmesidir
//Bir kaç farklı şekli bulunur. Bu uygulamar HTML içerisinde de tanımalanabilir.

const buttonId = document.getElementById("ButonId");//Buton Id si alıyoruz
const baslikId = document.querySelector("#BaslikId"); // Aynı Id alma işlemi ama query metodu ile.

console.log(buttonId);
console.log(baslikId);

function tıklandı(){
    baslikId.textContent = "Baslik değişti";
}

//Bunun yerine bir adet fonksiyon yazılıp ayrıca çağrılabilir Html dışından da

buttonId.addEventListener("click",function(){
    baslikId.textContent = "Baslik değişti 2. metotla";
})
// Bir fonksiyon yazılıp o da atanabilir eylemin çıktısına.
buttonId.addEventListener("click", tıklandı);
