// Switch-Case Nedir?

// Çoklu koşul karışlaşmasıdır. Seçiminize göre size sağlıcak kod bloğu işlevi görür. Bu işlev bizlere seçimlerde nasıl davranıcağımız kolaylığını sağlar.

let input = prompt("1-3 arası bir sayı giriniz.");

switch(input){ // Burada parantez içerisinde ki verimiz kontrol sağlıyacağımız verinin kendisidir.
    case "1": // input == 1 midir?
        alert("1 girdiniz"); // Eğer 1 ise bu blok kodunu gerçekleştir.
        break; // Ardından devam etmemek için break ekliyoruz.

    case "2": // input == 2 midir?
        alert("2 girdiniz");// Eğer 2 ise bu blok kodunu gerçekleştir.
        break;

    case "3":// input == 3 müdür?
        alert("3 girdiniz"); // Eğer 3 ise bu blok kodunu gerçekleştir.
        break;    
}