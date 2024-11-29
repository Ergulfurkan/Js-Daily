//Diziler Nelerdir?

//Elinizdeki verilerin kullanımını ve depolanmasını kolaylaştıran yapılardır. Birden fazla veri ve veri çeşidi saklayabilme özelliğine sahiptirler.

let öğrenci1 = "Ayşe";
let öğrenci2 = "Ahmet";
let öğrenci3 = "Ali";

// Veriler tek tek değişkenlere atanması hem hafıza yönetiminde sıkıntı çıkarabilceği hem de oldukça zor bir yazıma sahip olduğu için bunun yerine diziler kullanırız.

let dizi1 = ["Ayşe","Ahmet","Ali"];
console.log(dizi1);

// Dizilerde veriler indeks yapısı ile ulaşılır. Ancak indeksler 0 dan başlar.
console.log(dizi1[0]); // Ayşe çıktısını bize verir.

dizi1[0] = "Fatma"; // Artık 0. indekste Ayşe yerine Fatma yazıyor.

let length = dizi1.length;// .length ile dizimizin uzunluğunu öğrenebiliriz.
console.log(length);

dizi2 = ["Furkan"];

dizi1.push(...dizi2);// Push ile dizimizin içerisine 2. bir dizi ekleyebiliriz.
console.log(dizi1);

// Dizi sadece veriTipi veriAdı = diziVerileri şeklinde tanımlanmayabilir. Nesne oluşturarak oluşturmakda bir seçenektir.
let dizi3 = new Array();

// forEach döngüsü nedir? Bu döngüd izilerde kullanılan ve elemanların arasında işlem yapmamızı sağlayan döngüdür.
dizi1.forEach(function(indeks) { // Önce fonksiyon içerisine indeks tanımlanır. Bu indeks baştan sonra sırayla bütün indeks değerlerini akır
    console.log(indeks); // İndeks değeri ile de burda işlemler yapılır. Örn. Dizinin yazdırılması.
});

//Dizi Metotları Nelerdir?

//Push, pop, splice, join, concat, slice, reverse, split, indexOf, includes

//Push dizinin sonuna istenilen değeri ekler.
let öğrenciler = ["Furkan", "Emir", "Enes", "Aziz"]

öğrenciler.push("Emre"); // Emre dizinin sonuna eklendi.
console.log(öğrenciler);

// Pop dizinin sonundan eleman siler

öğrenciler.pop();
console.log(öğrenciler); // son eleman olan Emre diziden silindi.

//Splice ise bize istediğimiz indekse istediğimiz veriyi ekleme imkanı sağlıyor.

öğrenciler.splice(1, 0, "Ali"); // 1. parametre verimiz ekleniceği indeks adresidir. 2. parametre o adresten sonra kaç adet veri silinmesi istendiğidir. 3. parametre ise eklenicek veridir.
//Artık dizinin 1. indeksi Ali ismidir, 1. den sonrakiler 1 indeks sağa kayar.
console.log(öğrenciler);

//join ile veriler string olarak birleştirilir ancak veriler arasına istenilen ekleme yapılabilir.
let stringÖğrenciler = öğrenciler.join("-");
console.log(stringÖğrenciler); // Veriler birleştirildi aralarında çizgi konuldu.

//Concat metodu 2 diziyi birleştirilmesini sağlar.
let diziIlk = [1, 2, 3];
let dizi2Ikinci = [4, 5, 6];
let birlesikDizi = dizi1.concat(dizi2);

console.log(birlesikDizi); // [1, 2, 3, 4, 5, 6]

//Slice metodu ile bulunan dizi parçaya ayrılır
let ayrikDizi = öğrenciler.slice(2,4) // 2. indeksten başla ve 4. indekse kadar ayır.
console.log(ayrikDizi);

//Reverse metodu ile diziyi tersine çeviririz.
let tersDizi = öğrenciler.reverse();
console.log(tersDizi);

//indexOf elemanın indexini çevirir.
console.log(öğrenciler.indexOf("Furkan"));

//includes dizi içerisinde aradığımız veri olup olmadığını kontrol ederiz.,
let trueOrFalse = öğrenciler.includes("Furkan"); // Değer olarak true ya da false döndürür.
console.log(trueOrFalse);
