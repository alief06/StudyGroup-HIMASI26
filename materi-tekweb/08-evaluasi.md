# 08 – Evaluasi: Kesalahan Umum, Kunci Jawaban & Tips Debugging

> ⏱️ **Durasi:** 10 menit (15.50 – 16.00)  
> **Referensi:** Digunakan saat sesi evaluasi dan sebagai panduan belajar mandiri

---

## A. Tabel Kesalahan Umum & Solusi

### 🦴 HTML

| # | Kesalahan | Gejala | Solusi |
|---|-----------|--------|--------|
| H1 | Lupa `<!DOCTYPE html>` | Browser masuk mode "quirks" — tampilan aneh | Selalu baris pertama: `<!DOCTYPE html>` |
| H2 | Tag tidak ditutup: `<p>Teks` | Konten setelahnya ikut terformat sebagai paragraf | Tutup dengan `</p>` |
| H3 | Atribut `src` salah: `src="gambar"` tanpa ekstensi | Gambar tidak muncul (broken image icon) | Pastikan path lengkap dan benar: `src="foto.jpg"` |
| H4 | `id` duplikat: dua elemen punya `id="nama"` | JavaScript hanya menemukan elemen pertama | `id` harus unik; gunakan `class` untuk banyak elemen |
| H5 | Link tanpa `href`: `<a>Klik</a>` | Link tidak bisa diklik | Tambah `href`: `<a href="url">Klik</a>` |
| H6 | `<img>` tanpa `alt` | Melanggar aksesibilitas; dinilai buruk oleh search engine | Selalu isi: `alt="Deskripsi gambar"` |

### 👕 CSS

| # | Kesalahan | Gejala | Solusi |
|---|-----------|--------|--------|
| C1 | Lupa titik pada class: `kartu { }` | CSS tidak berpengaruh sama sekali | Gunakan `.kartu { }` |
| C2 | Lupa `#` pada id: `btn-tema { }` | CSS tidak berpengaruh | Gunakan `#btn-tema { }` |
| C3 | Lupa link CSS di HTML | Halaman tampil teks polos tanpa gaya | Cek: `<link rel="stylesheet" href="style.css">` ada di `<head>` |
| C4 | Nilai hardcode di dark mode: `color: black` | Warna tidak berubah saat tema berganti | Pakai variabel: `color: var(--warna-teks)` |
| C5 | Lupa titik koma: `color: red` diikuti baris berikutnya | Properti berikutnya ikut diabaikan | Setiap deklarasi diakhiri `;` |
| C6 | `border-radius: 50%` pada elemen non-kotak | Tidak berbentuk lingkaran sempurna | Pastikan `width` = `height` agar jadi lingkaran |

### 💪 JavaScript

| # | Kesalahan | Gejala | Solusi |
|---|-----------|--------|--------|
| J1 | Typo ID: `getElementById('btn_tema')` | Console: `null`; semua operasi error | ID harus persis sama dengan HTML: `'btn-tema'` |
| J2 | `const` untuk variabel yang diubah | Console: `Assignment to constant variable` | Pakai `let` untuk variabel yang nilainya berubah |
| J3 | Lupa `event.preventDefault()` di form | Halaman reload saat submit | Tambahkan di baris pertama handler submit |
| J4 | Script di `<head>` tanpa `defer` | `getElementById` mengembalikan `null` | Pindah `<script>` ke bawah `</body>` |
| J5 | Lupa tanda kutip: `getElementById(btn-tema)` | Console: `ReferenceError` | Pakai string: `getElementById('btn-tema')` |
| J6 | `classList.toogle` (typo) | Console: `TypeError: not a function` | Ejaan benar: `classList.toggle` |

### 💾 GitHub

| # | Kesalahan | Gejala | Solusi |
|---|-----------|--------|--------|
| G1 | File bernama `Index.html` (huruf besar I) | GitHub Pages menampilkan 404 | Nama file harus `index.html` (huruf kecil semua) |
| G2 | Repository Private | Settings > Pages tidak ada opsi | Ubah ke Public di Settings > General |
| G3 | URL gambar lokal di HTML | Gambar tidak muncul di GitHub Pages | Gunakan URL gambar online atau upload gambar ke repo |
| G4 | GitHub Pages belum di-save | Website tidak bisa diakses | Klik Save setelah pilih Branch main di Settings > Pages |
| G5 | Website tidak update setelah commit | Cache browser | Tunggu 2-3 menit, lalu refresh paksa: Ctrl+Shift+R |

---

## B. 5 Pertanyaan Pemahaman + Kunci Jawaban

---

**Pertanyaan 1 (Mudah) – HTML:**  
Tuliskan tag HTML yang digunakan untuk membuat tombol yang bisa diklik!

> **Kunci Jawaban:**
> ```html
> <button id="nama-id" class="nama-class">Teks Tombol</button>
> ```
> Tag `<button>` adalah elemen HTML untuk membuat tombol interaktif. Atribut `type="submit"` dipakai di dalam form; `type="button"` untuk tombol biasa.

---

**Pertanyaan 2 (Mudah) – CSS:**  
Apa perbedaan antara `padding` dan `margin` dalam box model?

> **Kunci Jawaban:**
> - **`padding`** = jarak antara konten dan batas (border) elemen itu sendiri — *di dalam* elemen.
> - **`margin`** = jarak antara elemen dengan elemen lain di sekitarnya — *di luar* elemen.
>
> Analogi: padding = ruang di dalam tas, margin = jarak antara tas dengan benda lain.

