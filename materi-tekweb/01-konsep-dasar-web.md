# 01 – Konsep Dasar Web & Pengenalan Git/GitHub

> ⏱️ **Durasi:** 8 menit | **Tipe:** Penjelasan + Demo

---

## 🎯 Tujuan Bab

Peserta memahami bagaimana sebuah website bekerja, mengenal tiga teknologi utama web, dan tahu kegunaan GitHub sebagai tempat menyimpan serta mempublikasikan kode.

---

## A. Cara Kerja Web – Analogi Restoran 🍽️

Bayangkan kamu memesan makanan di restoran:

```
Kamu (pelanggan)  →  memberi tahu pelayan  →  pelayan ke dapur  →  makanan datang
```

Di dunia web, ini sama persis dengan **Client-Server**:

```
Browser (client)  →  kirim request  →  Server  →  kirim response (file HTML/CSS/JS)
```

| Istilah | Arti Sederhana | Analogi Restoran |
|---------|---------------|-----------------|
| **Client** | Browser kamu (Chrome, Firefox) | Pelanggan |
| **Server** | Komputer yang menyimpan website | Dapur |
| **Request** | Permintaan membuka halaman | Kamu pesan makanan |
| **Response** | File website yang dikirim balik | Makanan yang datang |
| **URL** | Alamat website (`https://...`) | Nama dan alamat restoran |

> 💡 **Analogi URL:** `https://github.com/budi/profil`  
> = "Protokol antar (https) ke jalan (github.com), gedung (budi), kamar (profil)"

---

## B. Tiga Pilar Web – Analogi Manusia 🧍

Setiap website dibangun dari tiga teknologi utama:

| Teknologi | Peran | Analogi |
|-----------|-------|---------|
| **HTML** | Struktur & konten | 🦴 **Tulang** – memberi bentuk dasar |
| **CSS** | Tampilan & warna | 👕 **Pakaian** – mempercantik penampilan |
| **JavaScript** | Interaktivitas & logika | 💪 **Otot** – membuat bisa bergerak |

```
Tanpa HTML   → tidak ada halaman sama sekali
Tanpa CSS    → ada halaman, tapi jelek (teks polos)
Tanpa JS     → ada halaman cantik, tapi tidak interaktif
```

---

## C. Git, GitHub & GitHub Pages – Analogi Google Drive 💾

- **Git** = sistem pencatat perubahan file (seperti "riwayat versi" di Google Docs)
- **GitHub** = tempat menyimpan kode di cloud (seperti Google Drive, tapi untuk programmer)
- **Repository (repo)** = folder proyek kamu di GitHub
- **Commit** = "simpan + beri catatan" pada perubahan yang kamu buat
- **GitHub Pages** = fitur GitHub yang mengubah repo menjadi website yang bisa diakses publik **gratis**

```
Alur kerja sederhana:
Tulis kode → Commit (simpan) → Push ke GitHub → GitHub Pages = Website Online!
```

> 💡 **Analogi:** Commit itu seperti kamu menekan Ctrl+S di Google Docs, lalu mengetik catatan "Sudah menambahkan foto profil". Semua versi tersimpan dan bisa dikembalikan kapan saja.

---

## D. Demo DevTools (F12) ⚙️

**DevTools** (*Developer Tools*) adalah alat bawaan browser untuk memeriksa dan mengubah kode website secara langsung — tanpa mengubah file aslinya.

### Langkah Demo:

1. Buka browser Chrome, pergi ke website mana saja (misalnya `google.com`)
2. Tekan **F12** (atau klik kanan → *Inspect*)
3. Klik tab **Elements**
4. Cari tag `<h1>` atau teks besar apapun
5. **Klik dua kali** pada teksnya → ubah menjadi nama kamu → tekan Enter

```
Hasil: Teks di layar berubah!
(Ini hanya sementara — refresh = kembali normal)
```

> ⚠️ **Penting:** Perubahan di DevTools TIDAK tersimpan ke server. Ini hanya "preview lokal" di browser kamu. Berguna sekali untuk eksperimen dan debugging!

---

## ❌ Kesalahan Umum & Solusi

| Kesalahan | Solusi |
|-----------|--------|
| Bingung beda Git dan GitHub | Git = alatnya, GitHub = tempatnya. Git bisa dipakai tanpa GitHub. |
| Mengira perubahan DevTools tersimpan | Refresh browser = semua kembali ke semula |
| URL salah ketik | Perhatikan tanda titik, garis miring, dan huruf besar/kecil |

---

## 🎯 Mini-Tantangan

**Tantangan 1:** Buka DevTools di browser kamu dan ubah judul halaman Google (`Google`) menjadi nama kamu sendiri. Ambil screenshot hasilnya!

> **Jawaban:** Tekan F12 → tab Elements → cari `<title>Google</title>` di bagian `<head>`, klik dua kali → ubah teksnya.

**Tantangan 2:** Sebutkan 3 hal yang menurut kamu ada di "dapur" (server) sebuah website besar seperti Tokopedia!

> **Jawaban:** Database produk, data pengguna, foto produk (file gambar), kode program yang memproses transaksi, dll.

---

## 📌 Poin Kunci

1. Web bekerja dengan model **client-server**: browser meminta, server memberi.
2. **HTML** = struktur, **CSS** = tampilan, **JavaScript** = interaktivitas.
3. **URL** adalah alamat lengkap sebuah halaman web di internet.
4. **GitHub** adalah "Google Drive untuk kode", dan **GitHub Pages** bisa mempublikasikan website gratis.
5. **DevTools (F12)** adalah teman terbaik programmer untuk eksperimen dan debugging.
