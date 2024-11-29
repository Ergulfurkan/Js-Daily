//Atama Operatörleri Nelerdir?

//  = , == , ===, +=, -=, *=, /=, %=, **= ifadeleri ile tanımlanır
let a = 5;
let b = 10;
let c;

// Veri atama operatörü. = ile sağdaki veriyi soldakine atama işlemini gerçekleştirir.
a = 10;
console.log(a);

// Kontrol operatörü. == ile 2 verinin değerlerinin aynı olup olmadığını kontrol eder.
if(a == b){
    console.log("Eşittirler");
}

// Değer ve tür kontrol operatörleri. === ile 2 verinin hem değerlerini hem türlerini kontrol eder.
if(a == "10"){
    console.log("Değerleri eştir");
}

if(a === "10"){
    console.log("Değerleri ve türleri eştir");
}

else {
    console.log("Değer veya türleri eş değildir");

}

// Toplam eşittir operatörü. += ile gösterilir soldaki değerin üzerine sağdaki değeri ekler.
a += b;// a = a + b;
console.log(a); 


// Eksi eşittir operatörü. -= ile gösterilir soldaki değerden sağdaki değeri siler.
a -= b;// a = a - b;
console.log(a); 

//  Bölüm eşittir operatörü. /= ile gösterilir soldaki değeri sağdaki değere böler.
b /= a; // b = b / a
console.log(b); 

// Çarpım Eşittir operatörü. */ ile gösterilir soldaki değeri sağdaki ile çarpar.
b *= a; // b = b * a
console.log(b); 
