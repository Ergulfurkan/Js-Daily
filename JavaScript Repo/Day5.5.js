//Inputs Eventleri Nelerdir?

//focus eventi girdi yapılcak yere tıklandığında çalışır. Focus kaybolunca blur eventi çalışır


const textId = document.getElementById("TextId");
textId.addEventListener("focus", run);
textId.addEventListener("blur", run2);
function run(e){
    console.log("Input giriniz:");
}

function run2(e){
    console.log("Input fokusu bozuldu.");
}

//copy eventi bir kopyalama işlemi gerçekleşeceği zaman çalışır.
textId.addEventListener("copy",run3);
function run3(e){
    console.log("Kopyalandı.");
}

//cut eventi bir kesme işlemi gerçekleşeceği zaman çalışır.
textId.addEventListener("cut",run4);
function run4(e){
    console.log("Kesildi.");
}

//select eventi mousle ile seçme işlemi gerçekleşeceği zaman çalışır.
textId.addEventListener("select",run5);
function run5(e){
    console.log("seçildi.");
}
