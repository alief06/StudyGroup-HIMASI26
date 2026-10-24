# 03 – CSS: Mempercantik Tampilan

> ⏱️ **Durasi:** 12 menit | **Tipe:** Live Coding bertahap

---

## 🎯 Tujuan Bab

Peserta mampu menulis CSS untuk memperindah halaman profil, memahami selector, box model, dan mengimplementasikan dark mode dengan variabel CSS.

---

## A. Konsep – Analogi Desainer Interior 🎨

> Kalau HTML adalah kerangka rumah, CSS (**Cascading Style Sheets**) adalah **desainer interior** — yang memilih cat dinding, ukuran furnitur, dan tata letak ruangan.

**Cara penulisan CSS:**
```css
selector {
  properti: nilai;
  properti: nilai;
}
```

**Contoh:**
```css
h1 {
  color: blue;      /* warna teks */
  font-size: 32px;  /* ukuran huruf */
}
```

---

## B. Tiga Jenis Selector Utama

```css
/* 1. Selector TAG – semua elemen <p> */
p {
  color: gray;
}

/* 2. Selector CLASS – semua elemen ber-class "kartu" (pakai titik) */
.kartu {
  background: white;
}

/* 3. Selector ID – elemen dengan id="btn-tema" (pakai pagar) */
#btn-tema {
  font-weight: bold;
}
```

> 💡 **Aturan prioritas (Cascading):** ID > Class > Tag. Kalau ada konflik, aturan yang lebih spesifik menang.

---

## C. Langkah Praktik

### Langkah 1 – Buat File dan Import Font (2 menit)

Buat file `style.css` di folder yang sama dengan `index.html`, ketik:

```css
/* Import font dari Google Fonts – diletakkan paling atas */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

---

### Langkah 2 – Variabel CSS dan Dark Mode (3 menit)

Variabel CSS ibarat "wadah bernama" untuk nilai yang dipakai berulang kali.

```css
/* Variabel WARNA TERANG (default) */
:root {
  --warna-latar: #f0f4f8;
  --warna-kartu: #ffffff;
  --warna-teks: #1a202c;
  --warna-aksen: #4f46e5;
  --warna-border: #e2e8f0;
  --warna-skill-latar: #ede9fe;
  --warna-skill-teks: #4f46e5;
  --bayangan: 0 4px 20px rgba(0, 0, 0, 0.08);
  --radius: 16px;
  --transisi: 0.3s ease;
}

/* Variabel WARNA GELAP – aktif saat body punya class "gelap" */
body.gelap {
  --warna-latar: #0f172a;
  --warna-kartu: #1e293b;
  --warna-teks: #f1f5f9;
  --warna-aksen: #818cf8;
  --warna-border: #334155;
  --warna-skill-latar: #312e81;
  --warna-skill-teks: #c7d2fe;
  --bayangan: 0 4px 20px rgba(0, 0, 0, 0.4);
}
```

**Penjelasan:**
- `:root` = selector untuk elemen paling atas (sama dengan `html`) — tempat menyimpan variabel global
- `--nama-variabel` = cara mendefinisikan variabel (selalu dimulai dua strip)
- `var(--nama-variabel)` = cara menggunakan variabel
- Saat JavaScript menambahkan class `gelap` ke `<body>`, semua variabel otomatis berganti!

---

### Langkah 3 – Reset, Body, dan Header (2 menit)

```css
/* Reset: hapus margin dan padding bawaan browser */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--warna-latar);
  color: var(--warna-teks);
  /* Animasi saat tema berganti */
  transition: background-color var(--transisi), color var(--transisi);
}

/* Header sticky (tetap di atas saat scroll) */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--warna-kartu);
  border-bottom: 1px solid var(--warna-border);
  box-shadow: var(--bayangan);
}

.navbar {
  max-width: 800px;
  margin: 0 auto;          /* tengahkan secara horizontal */
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;  /* logo kiri, tombol kanan */
  align-items: center;
}
```

---

### Langkah 4 – Box Model (Penjelasan Visual) + Tombol (2 menit)

**Box Model** adalah cara browser menghitung ukuran elemen:

```
┌──────────────────────────────┐  ← margin (jarak ke elemen lain)
│  ┌────────────────────────┐  │
│  │  padding               │  │  ← padding (jarak konten ke tepi)
│  │   ┌────────────────┐   │  │
│  │   │    KONTEN      │   │  │  ← konten (teks, gambar)
│  │   └────────────────┘   │  │
│  │  padding               │  │
│  └────────────────────────┘  │
│         border               │  ← border (garis tepi)
└──────────────────────────────┘
```

```css
/* Tombol tema */
.btn-tema {
  background: var(--warna-skill-latar);
  color: var(--warna-aksen);
  border: 1px solid var(--warna-border);
  padding: 0.5rem 1rem;     /* 0.5rem atas-bawah, 1rem kiri-kanan */
  border-radius: 999px;      /* membuat tombol berbentuk pil */
  cursor: pointer;
  font-weight: 600;
  transition: all var(--transisi);
}

