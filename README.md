# Reel-style wedding invitation

Static to'y taklifnomasi sayti. Brauzerda ochish uchun:

```bash
open wedding-invitation/index.html
```

Oqim:

- boshida "Sizga taklifnoma keldi" qulf ekrani
- 1-slayd: video/reel intro, telefon mockupsiz
- 2-slayd: kalendar
- 3-slayd: manzil, WhatsApp javob va to'yona kartasi
- 4-slayd: to'y kunigacha jonli countdown
- UZ/RU til almashtirish

Asosiy ma'lumotlar `script.js` boshidagi `invite` obyektidan o'zgartiriladi:

- `groom`, `bride`
- `dateTime`
- `venue`, `venueType`, `address`, `mapUrl`, `yandexUrl`
- `gift.uz`, `gift.ru`
- `whatsappPhone`

Rasmlar `assets/reel-bg.png`, `assets/calendar-bg.png`, `assets/venue-bg.png`
fayllarida turibdi.
