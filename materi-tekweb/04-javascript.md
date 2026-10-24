# 04 – JavaScript: Menambah Interaktivitas

> ⏱️ **Durasi:** 13 menit | **Tipe:** Live Coding bertahap

---

## 🎯 Tujuan Bab

Peserta mampu menulis JavaScript untuk menangkap aksi pengguna (klik tombol), memanipulasi tampilan halaman, dan mengimplementasikan fitur ganti tema serta tombol sapa.

---

## A. Konsep – Analogi Remote TV 📺

> Halaman HTML sudah cantik berkat CSS. Tapi masih "diam". JavaScript adalah **remote TV** — alat yang kamu pegang untuk mengubah channel, volume, atau mematikan TV. Tombol di HTML = tombol remote; JavaScript = otak yang tahu apa yang harus dilakukan saat tombol ditekan.

**Tiga hal dasar yang perlu dipahami:**

| Konsep | Analogi | Kode |
|--------|---------|------|
| **DOM** (*Document Object Model*) | Peta seluruh elemen HTML | Denah gedung |
| **Event** | Sesuatu yang terjadi (klik, ketik) | Bel pintu berbunyi |
| **Handler** | Fungsi yang dijalankan saat event terjadi | Orang yang membuka pintu |

---

## B. Cara JavaScript Membaca HTML

JavaScript berkomunikasi dengan HTML melalui **DOM** — representasi halaman sebagai "pohon" objek.

```
document  (seluruh halaman)
└── html
    ├── head
    └── body
        ├── header
        │   └── button#btn-tema   ← bisa diambil dengan getElementById
        └── main
            └── section#hero
                └── h1#nama-mahasiswa
```

```javascript
// Cara mengambil elemen berdasarkan ID
const elemen = document.getElementById('id-elemen');
```

---

## C. Langkah Praktik

### Langkah 1 – Buat File dan Uji Konsol (1 menit)

Buat file `script.js` di folder yang sama. Ketik:

```javascript
// console.log: cetak pesan ke konsol browser (buka DevTools → tab Console)
console.log('JavaScript sudah terhubung!');
```

> ✅ **Cek hasil:** Buka DevTools (F12) → tab **Console** → kamu lihat pesan "JavaScript sudah terhubung!"

---

### Langkah 2 – Fitur Ganti Tema: Ambil Elemen (2 menit)

Hapus baris `console.log` tadi, ganti dengan:

```javascript
// Ambil elemen tombol tema dari HTML menggunakan id-nya
const btnTema = document.getElementById('btn-tema');
```

**Penjelasan:**
- `const` = cara mendeklarasikan variabel yang nilainya tidak akan diganti
- `document` = objek yang mewakili seluruh halaman HTML
- `getElementById('btn-tema')` = cari elemen dengan `id="btn-tema"` dan simpan ke variabel

---

### Langkah 3 – Fitur Ganti Tema: addEventListener dan classList.toggle (3 menit)

```javascript
// "Dengarkan" event klik pada tombol tema
btnTema.addEventListener('click', function () {

  // classList.toggle: tambah class jika belum ada, hapus jika sudah ada
  document.body.classList.toggle('gelap');

  // Cek kondisi saat ini
  if (document.body.classList.contains('gelap')) {
    // Mode gelap aktif → ubah label tombol
    btnTema.textContent = '☀️ Mode Terang';
  } else {
    // Mode terang aktif → kembalikan label tombol
    btnTema.textContent = '🌙 Mode Gelap';
  }

});
```

**Penjelasan baris penting:**

| Kode | Artinya |
|------|---------|
| `.addEventListener('click', function() {...})` | "Saat elemen ini diklik, jalankan fungsi ini" |
| `classList.toggle('gelap')` | Tambah/hapus class `gelap` pada `<body>` |
| `classList.contains('gelap')` | Cek apakah `<body>` punya class `gelap` → hasilnya `true` atau `false` |
| `.textContent = '...'` | Ubah teks yang tampil di dalam elemen |

> ✅ **Cek hasil:** Klik tombol "Mode Gelap" → halaman berubah gelap! Klik lagi → terang kembali.

---

### Langkah 4 – Fitur Tombol Sapa: Array dan Variabel Counter (4 menit)

```javascript
// Ambil elemen yang dibutuhkan
const btnSapa   = document.getElementById('btn-sapa');
const pesanSapa = document.getElementById('pesan-sapa');

// Array = daftar nilai (seperti baris-baris di buku catatan)
const daftarSapaan = [
  'Hei! Senang bertemu denganmu 😊',
  'Yuk belajar web bareng! 🚀',
  'Terima kasih sudah mampir! ✨',
];

// Variabel pencatat giliran sapaan (dimulai dari indeks 0)
let indeksSapaan = 0;

// Dengarkan event klik pada tombol sapa
btnSapa.addEventListener('click', function () {

  // Isi teks pesan sesuai indeks yang aktif
  pesanSapa.textContent = daftarSapaan[indeksSapaan];

  // Hapus class "tersembunyi" agar pesan tampil
  pesanSapa.classList.remove('tersembunyi');

  // Naikkan indeks; jika sudah di akhir, kembali ke 0
  indeksSapaan = (indeksSapaan + 1) % daftarSapaan.length;

});
```

**Penjelasan penting:**