.btn-tema:hover {
  background-color: var(--warna-aksen);
  color: white;
  transform: scale(1.05);   /* sedikit membesar saat hover */
}
```

---

### Langkah 5 – Hero, Avatar, Kartu, dan Skill (2 menit)

```css
/* Konten utama */
.main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;   /* jarak antar section */
}

/* Hero section dengan gradien */
.hero {
  background: linear-gradient(135deg, var(--warna-aksen) 0%, #6366f1 100%);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  color: white;
}

/* Gambar avatar bulat */
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;        /* 50% = lingkaran sempurna */
  border: 4px solid rgba(255, 255, 255, 0.5);
  background-color: white;
}

/* Kartu konten */
.kartu {
  background-color: var(--warna-kartu);
  border-radius: var(--radius);
  padding: 2rem;
  border: 1px solid var(--warna-border);
  box-shadow: var(--bayangan);
  transition: background-color var(--transisi);
}

/* Badge skill */
.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.skill-item {
  background-color: var(--warna-skill-latar);
  color: var(--warna-skill-teks);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: transform var(--transisi);
}

.skill-item:hover {
  transform: scale(1.08);
}
```

---

### Langkah 6 – Utilitas dan Media Query Responsif (1 menit)

```css
/* Kelas utilitas untuk menyembunyikan elemen */
.tersembunyi {
  display: none;
}

/* Footer */
.footer {
  text-align: center;
  padding: 2rem 1rem;
  color: #6b7280;
  font-size: 0.875rem;
  border-top: 1px solid var(--warna-border);
}

/* ===== MEDIA QUERY: Responsif untuk layar lebar ===== */
@media (min-width: 600px) {
  /* Saat lebar layar >= 600px (tablet/laptop) */
  .hero {
    flex-direction: row;  /* avatar & teks berjajar horizontal */
    text-align: left;
    gap: 2rem;
  }
}
```

> **Cara kerja media query:** "Jika lebar layar minimal 600px, terapkan aturan CSS di dalam kurung kurawal ini." Cocok untuk membuat tampilan berbeda di HP vs laptop.

> ✅ **Cek hasil:** Refresh browser → halaman sekarang cantik! Coba kecilkan jendela browser → layout menyesuaikan (responsif).

---

## D. Ringkasan Properti CSS yang Dipakai

| Properti | Contoh Nilai | Fungsi |
|----------|-------------|--------|
| `color` | `#1a202c`, `white` | Warna teks |
| `background-color` | `var(--warna-kartu)` | Warna latar |
| `font-family` | `'Inter', sans-serif` | Jenis huruf |
| `font-size` | `1rem`, `16px` | Ukuran huruf |
| `padding` | `1rem 2rem` | Jarak konten ke tepi dalam |
| `border-radius` | `16px`, `50%`, `999px` | Sudut membulat |
| `box-shadow` | `0 4px 20px rgba(...)` | Bayangan |
| `display: flex` | — | Tata letak fleksibel |
| `transition` | `0.3s ease` | Animasi perpindahan |
| `transform: scale()` | `scale(1.05)` | Memperbesar/kecilkan |

---

## ❌ Kesalahan Umum & Solusi

| Kesalahan | Contoh Salah | Solusi |
|-----------|-------------|--------|
| Lupa titik pada class selector | `kartu { }` | ``.kartu { }`` (tambah titik) |
| Lupa pagar pada id selector | `btn-tema { }` | `#btn-tema { }` (tambah `#`) |
| Typo nama variabel | `var(--warna-latar-)` | Cek ejaan: `var(--warna-latar)` |
| CSS tidak berpengaruh | — | Periksa apakah file `style.css` sudah di-link di `<head>` |
| Warna tidak berubah saat dark mode | — | Pastikan menggunakan `var()`, bukan nilai hardcode seperti `#fff` |

---

## 🎯 Mini-Tantangan

**Tantangan 1:** Ubah warna aksen utama `--warna-aksen` di `:root` menjadi warna hijau (`#10b981`). Apa yang berubah?

> **Jawaban:** Semua elemen yang menggunakan `var(--warna-aksen)` akan berubah menjadi hijau sekaligus — tombol, teks aksen, dll. Inilah kekuatan variabel CSS!

**Tantangan 2:** Tanpa mengubah HTML, bagaimana cara membuat semua `.skill-item` berbentuk kotak (bukan pil)?

> **Jawaban:** Ubah `border-radius: 999px` menjadi `border-radius: 8px` di selector `.skill-item`.

---

## 📌 Poin Kunci

1. Selector CSS ada tiga jenis utama: **tag** (tanpa awalan), **class** (titik `.`), **id** (pagar `#`).
2. **Box model**: setiap elemen punya konten → padding → border → margin.
3. **Variabel CSS** (`--nama`) membuat warna mudah diubah serentak di seluruh halaman.
4. **Dark mode** cukup dengan mengganti nilai variabel saat class tertentu aktif di `<body>`.
5. **Media query** (`@media`) membuat tampilan berbeda di layar kecil vs besar — kunci desain responsif.
