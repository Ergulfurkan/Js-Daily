// Tür Dönüşümleri Nelerdir?

// Strings, Numbers, Booleans, Undefined , Null, Object ve Function.

let a = 5 ;
let b = "10" ;

console.log(a + b); // Bize 510 değerini döndürür.

// String veri tipini number veri tipine dönüştürmek için aşağıdaki işlem uygulanır.
let c = Number(b);

console.log(a + c); // 15 yazar çünkü c değişkeni b'nin sayı şeklinde davranmasunu sağlar.

//Bu çevrimi bir diğer şekilde ise parseInt() kullanarak yapılır.

let d = parseInt("120"); // String tanımlamış olsak dahi bu fonksiyon sayesinde 120 integer yani tam sayı olarak davranır.
console.log(typeof(d)); // typeof komutu ile değişkenlerimizin cinsini öğrenebiliyoruz.

let e = parseFloat("12.5") // String tanımımızı bu sefer float cinsine çeviriyoruz.
console.log(e); 

//Tam tersini ise String() fonksiyonu ile yapıyoruz. Yani verdiğimiz bir sayıyı yazı cinsine çeviriyoruz.
let x = String(55);
let cümlemiz = "Sayımız = " + x;

console.log(typeof(cümlemiz));
console.log(cümlemiz);
