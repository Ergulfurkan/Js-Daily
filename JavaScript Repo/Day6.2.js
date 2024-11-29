//OOP Nedir?

//Sınıf tanımlamaları yaparak işlemlerin hızlı yapılmasının sağlanmasına yarar
//1. Class (Sınıf) Tanımlama
class Araba {
    constructor(marka, model, yil) {
        this.marka = marka; // Özellik (Attribute)
        this.model = model; // Özellik (Attribute)
        this.yil = yil;     // Özellik (Attribute)
    }

    bilgiYazdir() { // Metot (Method)
        return `${this.marka} ${this.model} (${this.yil})`;
    }
}

// 2. Nesne (Object) Oluşturma
const araba1 = new Araba("Toyota", "Corolla", 2020);
const araba2 = new Araba("BMW", "X5", 2022);

// 3. Metot Kullanımı
console.log(araba1.bilgiYazdir()); // Çıktı: Toyota Corolla (2020)
console.log(araba2.bilgiYazdir()); // Çıktı: BMW X5 (2022)

// 4. Kalıtım (Inheritance)
class ElektrikliAraba extends Araba {
    constructor(marka, model, yil, bataryaKapasitesi) {
        super(marka, model, yil); // Üst sınıfın (Araba) özelliklerini alır
        this.bataryaKapasitesi = bataryaKapasitesi; // Yeni özellik
    }

    bilgiYazdir() { // Metot Overriding
        return `${super.bilgiYazdir()} - Batarya: ${this.bataryaKapasitesi} kWh`;
    }
}

// 5. Elektrikli Araba Nesnesi Oluşturma
const elektrikliAraba = new ElektrikliAraba("Tesla", "Model 3", 2023, 75);

// 6. Kalıtımla Gelen ve Yeni Metot Kullanımı
console.log(elektrikliAraba.bilgiYazdir()); // Çıktı: Tesla Model 3 (2023) - Batarya: 75 kWh

// 7. Kapsülleme (Encapsulation)
class Kasa {
    #gizliBilgi = "Gizli Anahtar"; // Özel özellik

    sifreGoster() {
        return this.#gizliBilgi;
    }
}

const kasa = new Kasa();
console.log(kasa.sifreGoster()); // Çıktı: Gizli Anahtar
// console.log(kasa.#gizliBilgi); // HATA: Özel özellik doğrudan erişilemez
