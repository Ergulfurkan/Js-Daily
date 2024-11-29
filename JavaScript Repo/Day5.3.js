//Mouse Eventler Nelerdir?

//DOMContentLoaded ile sayfa yüklendiğini kontrol edip bir işlem yaptırabiliriz.

document.addEventListener("DOMContentLoaded", Alert);

function Alert(){
    console.log("Sayfa yüklendi");
}

//Click ile tıklandığı zaman fonksiyonu gerçekleştirir.

const buttonId = document.getElementById("ButonId");//Buton Id si alıyoruz
const baslikId = document.querySelector("#BaslikId"); // Aynı Id alma işlemi ama query metodu ile.

function basıldı(){
    console.log("Tıklandı");    
}

buttonId.addEventListener("click", basıldı);

//mouseover ve mouseout ile fare üzerinde ya da değilken yapılcak fiilleri tanımlar

buttonId.addEventListener("mouseover", üstünde);
function üstünde(){
    console.log("üstünde");    
}

buttonId.addEventListener("mouseout", üstündeDegil);
function üstündeDegil(){
    console.log("üstünde değil");    
}

