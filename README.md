# UTS Pemrograman Web 1 - Tahun Akademik 2025/2026

# Identitas Mahasiswa

- **Nama**: [ Mohammad Fatih Mubarok]
- **NIM**: [ 24090002 ]
- **Kelas**: [ 3A ]
- **Prodi**: D4 Teknik Informatika

# Link Repository & Deployment

- **GitHub Repository**: https://github.com/fatih3113/UTS-Mohammad_Fatih_Mubarok-24090002
- **GitHub Pages**: https://fatih3113.github.io/UTS-Mohammad_Fatih_Mubarok-24090002/

# Halaman-halaman:

# 1. **Halaman Login (index.html)**

# LOGIN MENGGUNAKAN INI

Gmail : fatihmubarok850@gmail.com
NIM: 24090002

Halaman login dengan fitur:

- Form input email dan password (NIM)
- Validasi input tidak boleh kosong
- Validasi format email
- Redirect ke dashboard setelah login berhasil
- Pesan error yang informatif

Halaman ini merupakan gerbang utama sebelum pengguna masuk ke aplikasi. Terdapat form login yang berisi input email dan password (NIM). JavaScript digunakan untuk melakukan validasi, seperti memastikan kolom tidak kosong dan format email benar. Jika login berhasil, pengguna akan diarahkan ke halaman dashboard.html. Jika gagal, akan muncul pesan error yang memberi tahu pengguna apa yang salah.

# 2. **Halaman Dashboard (dashboard.html)**

Halaman dashboard menampilkan:

- Sidebar menu navigasi
- 3 Card summary data:
  - Total Produk: 120
  - Total Penjualan: 85
  - Total Revenue: Rp 12.500.000
- Tombol navigasi ke halaman data produk
- Design responsif dan modern

Dashboard berfungsi sebagai halaman utama setelah login. Di halaman ini terdapat sidebar navigasi dan beberapa card informasi yang menampilkan data ringkas seperti total produk, jumlah penjualan, serta total pendapatan. Tampilan dirancang responsif dan modern. Dashboard juga menyediakan tombol untuk menuju halaman daftar produk, sehingga pengguna dapat mengakses data lebih lengkap.

# 3. **Halaman List Data Produk (products.html)**

Halaman daftar produk dengan fitur:

- Tabel data produk (No, Product Name, Price, Stock, Aksi)
- Data produk dinamis dari JavaScript array
- Tombol Edit: menampilkan alert nama produk
- Tombol Delete: menghapus produk dari tabel dengan konfirmasi
- Manipulasi DOM untuk update data real-time

Halaman ini berfungsi sebagai tempat untuk melihat seluruh data produk. Data diambil dari array JavaScript dan ditampilkan dalam tabel. Setiap baris memiliki tombol Edit dan Delete:
Seluruh perubahan bersifat real-time tanpa refresh halaman berkat manipulasi DOM dari JavaScript.

# Teknologi yang Digunakan

- **HTML5**: Struktur dan semantik halaman
- **CSS3**: Styling, layout, animasi, dan responsive design
- **JavaScript (Vanilla)**:
  - DOM Manipulation
  - Event Listeners
  - Array & Object manipulation
  - Form validation
