// Metotlar Nelerdir?

// Metotlar işlemlerimizi kolaylaştıran ve her seferinde tek tek kod yazmamızı engelleyen belirli işlevleri gerçekleştiren işlemlerdir.

// Parametresiz metotlar. İşlem gerçekleşirken dışardan girdi almayan metotlardır.

function merhabaYazdirici(){
    alert("Merhaba Dünya");
}

merhabaYazdirici();// Çalıştırılırken 2 adet parantez açılır metotun sonuna.

// Parametreli metotlar. İşlem gerçekleşirken dışarıdan bir parametre bekleyen metotlardır.

function reşitTesti(yaş){
    if(yaş >= 18){
        console.log("Ehliyet alabilirsiniz.");
        alert("Ehliyet alabilir.");
    }
    else{
        console.log("Ehliyet alamazsınız.");
        alert("Ehliyet alamaz.");
    }
}

let yaş = prompt();
reşitTesti(yaş);

// Değer döndüren metotlar. Metotumuz çağrıldığında bir veri geri döndürür.

function faktoriyel(sayi)
{
    let sonuc = 1;
    if(sayi > 0){
        for(let i = 1; i < sayi + 1 ; i++){
            sonuc *= i;
        }
    }
    else{
        return null;
    }
    return sonuc;
}

let faktoriyelTutucu = faktoriyel(4);
console.log(faktoriyelTutucu);
 