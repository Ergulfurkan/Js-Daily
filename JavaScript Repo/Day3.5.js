// Döngüler Nelerdir?

//Bir işlemi tek tek yapmak yerine belli şartlar ve işlemler doğrultusunda otomatik olarak yapmak için döngüler kullanılır.

//FOR döngüsü nedir ve nasıl kullanılır?

for(let a = 0 ; a < 3; a ++){ // kullanımı for(değişken ataması ; koşul ; ve her döngüde yapılıcak değişiklik) olarak gerçekleştirilir bu bir işlemin ne kadar yapılacağını belirler.
    console.log(a);// Kod bloğu içerisinde her döngüde yapılıcaklar belirtilir.
    if(a == 1){
        break; // break kullanımı döngünün kalan tekrar sayısına bakılmaksızın döngüyü sonlandırır. 
    }
}

//While Döngüsü nedir ve nasıl kullanılır?
let a = 25;
while(a > 20){ // while içerisine bir koşul atanır. Bu koşul sağlandıkça alttaki kod bloğu gerçekleştirilir.
    console.log(a);
    a--;

}

//Do-While döngüsü nedir ve nasıl kullanılır?
let c = 20; 

do{ // Do while döngüsü koşul sağlanana kadar çalışır eğer koşul sağlanırsa döngüden çıkar.
    console.log(c);
    c--;
}while(c > 15); // koşul ise en son belirtilir.