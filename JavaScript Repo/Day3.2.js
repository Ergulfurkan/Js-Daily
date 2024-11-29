// Kilo - Boy Endeksi Uygulaması.

let boy = prompt("Boyunuzu giriniz: ");
let Kilo = prompt("Kilonuzu giriniz: ");

let indeks;
if(boy > 20 && Kilo > 10){
    indeks = kilo/(boy*2);

}
else{
    alert("Gerçek dışı veri girişi")

}

if(indeks < 18,5){
    console.log("İdealin altında bir kilodasınız");
}
else if(indeks >= 18.5 && indeks <= 24.9){
    console.log("İdeal kilodasınız");
}
else if(indeks >= 25 && indeks <= 29){
    console.log("İdealin üstünde bir kilodasınız");
}
else if(indeks >= 30 && indeks <= 39.9){
    console.log("İdealin çok üstünde bir kilodasınız (obez)");
}
else if(indeks > 40){
    console.log("Morbid Obezsiniz");
}
