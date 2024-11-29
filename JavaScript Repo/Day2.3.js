// Mantıksal Operatörler Nelerdir?

//  && : VE       || : VEYA      !: DEĞİL

let a = 5;
let b = 10;
let c;

// && ve operatörü iki adet koşulu karşılaştırır ve ikisi doğru olunca true döndürür. Eğer biri bile yanlış olursa false döner.

if(a < 6 && b > 3){
    console.log("2 karşılaştırmada doğrudur.");

}
else{
    console.log("Karışaltırmalardan en az bir tanesi yanlıştır.");
}

// || veya operatörü iki adet koşulu karşılaştırır ve en az 1 adet doğru olunca true döndürür. Eğer 2 karşılaştırmada yanlış ise olursa false döner.

if(a < 6 || b > 3){
    console.log("En az 1 adet doğru akarşılaştırma bulunmaktadır.");

}
else{
    console.log("Karşılaştırmaların 2'si de yanlıştır.");

}

// ! değil operatörü karşılaştırma yapılırken karşılaştırmanın değilini sorar.

if(a != b){ // Verilerin aynı olmadığını kontrol eder.
    console.log("Veriler farklıdır");
}