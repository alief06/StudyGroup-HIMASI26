/* ===================================================
   SCRIPT.JS – Halaman Profil Interaktif
   Teknologi Web | Vanilla JavaScript (tanpa library)
   =================================================== */

// ============================================================
// BAGIAN 1: TOMBOL GANTI TEMA (Gelap / Terang)
// ============================================================

// Ambil elemen tombol tema dari HTML menggunakan id-nya
const btnTema = document.getElementById('btn-tema');

// Fungsi yang dijalankan saat tombol tema diklik
btnTema.addEventListener('click', function () {
  // classList.toggle: tambah class "gelap" jika belum ada,
  // hapus class "gelap" jika sudah ada
  document.body.classList.toggle('gelap');

  // Cek apakah body SEKARANG punya class "gelap"
  if (document.body.classList.contains('gelap')) {
    // Jika mode gelap aktif, ubah teks tombol
    btnTema.textContent = '☀️ Mode Terang';
  } else {
    // Jika mode terang aktif, kembalikan teks tombol
    btnTema.textContent = '🌙 Mode Gelap';
  }
});

// ============================================================
// BAGIAN 2: TOMBOL SAPA
// ============================================================

// Ambil elemen yang dibutuhkan
const btnSapa   = document.getElementById('btn-sapa');
const pesanSapa = document.getElementById('pesan-sapa');
const nama      = document.getElementById('nama-mahasiswa').textContent;

// Daftar sapaan yang akan muncul bergantian
const daftarSapaan = [
  `Hei! Senang bertemu denganmu 😊`,
  `Yuk belajar web bareng! 🚀`,
  `Salam kenal dari ${nama} 👋`,
  `Terima kasih sudah mampir! ✨`,
];

// Variabel untuk melacak sapaan mana yang sedang ditampilkan
let indeksSapaan = 0;

// Fungsi yang dijalankan saat tombol sapa diklik
btnSapa.addEventListener('click', function () {
  // Tampilkan teks sapaan sesuai indeks
  pesanSapa.textContent = daftarSapaan[indeksSapaan];

  // Hapus class "tersembunyi" agar pesan muncul
  pesanSapa.classList.remove('tersembunyi');

  // Naikkan indeks, jika sudah di akhir daftar, kembali ke 0
  indeksSapaan = (indeksSapaan + 1) % daftarSapaan.length;
});

// ============================================================
// BAGIAN 3: FORM KONTAK
// ============================================================

// Ambil elemen form dan konfirmasi
const formKontak    = document.getElementById('form-kontak');
const konfirmasiEl  = document.getElementById('konfirmasi-form');
const inputNama     = document.getElementById('input-nama');

// Dengarkan event "submit" (saat tombol Kirim diklik)
formKontak.addEventListener('submit', function (event) {
  // Mencegah halaman reload (perilaku default form HTML)
  event.preventDefault();

  // Ambil nilai yang diketik di kolom nama
  const namaPengirim = inputNama.value;

  // Tampilkan pesan konfirmasi
  konfirmasiEl.textContent = `✅ Terima kasih, ${namaPengirim}! Pesanmu sudah diterima.`;
  konfirmasiEl.classList.remove('tersembunyi');

  // Reset form (kosongkan semua input)
  formKontak.reset();

  // Sembunyikan pesan konfirmasi otomatis setelah 4 detik
  setTimeout(function () {
    konfirmasiEl.classList.add('tersembunyi');
  }, 4000);
});
