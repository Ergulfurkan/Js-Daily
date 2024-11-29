// Diyalog Kutuları Nelerdir?

// 3 adet diyalog kutusu vardır. alert(), prompt() ve confirm() olarak ayrılır.

// 1.si alert() kutusudur. Kullanıcıya uyarı mesajı verir ve dönüş değeri almaz.

alert("Bu bir uyarı mesajıdır!");

// 2. si prompt() kutusudur. Alert ile aynı görsel etkiye sahiptir ancak kullanıcıdan bir veri girişi ister.

let kullanıcı_ismi = prompt("İsminizi giriniz:");
console.log(kullanıcı_ismi);

// 3. sü confirm() kutusudur. Prompet ile aynı işleve sahiptir ancak veri alımını sadece True veya False olarak alabilir.

let isConfirmed = confirm("Reşit misiniz?");
console.log(isConfirmed); // Dönücek değer sadece true ya da false olabilir.