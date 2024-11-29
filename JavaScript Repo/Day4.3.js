//Math Metotları Nelerdir?

//Floor, Ceil, Round, Max, Min, Random, Abs, Sqrt, Pow.

let sayi = 3.55;
//Floor en yakın küçük tam sayıyı değerini döndürür. Ceil ise en yakın olan büyük tam sayıyı döndürür. Rund ise en yakım tam sayıyı döndürür.
console.log(Math.floor(sayi)) // En yakın küçük tam sayı olan 3 değerini döndürür.
console.log(Math.ceil(sayi)); // En yakın büyük tam sayı olan 4 değerini döndürür.
console.log(Math.round(sayi)); // En yakın sayı olan 4'ü döndürür.

//Max dizi içerisindeki en büyük sayıyı döndürür. Min ise dizi içerisindeki en küçük tam sayıyı döndürür.

console.log(Math.max(1, 2, 3, 4, 5, 6, 7)); // En büyük olan 7 değerini döndürür.
console.log(Math.min(1, 2, 3, 4, 5, 6, 7)); // En küçük olan 1 değerini döndürür.

//Sqrt verilen sayının karekökökünü döndürür. Pow ilk verilen sayıyı taban yapıcak şekilde üstünü döndürür.

console.log(Math.sqrt(169)); // 13 değeri döner.
console.log(Math.pow(2,3)) // 2^3 değeri döner.

//Random belirli aralıktaki sayılar arasından rastgele değerler üretir.

console.log(Math.floor(Math.random()*100)); // 0 - 100 arası değerleri üretir ancak float üreticeği için biz tam sayıya çevirip kullandık.

// Abs ise değeri mutlak değere çevirir.
let negatifSayi = -10;
console.log(Math.abs(negatifSayi)); // 10 değerini döndürür.