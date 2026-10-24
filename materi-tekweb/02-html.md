# 02 – HTML: Membangun Struktur Halaman

> ⏱️ **Durasi:** 15 menit | **Tipe:** Live Coding bertahap

---

## 🎯 Tujuan Bab

Peserta mampu menulis struktur HTML dasar yang valid, menggunakan tag-tag semantik, dan membangun kerangka "Halaman Profil Interaktif" dari nol.

---

## A. Konsep – Analogi Rumah 🏠

HTML (**HyperText Markup Language**) adalah bahasa untuk memberi tanda (*markup*) pada konten.

> Bayangkan membangun rumah: HTML adalah **kerangka bangunan** — ada pondasi, dinding, pintu, jendela. Belum dicat (CSS) dan belum ada furnitur bergerak (JS), tapi rumahnya sudah bisa ditempati.

**Cara penulisan tag HTML:**
```
<namatag atribut="nilai"> isi konten </namatag>
         ↑                ↑
    tag pembuka       tag penutup (pakai /)
```

---

## B. Langkah Praktik

### Langkah 1 – Buat File dan Struktur Paling Dasar (3 menit)

Buka VS Code → buat file `index.html` di folder `profil-web` → ketik kode ini:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profil Saya – Teknologi Web</title>
</head>
<body>

  Halo, ini halaman pertamaku!

</body>
</html>
```

**Penjelasan baris per baris:**

| Baris | Kode | Artinya |
|-------|------|---------|
| 1 | `<!DOCTYPE html>` | "Ini file HTML versi 5" — wajib ada di baris pertama |
| 2 | `<html lang="id">` | Akar semua elemen, `lang="id"` = bahasa Indonesia |
| 3–6 | `<head>...</head>` | Area pengaturan (judul, encoding, dll — tidak tampil di halaman) |
| 4 | `<meta charset="UTF-8">` | Agar huruf ä, é, dll tampil benar |
| 5 | `<meta name="viewport"...>` | Agar tampilan pas di HP |
| 6 | `<title>` | Teks yang muncul di tab browser |
| 7 | `<body>...</body>` | Area yang tampil di halaman browser |

> ✅ **Cek hasil:** Buka `index.html` di browser → kamu lihat teks "Halo, ini halaman pertamaku!"

---

### Langkah 2 – Tambahkan Link CSS dan Hubungkan JavaScript (1 menit)

Di dalam `<head>`, tambahkan link ke file CSS:

```html
  <!-- Hubungkan file CSS -->
  <link rel="stylesheet" href="style.css" />
```

Di bagian **bawah** `<body>`, sebelum `</body>`, tambahkan:

```html
  <!-- Hubungkan file JavaScript -->
  <script src="script.js"></script>
```

> 💡 Script JS diletakkan di bawah agar HTML selesai dimuat dulu baru JS berjalan.

---

### Langkah 3 – Header & Navbar (2 menit)

Ganti teks "Halo..." dengan kode ini di dalam `<body>`:

```html
  <!-- HEADER: bagian atas halaman -->
  <header class="header">
    <nav class="navbar">
      <span class="logo">👨‍💻 ProfilKu</span>
      <button id="btn-tema" class="btn-tema">🌙 Mode Gelap</button>
    </nav>
  </header>
```

**Tag yang dipakai:**

| Tag | Fungsi | Analogi |
|-----|--------|---------|
| `<header>` | Area atas halaman (logo, menu) | Papan nama toko |
| `<nav>` | Area navigasi | Daftar menu di pintu masuk |
| `<span>` | Teks inline tanpa arti khusus | Tulisan kecil |
| `<button>` | Tombol yang bisa diklik | Tombol fisik |

---

### Langkah 4 – Main & Hero Section (4 menit)

Setelah `</header>`, tambahkan:

```html
  <!-- MAIN: konten utama halaman -->
  <main class="main">

    <!-- SECTION HERO: perkenalan diri -->
    <section class="hero" id="hero">
      <div class="avatar-wrapper">
        <img
          id="foto-profil"
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=tekweb"
          alt="Avatar profil mahasiswa"
          class="avatar"
        />
      </div>
      <div class="hero-teks">
        <h1 id="nama-mahasiswa">Halo, Saya Budi Santoso!</h1>
        <p class="tagline" id="tagline">Mahasiswa yang sedang belajar membuat website 🚀</p>
        <button id="btn-sapa" class="btn-utama">👋 Sapa Saya!</button>
        <p id="pesan-sapa" class="pesan-sapa tersembunyi"></p>
      </div>
    </section>

  </main>
