# node.js

JavaScript ile Back-End servisler yazabilmemizi sağlayan bir JavaScript Runtime platformudur.
Node.js tarayıcılara ihtiyaç duymadan heryerde çalışabilir. Bu sayede Javascript kodlarını kullanmak için tarayıcı kısıtlamalarıyla karşılaşmayız.
Node.js olay odaklıdır(event-driven), iş akışını engellemez. İşlemler birbirini beklemeden diğer olayı işleme alabilir yani işlem sırası olaya göre belirlenir.

Node.js özellikleri:
* Node.js kitaplığının API'leri eşzamansızdır.
* Olay döngüsüne sahip iş parçacıklı bir model kullanır.
* Çok hızlıdır.
* Hiçbir veriyi arabelleğe almaz.

Node.js kullanıldığı yerler:
* G/Ç bağlantılı Uygulamalar
* JSON API Tabanlı Uygulamalar
* DIRT (Data Intensive Real-time Applications)

Node.js ile neler yapılabilir:
* Çok oyunculu oyun
* Müzik çalar
* Görüntülü grup sohbetleri
* Slayt gösterisi sunumu
* Sosyal medya uygulamaları
* Gerçek zamanlı uygulamalar:
  ** Uzaktan kumandalı araba,
  ** Giyilebilir cihazlar
  ** Akıllı ev teknolojileri
  
 Thread: Birden fazla işlemin tek bir akışı paylaşarak neredeyse eşzamanlı bir şekilde gerçekleşmesini sağlar.
 Single-thread: Aynı anda sadece tek bir işlem yapılabilmesidir. 
 
 Event-Driven: Asenkron özelliği, işlemlerin birbirini beklemediği çalışma türüdür. Bu sayede işlem sırası olaya göre belirlenir. Olayların birbirlerini ilgilendirmemesi yani bloklamaması durumuna Non-Bloking denir.
  
  'Patika.dev sitesinden okuduğum örnek, konunun temel bir özetini anlatarak Node.js'yi anlamamızı kolaylaştırabilir.'
  
  _Çalışma ortamımızın bir restoran olduğunu düşünelim ve bu restoranımızda tek başına çalışan ve doğal olarak aynı anda tek bir iş yapabilicek **single thread** bir garson arkadaşımız olsun. Bu garson arkadaşımız bir masadan sipariş aldıktan sonra orada beklemez değil mi? İlgili siparişi mutfak tarafında bildirdikten sonra başka masalara bakabilir **non blocking**. Başka masadan da sipariş aldıktan sonra bir diğer masayı düzenleyebileceği gibi olay sırasına göre yeni müşterileri de karşılayabilir **event-driven**._


referanslar:
https://teknotower.com/nodejs-nedir-nerelerde-kullanilir/
https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm
https://app.patika.dev/moduller/nodejs/WhatIsNodeJS
