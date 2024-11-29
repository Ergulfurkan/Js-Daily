//Session Storage Nedir? Local Storage Nedir? 
//Farkları birisi kalıcı tutar birisi sayfa kapanınca sıfırlanır.

//Session storage ile değer ekleme.
sessionStorage.setItem("1","değer1");
sessionStorage.setItem("2","değer2");
sessionStorage.setItem("3","değer3");

//Değer silmek için ise removeItem ile key verilen değerleri siler.

sessionStorage.removeItem("1");

//Hepsini silmek için clear() kullanıyoruz.
sessionStorage.clear();
//Local storage için de aynı komutlar kullanılıyor.
localStorage.setItem("1", "Deger1");
localStorage.setItem("1", "Deger1");
localStorage.setItem("1", "Deger1");

localStorage.removeItem("1", "Deger1");
localStorage.clear();
