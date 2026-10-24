# 09 – Panduan Pemateri

> **Dokumen ini hanya untuk pemateri — tidak dibagikan ke peserta.**  
> Berisi skrip mengajar, titik jebakan bug yang disengaja, dan rencana cadangan.

---

## A. Persiapan Sebelum Kelas (H-1 atau H-30 menit)

### Persiapan Teknis

- [ ] Buka VS Code, siapkan folder `profil-web` yang sudah ada file starter
- [ ] Buka browser dengan dua tab: satu untuk `index.html` lokal, satu untuk GitHub
- [ ] Pastikan DevTools bisa dibuka (F12) dan tab Console terlihat
- [ ] Uji URL dicebear avatar bekerja: `https://api.dicebear.com/7.x/adventurer/svg?seed=tekweb`
- [ ] Login akun GitHub demo (bukan akun pribadi)
- [ ] Pastikan koneksi internet stabil dan ada hotspot cadangan

### Persiapan Mental

- Santai. Peserta adalah pemula — setiap progress kecil itu pencapaian besar.
- Sengaja lambat saat mengetik kode supaya peserta bisa mengikuti.
- Sesekali berhenti dan tanya "Ada yang belum jelas?" tapi jangan terlalu sering.

---

## B. Skrip Mengajar Per Bab

---

### 📌 BAB 01 – Konsep Dasar Web (8 menit)

**Yang diucapkan:**

> "Sebelum kita mulai nulis kode, kita perlu paham dulu cara kerja web. Siapa yang pernah pesan makanan di restoran? Nah, web itu mirip banget. Kalian (browser) adalah pelanggan. Server adalah dapur. Saat kalian ketik google.com di browser, itu sama kayak bilang ke pelayan: 'Pak, saya mau pesan halaman google.com.' Pelayan (internet) nyampein pesanan ke dapur (server Google), dapur masakin (file HTML, CSS, JS), terus pelayan bawa balik ke meja kalian (browser). Itu yang namanya request dan response."

> "Terus, ada tiga bahan utama yang 'dimasak' di dapur tadi. HTML itu tulangnya — struktur bangunannya. CSS itu pakaiannya — yang bikin cantik. JavaScript itu ototnya — yang bikin bisa gerak dan interaktif."

**→ Hentikan sebentar:** Tanya ke peserta: *"Menurut kalian, tombol 'Suka' di Instagram itu bagian dari yang mana — HTML, CSS, atau JavaScript?"*

> **Jawaban yang diharapkan:** JavaScript (karena berinteraksi saat diklik), tapi HTML dan CSS juga terlibat (HTML untuk strukturnya, CSS untuk tampilannya).

**Demo DevTools:**

> "Oke, sekarang buka browser, pergi ke google.com, tekan F12. Lihat tab Elements. Sekarang saya akan ubah tulisan 'Google' di sini jadi nama saya. *[klik dua kali pada teks, ubah]*. Voila! Tapi ini cuma sementara — kalau di-refresh, balik lagi. Ini namanya DevTools, dan ini adalah salah satu alat paling berguna yang akan kalian pakai sepanjang karier sebagai web developer."

---

### 📌 BAB 02 – HTML (15 menit)

**Yang diucapkan di awal:**

> "Sekarang kita mulai nulis kode! Buka VS Code, buat file baru namanya `index.html` di folder `profil-web`. Di VS Code, kalau kalian ketik tanda seru (!) terus tekan Tab, VS Code otomatis buatin struktur dasarnya. Coba!"

> "Perhatikan: ada `<head>` dan ada `<body>`. Anggap head itu 'otak di balik layar' — tempat ngatur encoding, judul tab, link CSS. Body itu 'apa yang tampil di layar' — konten sebenarnya."

**→ Hentikan sebentar setelah Langkah 3:** Tanya: *"Kira-kira kenapa kita pakai `<header>` dan bukan `<div id='header'>`?"*

> **Jawaban yang diharapkan:** Karena `<header>` punya makna semantik — browser, mesin pencari, dan screen reader tahu fungsinya. `<div>` cuma kotak kosong tanpa arti.

**⚠️ Bug yang Disengaja #1 (di Langkah 5 – form):**

Saat menulis form, sengaja salah ketik:
```html
<!-- SALAH (yang disengaja) -->
<input type="teks" id="input-nama" ...>
```
Jalankan di browser → lihat apakah ada perbedaan.

> "Eh, ada yang melihat saya salah ketik tadi? `type="teks"` harusnya `type="text"`. Browser ternyata masih 'maklum' dan anggap ini text input biasa — tapi ini tidak standar dan bisa bermasalah di beberapa browser. Jadi selalu tulis nama type yang benar!"

