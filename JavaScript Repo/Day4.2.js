//String Sınıfı Metotları Nelerdir?

//chartAt, concat, indexof, toUpperCase, toLowerCase, slice, replace, split, startsWith, endsWith.

let cümle = "Furkan yemek yemeye gitti.";

//charAt fonksiyonu ilen indeksteki bulunan harfi alıyoruz.
console.log(cümle.charAt(1)); // Cümlenin 1. indeksini yazdırır yani "u" harfini.

//concat ile stringimizi bqaşka bir string ile birleştiriyoruz.
let birleştirilcekCümle = "10 dakikaya geri gelicek.";
console.log(cümle.concat(birleştirilcekCümle)); // 2 cümle birleşik yazdırır.

//indexof ile istediğmiz kelimenin başlangıç indexini döndürürüz.
console.log(cümle.indexOf("yemek")); // "yemek" kelimesinin başlangıç indexini döndürür yani 7.

//toUpperCase ile cümleyi büyük harfelere çeviriyoruz.
console.log(cümle.toUpperCase());

//toLowerCase ile cümleyi küçük harfelere çeviriyoruz.
console.log(cümle.toLowerCase());

// slice ile istediğimiz indeksler arasını böleriz.
console.log(cümle.slice(0,5)); // 0-5 arası olan "Furkan" stringini yazdırır.

//replace ile cümle içerisindeki harfleri ve kelimeleri istediğimiz kelimeler ile değiştirir.
console.log(cümle.replace("Furkan","Enes")); // Furkan kelimesi yerine Enes stringini yazar.

//split ile istediğimiz referanslar aralarını bölüp bir diziye atarız.
console.log(cümle.split(" ")); // Cümleleri boşluk karakterlerinden böler ve bir dizi içerisine atar.

//startsWith stringimizin istediğimiz veri ile başlayıp başlamadığını kontrol eder.
console.log(cümle.startsWith("F")); // True döner çünkü cümlemiz büyük F ile başlar
console.log(cümle.startsWith("f"))// False döner

//endsWith stringimizin istediğimiz veri ile bitip bitmediğini kontrol eder.
console.log(cümle.endsWith(".")); // True döner çünkü cümlemiz "." ile biter
console.log(cümle.endsWith("a"))// False döner
