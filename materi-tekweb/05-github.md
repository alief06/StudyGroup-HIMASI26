# 05 – GitHub: Upload dan Publikasikan Website

> ⏱️ **Durasi:** 22 menit | **Tipe:** Praktik Langsung + Demo

---

## 🎯 Tujuan Bab

Peserta mampu membuat repository di GitHub, mengunggah file proyek lewat browser, mengaktifkan GitHub Pages, dan memperbarui website melalui commit.

---

## A. Konsep – Analogi Google Drive untuk Kode 💾

> GitHub adalah "Google Drive-nya para programmer". Tapi lebih canggih — dia mencatat **semua perubahan** yang pernah kamu buat, kapan dibuat, dan apa yang berubah. GitHub Pages adalah fitur bonus yang membuat folder Google Drive-mu bisa diakses sebagai website oleh siapa saja.

```
Alur kerja:
1. Buat "folder" di GitHub  →  disebut Repository
2. Upload file kamu         →  disebut Commit
3. Aktifkan GitHub Pages    →  folder jadi website online!
```

---

## B. JALUR BROWSER (Direkomendasikan untuk Pemula)

### Langkah 1 – Daftar / Login GitHub (2 menit)

1. Buka [github.com](https://github.com) di browser
2. Klik **Sign up** jika belum punya akun (isi: username, email, password)
3. Verifikasi email → **Login**

> ⚠️ **Penting:** Pilih username yang baik — ini akan jadi bagian dari URL websitemu! Contoh: `budisantoso` → website: `budisantoso.github.io`

---

### Langkah 2 – Buat Repository Baru (3 menit)

1. Klik tombol **"+"** di pojok kanan atas → pilih **"New repository"**
2. Isi form:

| Field | Isi | Keterangan |
|-------|-----|-----------|
| **Repository name** | `profil-web` | Nama folder proyekmu |
| **Description** | "Halaman profil saya – Teknologi Web" | Opsional tapi berguna |
| **Visibility** | ✅ **Public** | Harus publik agar GitHub Pages bisa diakses |
| **Add a README file** | ✅ Centang | Agar repo tidak kosong saat pertama dibuat |

3. Klik tombol hijau **"Create repository"**

> ✅ **Hasil:** Repository baru dengan satu file `README.md` sudah terbuat!

---

### Langkah 3 – Upload File Proyek (5 menit)

1. Di halaman repository, klik **"Add file"** → **"Upload files"**
2. Drag & drop (seret dan lepas) ketiga file dari folder `profil-web`:
   - `index.html`
   - `style.css`
   - `script.js`
3. Di bagian bawah (Commit changes):
   - **Commit message:** `"Tambah halaman profil pertama"`
   - Pilih: **"Commit directly to the main branch"**
4. Klik **"Commit changes"**

> ✅ **Hasil:** Halaman repository sekarang menampilkan keempat file.

---

### Langkah 4 – Aktifkan GitHub Pages (4 menit)

1. Klik tab **"Settings"** di halaman repository
2. Di menu kiri, klik **"Pages"**
3. Di bagian **"Branch"**, ubah dari `None` menjadi **`main`**
4. Pastikan folder tetap `/ (root)` → klik **Save**
5. Tunggu 1–2 menit → refresh halaman Settings > Pages

> ✅ **Hasil:** Muncul banner hijau dengan URL seperti:
> ```
> https://budisantoso.github.io/profil-web/
> ```
> **Website kamu sekarang online dan bisa diakses siapa saja! 🎉**

---

### Langkah 5 – Update Website via Commit Browser (3 menit)

Cara mengubah konten website langsung dari browser GitHub:

1. Di halaman repository, klik file **`index.html`**
2. Klik ikon **pensil** (✏️) di kanan atas
3. Ubah teks nama: ganti "Budi Santoso" dengan nama kamu sendiri
4. Di bawah, isi **Commit message:** `"Update nama profil"`
5. Klik **"Commit changes"**
6. Tunggu 1–2 menit → buka URL GitHub Pages → nama sudah berubah!

---

### Langkah 6 – Bagikan Link Website (1 menit)

Format URL GitHub Pages selalu:
```
https://[username-github].github.io/[nama-repository]/
```

Contoh:
```
https://budisantoso.github.io/profil-web/
```

**Salin link ini dan kirim ke teman atau dosen! 🎉**

---

## C. JALUR TERMINAL (Opsi Lanjutan – untuk yang sudah siap)

> Jalur ini dibahas sebagai pengetahuan tambahan. Jika waktu terbatas, cukup tunjukkan sekilas.

### Prasyarat
- Git sudah terinstal di komputer (cek: `git --version` di terminal)
- Sudah login GitHub di terminal: `git config --global user.email "email@kamu.com"`

### Perintah Langkah Demi Langkah

```bash
# 1. Masuk ke folder proyek
cd Desktop/profil-web

# 2. Inisialisasi Git di folder ini (cukup sekali)
git init

# 3. Hubungkan folder lokal ke repository GitHub
#    Ganti URL sesuai repository kamu
git remote add origin https://github.com/username/profil-web.git

# 4. Tambahkan semua file ke "staging area" (persiapan commit)
git add .

# 5. Simpan perubahan dengan pesan (commit)
git commit -m "Tambah halaman profil pertama"

# 6. Upload (push) ke GitHub
git push -u origin main
```

**Penjelasan perintah:**

| Perintah | Fungsi |
|---------|--------|
| `git init` | Mulai pelacakan Git di folder ini |
| `git remote add origin [URL]` | Sambungkan ke repo GitHub |
| `git add .` | Tandai semua file yang siap di-commit |
| `git commit -m "pesan"` | Simpan snapshot dengan keterangan |
| `git push` | Upload ke GitHub |

---

## D. Alur Perubahan Setelah Pertama Kali

Setiap kali kamu mengubah file dan ingin memperbarui website:

```
Jalur Browser:    Edit file di GitHub → Commit → Website update otomatis (~2 menit)

Jalur Terminal:   Edit file lokal → git add . → git commit -m "..." → git push
```

---

## ❌ Kesalahan Umum & Solusi

| Masalah | Solusi |
|---------|--------|
| Repository harus **Public** | GitHub Pages tidak bisa diaktifkan di repo Private (akun gratis) |
| GitHub Pages belum aktif | Tunggu 2–3 menit dan refresh halaman Settings > Pages |
| URL tidak ditemukan (404) | Pastikan file utama bernama persis `index.html` (bukan `Index.html` atau `home.html`) |
| Gambar tidak muncul | Gunakan URL gambar online (bukan path lokal seperti `C:\...`) |
| Push ditolak | Jalankan `git pull` dulu sebelum `git push` |

---

## 🎯 Mini-Tantangan

**Tantangan 1:** Setelah website online, buka DevTools (F12) di URL GitHub Pages → tab Console. Apakah kamu melihat pesan "JavaScript sudah terhubung!"? Kalau ya, berarti semua file sudah terkoneksi dengan benar!

> **Jawaban:** Ya, jika `script.js` sudah diupload dan di-link dengan benar di `index.html`.

**Tantangan 2:** Bagaimana cara mengetahui **kapan terakhir** kali seseorang mengubah file di repository GitHub?

> **Jawaban:** Di halaman repository, klik nama file → lihat bagian atas halaman, ada info "Last commit" beserta tanggal dan pesan commitnya. Atau klik tab **"Commits"** untuk melihat seluruh riwayat perubahan.

---

## 📌 Poin Kunci

1. **Repository** adalah folder proyek di GitHub — satu proyek, satu repo.
2. **Commit** adalah "simpan + beri catatan" — selalu tulis pesan yang deskriptif.
3. **GitHub Pages** mengubah repository menjadi website yang bisa diakses publik **gratis**.
4. URL GitHub Pages selalu: `https://[username].github.io/[repo-name]/`
5. File utama **harus** bernama `index.html` agar GitHub Pages bisa menampilkannya.