---

### 📌 BAB 03 – CSS (12 menit)

**Yang diucapkan di awal:**

> "File HTML kita sudah jadi, tapi masih polos banget kan? Sekarang kita dandanin. Buat file baru `style.css` di folder yang sama. Yang pertama kita import font dari Google — biar lebih kece dari font bawaan browser."

**Saat menjelaskan variabel CSS:**

> "Nah ini trik paling berguna di CSS: variabel. Anggap aja kayak toples berlabel di dapur. Saya taruh warna ungu di toples berlabel `--warna-aksen`. Setiap resep yang butuh warna ungu, saya tinggal tulis `var(--warna-aksen)`. Kalau besok saya mau ganti jadi hijau, cukup ubah isi toples — semua resep otomatis pakai hijau."

**→ Hentikan sebentar:** Demo langsung: ubah nilai `--warna-aksen` di `:root` dari `#4f46e5` ke `#10b981` (hijau). Refresh browser.

> "Lihat? Semua yang ungu langsung berubah hijau. Ini kekuatan variabel CSS — satu tempat, efek ke mana-mana."

**⚠️ Bug yang Disengaja #2 (di Langkah 4 – selector):**

Saat menulis CSS untuk `.btn-tema`, sengaja hilangkan titik:

```css
/* SALAH (yang disengaja) */
btn-tema {
  background: var(--warna-skill-latar);
}
```

> "Kok tombolnya tidak berubah ya? Ada yang tahu kenapa? *[tunggu jawaban]*. Betul! Saya lupa titiknya. `btn-tema` itu class selector, jadi harus pakai titik: `.btn-tema`. Kesalahan ini sangat umum dan bikin frustasi kalau tidak tahu."

---

### 📌 BAB 04 – JavaScript (13 menit)

**Yang diucapkan di awal:**

> "Halaman kita sudah cantik. Tapi masih 'mati' — tombol diklik tidak terjadi apa-apa. Sekarang kita kasih 'nyawa'nya dengan JavaScript. Buat file `script.js`. Pertama kita tes dulu apakah file ini sudah terhubung."

> "Tulis `console.log('JS terhubung!')`. Simpan. Buka browser, F12, tab Console. Ada tulisannya? Bagus! Sekarang hapus baris itu — kita ganti dengan kode aslinya."

**Saat menjelaskan getElementById:**

> "JavaScript butuh 'alamat' untuk nemuin elemen HTML mana yang mau diutak-atik. Alamatnya adalah `id`. Makanya tadi kita kasih `id="btn-tema"` ke tombol. Sekarang kita 'panggil' dia dari JS: `document.getElementById('btn-tema')`."

**→ Hentikan sebentar setelah fitur tema selesai:** Minta peserta klik tombol.

> "Keren kan? Coba buka DevTools Elements dan perhatikan tag `<body>` saat kalian klik tombol. Lihat class `gelap` muncul dan hilang? Itu yang dilakukan `classList.toggle`!"

**⚠️ Bug yang Disengaja #3 (di Langkah 4 – array):**

Saat menulis kode tombol sapa, sengaja pakai nama ID yang salah:

```javascript
// SALAH (yang disengaja)
const btnSapa = document.getElementById('tombol-sapa');
```

Klik tombol sapa → tidak terjadi apa-apa → buka Console → ada error `null`.

> "Ada error 'Cannot read properties of null'. Ini artinya `getElementById` tidak menemukan elemen dengan id `'tombol-sapa'`. Padahal di HTML kita tulis `id='btn-sapa'`. Nah, JavaScript itu case-sensitive dan character-sensitive — satu strip pun beda sudah error. Saya perbaiki: `getElementById('btn-sapa')`."

---

### 📌 BAB 05 – GitHub (22 menit)

**Yang diucapkan di awal:**

> "Website kita sudah jalan di komputer kita sendiri. Tapi belum ada yang bisa lihat selain kita. Sekarang kita upload ke GitHub dan aktifkan GitHub Pages — supaya website kita bisa diakses siapa saja di seluruh dunia, gratis!"

**Saat membuat repository:**

> "Repository itu seperti folder proyek di GitHub. Satu proyek = satu repository. Pastikan kalian pilih Public — kalau Private, GitHub Pages tidak bisa diaktifkan di akun gratis."

**Saat mengaktifkan GitHub Pages:**

> "Pergi ke Settings, klik Pages di menu kiri, ubah Branch dari None ke main, klik Save. GitHub butuh sekitar 1-2 menit untuk deploy. Sambil nunggu, kita update nama di file index.html lewat browser GitHub — ganti 'Budi Santoso' dengan nama kalian."

