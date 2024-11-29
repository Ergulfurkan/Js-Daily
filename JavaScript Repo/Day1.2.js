//Global Scope Nedir?
let a = 10; // Bu değişken herhangi bir scope içerisinde olmadığından her yerden erişilebilir, Global Scope her yerden erişimin olduğu aralıktır.

//Function Scope nedir?
function function_name(){
    let b = 5; // Bu değişken fonksiyon içerisinde tanımlandığı için return ile döndürülmedikçe fonksiyon dışından erişilemezdir, Function Scope fonksiyon içerisinden erişilebilen aralıktır.
}
//Block Scope nedir?
function function_name2(){
    if(true){
        let = 0; // Burada ise değişken yalnızca blok içerisinden erişilebilir, Block Scope yalnızca belirtilen blok içerisinden erişilebilen aralıktır.
    }
}
