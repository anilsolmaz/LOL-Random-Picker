# LoL Random Champion Selector

Rastgele League of Legends şampiyonu seçimi için Socket.IO ve Vue.js kullanılarak geliştirilmiş basit ve kullanışlı bir web uygulaması.

## 🎮 Özellikler

- **Real-time İletişim**: Socket.IO ile anlık çift taraflı iletişim
- **Takım Bazlı Seçim**: İki takım için ayrı ayrı rastgele şampiyon seçimi
- **Görsel Arayüz**: Şampiyon avatarları ile zengin görsel deneyim
- **Tekrar Önleme**: Seçilen şampiyonlar tekrar seçilmez
- **Responsive Tasarım**: Modern ve kullanıcı dostu arayüz

## 🚀 Kurulum

Projeyi yerel makinenizde çalıştırmak için:

```bash
# Repository'yi klonlayın
git clone <repository-url>

# Proje dizinine gidin
cd lolrandom

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

## 💻 Kullanım

1. Web tarayıcınızda `http://localhost:5000` adresine gidin
2. Takım başına şampiyon sayısını belirleyin
3. Her takım için "Rastgele Şampiyon Ekle" butonuna tıklayın
4. Seçimleri sıfırlamak için "Resetle" butonunu kullanın

## 🛠️ Teknolojiler

- **Backend**: Node.js, Express.js, Socket.IO
- **Frontend**: Vue.js 2, HTML5, CSS3
- **Dev Tools**: Nodemon

## 📝 Komutlar

```bash
# Production modda çalıştır
npm start

# Development modda çalıştır (otomatik yeniden başlatma)
npm run dev
```

## 🤝 Katkıda Bulunma

Pull request'ler memnuniyetle karşılanır. Büyük değişiklikler için önce bir issue açarak neyi değiştirmek istediğinizi tartışın.

## 📄 Lisans

[MIT](https://choosealicense.com/licenses/mit/)
