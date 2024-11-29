//Veri Tanımlama Tipleri (let - const - var) Nelerdir?

// var ile const/let arasındaki farklar nelerdir? var function scope özelliği gösterirken let/const ise block özelliği göstermektedir

function denemeFonksiyonu(){
    var a = 10;// Değişken ilk tanımı fonksiyon içerisinde tanımladık.

    if(true){
        var a = 20;// Ardından blok içerisinde tekrardan tanımladık.
    }
    console.log(a); // Burada blok scope içerisinde tanımlamış olsak da tanımlamamız var olduğu için a değeri 20 olarak döner.
}
//const-let ise blok scope özelliği gösterir.

function denemeFonksiyonu2(){
    let b = 10;

    if(true){
        let b = 20;
    }
    console.log(b);// let özelliği blok scope özelliği gösterdiği için if içerisindeki b değerine ulaşamıyoruz. Bu sebeple aynı blok içerisinde bulunan 10 değerini döndürüyor.
}

denemeFonksiyonu();

denemeFonksiyonu2();