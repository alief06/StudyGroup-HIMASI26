# 07 – Lembar Kerja: Tugas Mandiri

> ⏱️ **Durasi Pengerjaan:** 35 menit (15.15 – 15.50)  
> **Nama Peserta:** ________________________________  
> **NIM:** ________________________________  
> **Link GitHub Pages:** ________________________________

---

## 📋 TUGAS WAJIB – Checklist (70 Poin)

Centang setiap item setelah selesai dikerjakan. Pemateri akan memeriksa pada saat evaluasi.

### 🦴 HTML (20 Poin)

- [ ] **[4 poin]** File `index.html` punya struktur lengkap: `<!DOCTYPE>`, `<html lang="id">`, `<head>`, `<body>`
- [ ] **[4 poin]** Halaman punya `<header>`, `<main>`, `<footer>` (tag semantik)
- [ ] **[4 poin]** Nama (di `<h1 id="nama-mahasiswa">`) sudah diganti dengan **nama kamu sendiri**
- [ ] **[4 poin]** Section tentang (`id="tentang"`) berisi minimal 3 item di `<ul class="info-list">` dengan info yang benar (nama, jurusan, kota)
- [ ] **[4 poin]** Form kontak (`id="form-kontak"`) berfungsi: isi nama & pesan → klik kirim → muncul konfirmasi

### 👕 CSS (20 Poin)

- [ ] **[5 poin]** File `style.css` sudah terhubung ke `index.html` dan semua gaya tampil benar
- [ ] **[5 poin]** Warna aksen (`--warna-aksen`) sudah **diubah** dari nilai default menjadi warna pilihanmu
- [ ] **[5 poin]** Halaman tampil rapi di **layar HP** (coba perkecil jendela browser hingga <600px)
- [ ] **[5 poin]** Minimal satu **efek hover** terlihat di halaman (tombol, skill badge, atau kartu)

### 💪 JavaScript (15 Poin)

- [ ] **[5 poin]** Tombol **"Mode Gelap"** berfungsi: klik → halaman gelap; klik lagi → terang; label tombol berubah
- [ ] **[5 poin]** Tombol **"Sapa Saya"** berfungsi: pesan muncul dan bergantian setiap diklik
- [ ] **[5 poin]** File `script.js` sudah terhubung (tidak ada error di tab Console DevTools)

### 💾 GitHub (15 Poin)

- [ ] **[5 poin]** Repository sudah dibuat dan bersifat **Public**
- [ ] **[5 poin]** Ketiga file (`index.html`, `style.css`, `script.js`) sudah di-upload ke repository
- [ ] **[5 poin]** GitHub Pages sudah aktif dan website bisa dibuka lewat URL yang diberikan

---

## 🌟 TANTANGAN TAMBAHAN (30 Poin – Bonus)

Kerjakan jika kamu selesai lebih cepat. Poin ini ditambahkan ke total nilai.

---

### ⭐ Tantangan 1: Layout Flex di Section Skill (8 Poin)

Ubah section `id="skill"` agar tampil dalam dua kolom menggunakan `display: flex` dengan `flex-wrap: wrap`. Setiap `.skill-item` punya lebar minimal `calc(50% - 0.5rem)`.

**Petunjuk CSS:**
```css
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-item {
  flex: 1 1 calc(50% - 0.5rem); /* minimal setengah lebar */
  text-align: center;
}
```

---

### ⭐ Tantangan 2: Efek Hover pada Kartu (7 Poin)

Tambahkan efek agar kartu (`.kartu`) sedikit naik dan bayangannya membesar saat di-hover.

**Petunjuk CSS:**
```css
.kartu {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.kartu:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(79, 70, 229, 0.2);
}
```

---

### ⭐ Tantangan 3: Jam Digital dengan setInterval (10 Poin)

Tambahkan jam digital yang berdetak setiap detik di bagian hero atau footer.

**Petunjuk:**