---

**Pertanyaan 3 (Sedang) – JavaScript:**  
Apa yang dilakukan kode berikut ini? Jelaskan baris per baris!

```javascript
document.getElementById('btn-tema').addEventListener('click', function () {
  document.body.classList.toggle('gelap');
});
```

> **Kunci Jawaban:**
> - **Baris 1:** `document.getElementById('btn-tema')` — ambil elemen yang punya `id="btn-tema"` dari halaman HTML. Lalu `.addEventListener('click', function(){...})` — "pasang pendengar": saat elemen itu diklik, jalankan fungsi di dalamnya.
> - **Baris 2:** `document.body.classList.toggle('gelap')` — tambahkan class `gelap` ke `<body>` jika belum ada; hapus jika sudah ada. CSS yang merespons class ini akan mengubah warna halaman.

---

**Pertanyaan 4 (Sedang) – Konsep:**  
Jelaskan apa yang dimaksud dengan "responsif" dalam desain web dan bagaimana cara mengimplementasikannya dengan CSS!

> **Kunci Jawaban:**
> Desain **responsif** artinya tampilan website menyesuaikan diri dengan ukuran layar perangkat yang digunakan — apakah HP, tablet, atau laptop.
>
> Implementasi dengan **CSS media query:**
> ```css
> /* Default: tampilan untuk HP (mobile-first) */
> .hero { flex-direction: column; }
>
> /* Saat layar ≥ 600px (tablet/laptop): layout berubah */
> @media (min-width: 600px) {
>   .hero { flex-direction: row; }
> }
> ```
> Juga penting: tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` di `<head>` HTML agar browser HP tidak melakukan zoom-out otomatis.

---

**Pertanyaan 5 (Sulit) – Integrasi:**  
Seorang teman membuat tombol dengan kode ini, tapi tombolnya tidak bereaksi saat diklik. Temukan 2 kesalahan!

```html
<!-- HTML -->
<button id="tombol saya">Klik</button>
```

```javascript
// JavaScript (di head, tanpa defer)
const btn = document.getElementById('tombolSaya');
btn.addEventListener('klik', function() {
  alert('Halo!');
});
```

> **Kunci Jawaban (ada 3 kesalahan!):**
>
> 1. **`id` mengandung spasi:** `id="tombol saya"` tidak valid. ID tidak boleh mengandung spasi. Perbaiki: `id="tombol-saya"`.
>
> 2. **Nama ID tidak konsisten:** Di HTML `id="tombol saya"`, di JS mencari `'tombolSaya'` (berbeda!). Keduanya harus sama persis. Perbaiki JS: `getElementById('tombol-saya')`.
>
> 3. **Nama event salah:** `'klik'` bukan nama event yang valid dalam JavaScript. Nama yang benar adalah `'click'` (bahasa Inggris). Perbaiki: `addEventListener('click', ...)`.
>
> *Bonus: script di `<head>` tanpa `defer` menyebabkan `getElementById` menemukan `null` karena HTML belum selesai dimuat.*

---

## C. Tips Debugging – Metode CARI

Saat kode tidak berjalan seperti yang diharapkan, gunakan langkah **CARI**:

```
C → CEK Console DevTools (F12 → Console)
     Error merah di sana biasanya langsung menunjuk masalahnya.

A → AMATI Ejaan
     Typo adalah penyebab #1 bug untuk pemula.
     Periksa: nama id/class, nama event ('click' bukan 'klik').

R → REFRESH Paksa
     Ctrl+Shift+R (Windows/Linux) atau Cmd+Shift+R (Mac)
     Pastikan kamu sedang membuka file yang benar.

I → ISOLASI Masalah
     Komentari kode satu per satu sampai error hilang.
     Yang terakhir dikomentari = sumber masalah.
```

---

## D. Cara Membaca Pesan Error di Console

```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
       ↑               ↑                                ↑
    Jenis error    Kamu mencoba akses         pada method 'addEventListener'
                  property dari 'null'

➡️ Artinya: getElementById() mengembalikan null.
   Kemungkinan: ID tidak ada di HTML, atau typo nama ID, atau script jalan sebelum HTML siap.
```

```
Uncaught ReferenceError: btnTema is not defined
                          ↑
                      Nama variabel ini tidak dikenal

➡️ Artinya: Variabel belum dideklarasikan (lupa const/let) atau typo nama variabel.
```

```
SyntaxError: Unexpected token '}'
              ↑
          Browser menemukan karakter tak terduga

➡️ Artinya: Ada kurung kurawal/kurung biasa yang tidak berpasangan.
   Buka tab Sources di DevTools, kode yang bermasalah biasanya digarisbawahi merah.
```

---

## 📌 Checklist Debugging Mandiri

Sebelum minta bantuan, coba langkah ini dulu:

- [ ] Sudah cek Console DevTools dan tidak ada error merah?
- [ ] Semua file tersimpan (Ctrl+S)?
- [ ] `index.html` sudah me-link `style.css` dan `script.js` dengan benar?
- [ ] Nama `id` di HTML dan di `getElementById()` di JS **sama persis**?
- [ ] Tidak ada kurung, tanda kutip, atau tag yang tidak berpasangan?
- [ ] Sudah refresh browser setelah menyimpan?
