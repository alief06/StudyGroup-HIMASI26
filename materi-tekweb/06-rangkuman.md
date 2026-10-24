# 06 – Rangkuman & Tanya Jawab

> ⏱️ **Durasi:** 5 menit | **Tipe:** Review + Tanya Jawab Cepat

---

## 🎯 Tujuan Bab

Mengkonsolidasikan semua yang sudah dipelajari, memastikan peserta punya gambaran besar yang utuh, dan mengecek pemahaman dasar secara cepat.

---

## A. Peta Konsep – Gambaran Besar

```
                    ┌─────────────────────────┐
                    │  WEBSITE PROFIL KITA    │
                    └────────────┬────────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          ▼                      ▼                      ▼
   ┌─────────────┐        ┌─────────────┐        ┌─────────────┐
   │  index.html │        │  style.css  │        │  script.js  │
   │   HTML 🦴   │        │   CSS 👕    │        │    JS 💪    │
   └──────┬──────┘        └──────┬──────┘        └──────┬──────┘
          │                      │                      │
   Struktur konten         Tampilan & warna       Interaktivitas
   - Header/Footer         - Variabel warna       - Ganti tema
   - Section kartu         - Dark mode            - Tombol sapa
   - Form kontak           - Responsive           - Form submit
   - Tag semantik          - Animasi hover

                                 ▼
          ┌──────────────────────────────────────────────┐
          │              GITHUB PAGES                    │
          │   repository → commit → website online 🌐    │
          └──────────────────────────────────────────────┘
```

---

## B. Rangkuman Per Bab

### 🌐 Bab 01 – Konsep Dasar Web
- Web bekerja dengan model **client-server**: browser meminta (request), server menjawab (response)
- **HTML** = tulang, **CSS** = pakaian, **JavaScript** = otot
- **GitHub Pages** = cara gratis mempublikasikan website

### 🦴 Bab 02 – HTML
- Setiap halaman wajib: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Gunakan tag **semantik**: `<header>`, `<main>`, `<section>`, `<footer>`
- `id` → dipakai JavaScript; `class` → dipakai CSS

### 👕 Bab 03 – CSS
- Selector: tag, `.class`, `#id`
- **Variabel CSS** (`--nama`) = cara cerdas mengelola warna
- **Dark mode** = ganti nilai variabel saat class `gelap` aktif
- **Media query** = tampilan berbeda di layar kecil vs besar

### 💪 Bab 04 – JavaScript
- `getElementById()` → ambil elemen HTML
- `addEventListener('click', fn)` → pantau aksi pengguna
- `classList.toggle/add/remove` → ubah tampilan
- `event.preventDefault()` → cegah reload pada form

### 💾 Bab 05 – GitHub
- **Repository** = folder proyek di GitHub
- **Commit** = simpan + beri catatan perubahan
- **GitHub Pages** → URL: `https://[username].github.io/[repo]/`

---

## C. Hubungan Antar File

```
index.html  ──link──▶  style.css   (baris: <link rel="stylesheet" href="style.css">)
index.html  ──link──▶  script.js   (baris: <script src="script.js"></script>)

script.js   ──baca──▶  id di HTML  (document.getElementById('btn-tema'))
script.js   ──ubah──▶  class di body  (classList.toggle('gelap'))
class "gelap" di body  ──aktifkan──▶  variabel gelap di style.css
```

---

## D. 5 Pertanyaan Tanya Jawab Cepat ⚡

Pemateri: Tanya ke peserta secara bergantian. Siapa cepat menjawab dapat bintang! ⭐

---

**❓ Pertanyaan 1:**  
Apa perbedaan antara `id` dan `class` dalam HTML?

> **✅ Jawaban:** `id` harus unik (satu halaman hanya boleh ada satu elemen dengan id yang sama), sedangkan `class` bisa dipakai oleh banyak elemen sekaligus. `id` dipakai JavaScript untuk mengambil elemen spesifik; `class` dipakai CSS untuk mewarnai banyak elemen sekaligus.

---

**❓ Pertanyaan 2:**  
Apa yang terjadi di browser jika kita hapus file `style.css`?

> **✅ Jawaban:** Halaman masih bisa dibuka, tapi semua tampilan hilang — hanya teks hitam di latar putih polos (tampilan default browser). Struktur konten tetap ada karena HTML tidak bergantung pada CSS.

---

**❓ Pertanyaan 3:**  
Mengapa `<script src="script.js">` diletakkan di bawah `</body>`, bukan di `<head>`?

> **✅ Jawaban:** Agar browser selesai membaca seluruh HTML terlebih dahulu. Jika script ada di `<head>`, saat JavaScript mencoba mencari `getElementById('btn-tema')`, elemen itu belum ada di halaman → hasilnya `null` dan kode error.

---

**❓ Pertanyaan 4:**  
Apa itu GitHub Pages dan bagaimana cara mengaktifkannya?

> **✅ Jawaban:** GitHub Pages adalah fitur GitHub yang mengubah repository menjadi website publik gratis. Cara aktifkan: Settings → Pages → pilih Branch `main` → Save. File utama harus bernama `index.html`.

---

**❓ Pertanyaan 5:**  
Apa fungsi `classList.toggle('gelap')` dalam fitur dark mode?

> **✅ Jawaban:** `toggle` menambahkan class `gelap` ke elemen `<body>` jika belum ada, atau menghapusnya jika sudah ada. Saat class `gelap` ada, CSS menerapkan variabel warna gelap yang sudah didefinisikan di `body.gelap { ... }`.

---

## 📌 Pesan Penutup untuk Peserta

> "Kalian baru saja membuat website dari nol dan mempublikasikannya ke internet dalam 2 jam. Itu bukan hal kecil! HTML, CSS, dan JavaScript adalah fondasi dari hampir semua teknologi web yang ada — React, Vue, Next.js, semuanya dibangun di atas ini. Terus eksplorasi, terus buat, dan jangan takut salah. Error adalah bagian dari proses belajar."

---

## 🗂️ Sumber Belajar Lanjutan

| Sumber | Topik | Link |
|--------|-------|------|
| MDN Web Docs | Referensi HTML/CSS/JS terlengkap | [developer.mozilla.org](https://developer.mozilla.org) |
| freeCodeCamp | Latihan interaktif gratis | [freecodecamp.org](https://freecodecamp.org) |
| CSS-Tricks | Tips & trik CSS | [css-tricks.com](https://css-tricks.com) |
| JavaScript.info | Belajar JS dari dasar | [javascript.info](https://javascript.info) |
| GitHub Docs | Dokumentasi resmi GitHub | [docs.github.com](https://docs.github.com) |