1. Tambahkan elemen di `index.html`:
```html
<p id="jam-digital" class="jam-digital"></p>
```

2. Tambahkan di `script.js`:
```javascript
// Fungsi untuk memperbarui tampilan jam
function perbaruiJam() {
  const sekarang = new Date();
  const jam    = String(sekarang.getHours()).padStart(2, '0');
  const menit  = String(sekarang.getMinutes()).padStart(2, '0');
  const detik  = String(sekarang.getSeconds()).padStart(2, '0');
  document.getElementById('jam-digital').textContent = `🕐 ${jam}:${menit}:${detik}`;
}
// Jalankan sekarang dan ulangi setiap 1000ms (1 detik)
perbaruiJam();
setInterval(perbaruiJam, 1000);
```

3. Tambahkan style di `style.css`:
```css
.jam-digital {
  font-size: 1.1rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums; /* agar angka tidak bergeser */
  letter-spacing: 0.05em;
  opacity: 0.9;
}
```

---

### ⭐ Tantangan 4: Tombol Tambah Skill (5 Poin)

Tambahkan tombol "Tambah Skill" yang saat diklik meminta nama skill baru dan menambahkannya ke daftar skill.

**Petunjuk HTML** (tambahkan di section skill, setelah `</ul>`):
```html
<button id="btn-tambah-skill" class="btn-utama" style="margin-top:1rem;">
  ➕ Tambah Skill
</button>
```

**Petunjuk JavaScript:**
```javascript
const btnTambahSkill = document.getElementById('btn-tambah-skill');
const daftarSkill    = document.getElementById('daftar-skill');

btnTambahSkill.addEventListener('click', function () {
  // prompt: tampilkan dialog input dari browser
  const skillBaru = prompt('Nama skill yang ingin ditambahkan:');

  // Hanya tambahkan jika pengguna mengisi dan tidak membatalkan
  if (skillBaru && skillBaru.trim() !== '') {
    const liSkill = document.createElement('li'); // buat elemen <li> baru
    liSkill.className = 'skill-item';
    liSkill.textContent = skillBaru.trim();
    daftarSkill.appendChild(liSkill); // tambahkan ke dalam <ul>
  }
});
```

---

## 📊 RUBRIK PENILAIAN

### Total Nilai = Tugas Wajib + Tantangan Tambahan

| Komponen | Poin Maksimal | Cara Penilaian |
|----------|--------------|----------------|
| HTML | 20 | Checklist di atas |
| CSS | 20 | Checklist di atas |
| JavaScript | 15 | Checklist di atas |
| GitHub | 15 | Checklist di atas |
| **Total Wajib** | **70** | |
| Tantangan 1 (Flex) | +8 | Berfungsi visual |
| Tantangan 2 (Hover) | +7 | Terlihat di browser |
| Tantangan 3 (Jam) | +10 | Jam berdetik akurat |
| Tantangan 4 (Tambah Skill) | +5 | Skill baru muncul di halaman |
| **Total Bonus** | **+30** | |
| **NILAI MAKSIMAL** | **100** | |

### Skala Nilai

| Rentang | Predikat |
|---------|----------|
| 90–100 | ⭐⭐⭐ Sangat Baik |
| 75–89 | ⭐⭐ Baik |
| 60–74 | ⭐ Cukup |
| < 60 | Perlu Mengulang |

---

## 📝 Catatan Pemateri

> Saat waktu pengerjaan selesai (15.50), minta peserta:
> 1. Screenshot tampilan website mereka di browser
> 2. Salin link GitHub Pages ke kolom di atas
> 3. Simpan semua file (Ctrl+S) sebelum dikumpulkan

---

## 🤝 Aturan Pengerjaan

- ✅ Boleh bertanya ke teman sebelah
- ✅ Boleh membuka kembali file materi
- ✅ Boleh menggunakan DevTools untuk debug
- ❌ Jangan copy-paste kode tanpa memahami artinya
- ❌ Jangan pakai library atau framework eksternal
