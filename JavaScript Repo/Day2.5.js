// Koşul Yapıları Nelerdir?

// Genel olarak kullanımı if ve else olarak yapılır. Koşul kıyaslaması yapılıp buna göre işleme devam edilir.

if(1 > 0){
    console.log("Karşılaştırma doğru ise bu yazı konsola yazılacaktır.") // Karşılaştırma doğru olduğu için kod bu kısımdan devam eder.
}
else{
    console.log("Karşılaştırma yanlış ise bu yazı konsola yazılacaktır.")// Karşılaştırma yanlış olduğu için kod bu blok kısmını atlar.
}

// if - else if kullanımı ise else kısmına da koşul eklenerek gerçekleştirilir. 
if(1 < 0){
    console.log("1. Karşılaştırma doğrudur.");
}
else if(1){
    console.log("2. karşılaştırma doğrudur.");  
}