**Setelah URL muncul:**

> "Copy link-nya, buka tab baru, paste. *[tunggu loading]*. Voila! Website kalian sekarang online dan bisa diakses siapa saja! Bagikan ke orang tua kalian, kirim ke grup keluarga. Ini karya nyata pertama kalian sebagai web developer!"

---

## C. Titik Jebakan Bug yang Disengaja

| # | Bab | Kode Salah yang Diketik | Bug yang Dimunculkan | Pelajaran |
|---|-----|-------------------------|---------------------|-----------|
| 1 | HTML | `type="teks"` | Tidak langsung error (browser maklum) | Selalu pakai nama atribut yang benar dan standar |
| 2 | CSS | `btn-tema { }` (tanpa titik) | Style tidak berlaku | Titik (`.`) wajib untuk class selector |
| 3 | JS | `getElementById('tombol-sapa')` | `null` → TypeError di Console | `id` harus persis sama, case-sensitive |

---

## D. Rencana Cadangan

### ❌ Skenario 1: Internet Tidak Tersedia

**Dampak:** Google Fonts tidak muat, avatar dari dicebear tidak muat, GitHub tidak bisa diakses.

**Solusi:**
1. Font: Browser otomatis fallback ke `sans-serif` — tampilan masih layak, lanjutkan saja
2. Avatar: Ganti dengan gambar statis yang sudah didownload sebelumnya, atau emoji besar:
   ```html
   <!-- Ganti img dengan div emoji -->
   <div class="avatar" style="font-size:80px; display:flex; align-items:center; justify-content:center;">👨‍💻</div>
   ```
3. GitHub: Fokuskan sesi pada Bab 01–04 (HTML, CSS, JS). Untuk GitHub, minta peserta mengerjakan di rumah dengan panduan Bab 05.

---

### ❌ Skenario 2: Akun GitHub Bermasalah / Tidak Bisa Login

**Dampak:** Tidak bisa demo live upload ke GitHub.

**Solusi:**
1. Gunakan akun GitHub demo yang sudah disiapkan sebelumnya
2. Alternatif: gunakan [CodePen](https://codepen.io) untuk demo publik secara langsung
   - Buka codepen.io → "Start Coding"
   - Copy-paste kode HTML (tanpa `<html>/<head>/<body>`), CSS, JS ke panel masing-masing
   - Klik "Share" → "Copy Link" → link publik langsung tersedia
3. Jelaskan proses GitHub secara verbal dengan screenshot yang sudah disiapkan

---

### ❌ Skenario 3: VS Code Tidak Terinstal di Komputer Peserta

**Dampak:** Peserta tidak bisa menulis kode.

**Solusi:**
1. Gunakan [vscode.dev](https://vscode.dev) — VS Code langsung di browser, tidak perlu install
2. Alternatif: [CodePen](https://codepen.io) atau [StackBlitz](https://stackblitz.com)
3. Alternatif paling sederhana: Notepad (Windows) atau TextEdit (Mac) — simpan dengan ekstensi `.html`

---

### ❌ Skenario 4: Peserta Jauh Tertinggal

**Dampak:** Beberapa peserta masih di Bab 02 saat mayoritas sudah di Bab 04.

**Solusi:**
1. Bagikan file `proyek-contoh/` yang sudah jadi sebagai "starter" — peserta bisa langsung ke Bab 05 (GitHub)
2. Tugaskan yang sudah selesai untuk membantu temannya
3. Pastikan semua peserta minimal berhasil mengunggah sesuatu ke GitHub Pages — itu tujuan minimum sesi ini

---

## E. Timeline Cadangan (Jika Tertinggal)

| Jika sisa waktu | Prioritaskan |
|-----------------|-------------|
| < 5 menit | Skip Bab 04 JS form, langsung ke GitHub |
| < 10 menit | Beri file proyek-contoh, fokus GitHub saja |
| Semua selesai lebih cepat | Tantang peserta tambah skill baru (Tantangan 4 di lembar kerja) |

---

## F. Kata-Kata Motivasi Siap Pakai

> "Error itu bukan berarti kamu gagal — itu berarti kamu sedang belajar. Semua developer punya ratusan tab Stack Overflow terbuka."

> "Googling itu bukan curang. Itu skill. Developer terbaik di dunia juga Google."

> "Kalau kode kalian tidak jalan, itu bukan berarti kodenya salah — mungkin cuma ada satu karakter yang perlu diperbaiki."

> "Selamat! Kalian baru saja bikin website pertama kalian. Ini serius — kebanyakan orang tidak sampai sini."