| Kode | Artinya |
|------|---------|
| `const daftarSapaan = [...]` | Array (daftar) berisi 3 string sapaan |
| `daftarSapaan[0]` | Akses item pertama: `'Hei! Senang bertemu...'` |
| `let indeksSapaan = 0` | `let` dipakai karena nilai ini akan berubah |
| `% daftarSapaan.length` | Modulo: setelah indeks terakhir, balik ke 0 (berputar) |
| `.classList.remove('tersembunyi')` | Tampilkan elemen yang tadinya `display: none` |

> ✅ **Cek hasil:** Klik tombol "👋 Sapa Saya!" berkali-kali → sapaan bergantian!

---

### Langkah 5 – Fitur Form Kontak: preventDefault dan setTimeout (3 menit)

```javascript
// Ambil elemen form dan konfirmasi
const formKontak   = document.getElementById('form-kontak');
const konfirmasiEl = document.getElementById('konfirmasi-form');
const inputNama    = document.getElementById('input-nama');

// Dengarkan event "submit" (saat tombol Kirim diklik / Enter ditekan)
formKontak.addEventListener('submit', function (event) {

  // preventDefault: cegah halaman reload (perilaku default form HTML)
  event.preventDefault();

  // Ambil nilai dari input nama
  const namaPengirim = inputNama.value;

  // Tampilkan pesan konfirmasi
  konfirmasiEl.textContent = `✅ Terima kasih, ${namaPengirim}! Pesanmu diterima.`;
  konfirmasiEl.classList.remove('tersembunyi');

  // Reset semua input di form
  formKontak.reset();

  // Sembunyikan pesan otomatis setelah 4 detik (4000 ms)
  setTimeout(function () {
    konfirmasiEl.classList.add('tersembunyi');
  }, 4000);

});
```

**Penjelasan penting:**

| Kode | Artinya |
|------|---------|
| `event.preventDefault()` | Hentikan perilaku default (form biasanya reload halaman) |
| `` `...${namaPengirim}...` `` | Template literal: masukkan variabel ke dalam teks |
| `inputNama.value` | Baca nilai yang diketik user di kolom input |
| `formKontak.reset()` | Kosongkan semua field di form |
| `setTimeout(fn, 4000)` | Jalankan fungsi setelah 4 detik |

> ✅ **Cek hasil:** Isi nama dan pesan → klik "Kirim Pesan" → muncul konfirmasi → setelah 4 detik hilang sendiri.

---

## D. Ringkasan Konsep JavaScript yang Dipakai

```
JavaScript yang kita tulis:
┌──────────────────────────────────────────────┐
│  const btnTema = getElementById(...)          │ → Ambil elemen
│  btnTema.addEventListener('click', fn)        │ → Pantau event
│  body.classList.toggle('gelap')              │ → Ubah tampilan
│  if (...contains...) { ... } else { ... }    │ → Buat keputusan
│  pesanSapa.textContent = '...'               │ → Ubah konten
│  classList.remove / classList.add            │ → Tampilkan/sembunyikan
│  setTimeout(fn, 4000)                        │ → Tunda eksekusi
└──────────────────────────────────────────────┘
```

---

## ❌ Kesalahan Umum & Solusi

| Kesalahan | Contoh Salah | Solusi |
|-----------|-------------|--------|
| Typo nama ID | `getElementById('btn_tema')` | Harus persis sama: `getElementById('btn-tema')` |
| `const` untuk variabel yang berubah | `const indeks = 0; indeks++` | Pakai `let` untuk variabel yang nilainya berubah |
| Lupa `event.preventDefault()` di form | — | Tanpanya, halaman reload dan semua data hilang |
| Script di `<head>` tanpa `defer` | — | Taruh `<script>` di bawah `</body>` agar HTML siap lebih dulu |
| Akses array di luar batas | `daftarSapaan[10]` saat hanya ada 3 item | Gunakan `% daftarSapaan.length` untuk berputar |

---

## 🎯 Mini-Tantangan

**Tantangan 1:** Tambahkan satu sapaan baru ke dalam array `daftarSapaan`!

> **Jawaban:**
> ```javascript
> const daftarSapaan = [
>   'Hei! Senang bertemu denganmu 😊',
>   'Yuk belajar web bareng! 🚀',
>   'Terima kasih sudah mampir! ✨',
>   'Selamat datang di profil saya! 🎉',  // ← tambahkan ini
> ];
> ```

**Tantangan 2:** Apa yang terjadi jika kita hapus baris `event.preventDefault()` dari kode form?

> **Jawaban:** Saat tombol "Kirim" diklik, halaman akan **reload** (muat ulang) — ini perilaku default HTML form yang mengirim data ke server. Karena kita tidak punya server, hasilnya halaman kembali kosong dan pesan konfirmasi tidak sempat terlihat.

---

## 📌 Poin Kunci

1. **DOM** adalah representasi HTML sebagai objek — JavaScript bisa membaca dan mengubahnya.
2. `document.getElementById('id')` mengambil elemen berdasarkan atribut `id`.
3. `.addEventListener('click', function(){})` menjalankan kode saat pengguna berinteraksi.
4. `classList.toggle / add / remove` adalah cara terbaik mengubah tampilan dari JavaScript.
5. `event.preventDefault()` wajib di form agar halaman tidak reload saat submit.