```

**Penjelasan atribut penting:**

| Atribut | Tag | Fungsi |
|---------|-----|--------|
| `id="nama-mahasiswa"` | `<h1>` | Pengenal unik — dipakai JavaScript untuk mengambil elemen ini |
| `class="hero"` | `<section>` | Label gaya — dipakai CSS untuk mewarnai elemen |
| `src="..."` | `<img>` | URL sumber gambar |
| `alt="..."` | `<img>` | Teks alternatif jika gambar gagal dimuat (penting untuk aksesibilitas!) |
| `href="..."` | `<a>` | Tujuan link saat diklik |

---

### Langkah 5 – Tambah Tiga Kartu Section (4 menit)

Di dalam `<main>`, setelah section hero, tambahkan:

```html
    <!-- SECTION TENTANG SAYA -->
    <section class="kartu" id="tentang">
      <h2>📖 Tentang Saya</h2>
      <p>
        Nama saya <strong>Budi Santoso</strong>, mahasiswa semester 3.
        Saya suka coding dan sedang belajar web dari nol.
      </p>
      <ul class="info-list">
        <li>🎓 <strong>Jurusan:</strong> Teknik Informatika</li>
        <li>📍 <strong>Kota:</strong> Yogyakarta</li>
        <li>📧 <strong>Email:</strong> budi@example.com</li>
        <li>🌐 <strong>GitHub:</strong>
          <a href="https://github.com" target="_blank">github.com/budi</a>
        </li>
      </ul>
    </section>

    <!-- SECTION SKILL -->
    <section class="kartu" id="skill">
      <h2>💡 Skill Saya</h2>
      <ul class="skill-list" id="daftar-skill">
        <li class="skill-item">HTML</li>
        <li class="skill-item">CSS</li>
        <li class="skill-item">JavaScript</li>
        <li class="skill-item">Git</li>
      </ul>
    </section>

    <!-- SECTION FORM KONTAK -->
    <section class="kartu" id="kontak">
      <h2>✉️ Kirim Pesan</h2>
      <form id="form-kontak" class="form-kontak">
        <div class="form-grup">
          <label for="input-nama">Nama Kamu:</label>
          <input type="text" id="input-nama" name="nama"
                 placeholder="Masukkan namamu..." required />
        </div>
        <div class="form-grup">
          <label for="input-pesan">Pesan:</label>
          <textarea id="input-pesan" name="pesan"
                    rows="4" placeholder="Tulis pesanmu..." required></textarea>
        </div>
        <button type="submit" class="btn-utama" id="btn-kirim">📨 Kirim Pesan</button>
        <p id="konfirmasi-form" class="tersembunyi konfirmasi"></p>
      </form>
    </section>
```

---

### Langkah 6 – Footer (1 menit)

Setelah `</main>`, tambahkan:

```html
  <!-- FOOTER: bagian bawah halaman -->
  <footer class="footer">
    <p>Dibuat dengan ❤️ menggunakan HTML, CSS & JavaScript</p>
    <p>© 2024 Budi Santoso – Teknologi Web</p>
  </footer>
```

> ✅ **Cek hasil:** Halaman sekarang sudah punya semua konten — tapi masih jelek karena belum ada CSS. Ini normal!

---

## C. Tag Semantik – Mengapa Penting?

**Tag semantik** (*semantic tags*) adalah tag yang namanya menjelaskan fungsinya:

```html
<!-- SEMANTIK ✅ (lebih baik) -->
<header>...</header>   ← jelas ini area header
<nav>...</nav>         ← jelas ini navigasi
<main>...</main>       ← jelas ini konten utama
<section>...</section> ← jelas ini sebuah bagian
<footer>...</footer>   ← jelas ini area footer

<!-- NON-SEMANTIK ❌ (kurang baik) -->
<div id="header">...</div>   ← hanya kotak tanpa arti
<div id="nav">...</div>
```

> 💡 **Mengapa peduli?** Google dan screen reader (alat bantu tunanetra) memahami halaman lebih baik jika kita pakai tag semantik → website lebih mudah ditemukan di pencarian!

---

## ❌ Kesalahan Umum & Solusi

| Kesalahan | Contoh Salah | Solusi |
|-----------|-------------|--------|
| Lupa tag penutup | `<p>Teks saya` | Selalu tutup: `<p>Teks saya</p>` |
| Typo nama atribut | `srcc="gambar.jpg"` | Periksa ejaan: `src="gambar.jpg"` |
| `id` duplikat | Dua elemen punya `id="btn"` | `id` harus unik di seluruh halaman |
| `alt` kosong pada gambar penting | `alt=""` | Tulis deskripsi: `alt="Foto profil Budi"` |
| Link tidak pakai `target="_blank"` | Buka di tab yang sama | Tambah `target="_blank"` untuk link eksternal |

---

## 🎯 Mini-Tantangan

**Tantangan 1:** Tambahkan satu item baru di `<ul class="info-list">`, misalnya nomor HP atau akun Instagram!

> **Jawaban:**
> ```html
> <li>📱 <strong>Instagram:</strong> @budi_santoso</li>
> ```

**Tantangan 2:** Mengapa tag `<img>` tidak punya tag penutup seperti `</img>`?

> **Jawaban:** `<img>` adalah **void element** (elemen kosong) — tidak punya konten di dalamnya, sehingga langsung ditutup dengan `/` di akhir: `<img ... />`. Contoh lain: `<br />`, `<input />`, `<meta />`.

---

## 📌 Poin Kunci

1. Setiap halaman HTML **wajib** punya `<!DOCTYPE html>`, `<html>`, `<head>`, dan `<body>`.
2. **Tag semantik** (`<header>`, `<main>`, `<section>`, `<footer>`) lebih baik dari `<div>` generik.
3. Atribut **`id`** dipakai JavaScript; atribut **`class`** dipakai CSS.
4. Selalu isi atribut **`alt`** pada gambar — penting untuk aksesibilitas dan SEO.
5. HTML hanya mengurus **struktur** — belum ada warna atau animasi; itu urusan CSS.
