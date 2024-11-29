//Klavye Eventleri 

// 3 adet genel kullanımı vardır keypress, keydown, keyup

document.addEventListener("keypress", basıldı);
function basıldı(e){
    console.log(e.key +" tuşa Tıklandı");    
}

//keypress sadece char tuşları alırken keydown her tuş basışında çalışır
//keyup ise basılıp kaldırılıcağı zaman fonksiyon gerçekleşir,

document.addEventListener("keyup", basıldıçekildi);
function basıldıçekildi(e){
    console.log(e.key + "Tıklandı kaldırıldı");    
}
