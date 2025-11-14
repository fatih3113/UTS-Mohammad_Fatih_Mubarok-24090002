// Data Summary untuk Dashboard
const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

// Data Produk
let products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 },
    { id: 4, name: "Kopi Toraja", price: 28000, stock: 40 },
    { id: 5, name: "Teh Hijau", price: 20000, stock: 35 }
];


// HALAMAN LOGIN - Fungsi Validasi dan Login

if (document.getElementById('loginForm')) {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Validasi bahwa email dan password tidak boleh kosong
        if (email === '' && password === '') {
            errorMessage.textContent = '⚠️ Email dan Password tidak boleh kosong!';
            errorMessage.classList.add('show');
            return;
        }
        
        // Validasi jika salah satu kosong
        if (email === '') {
            errorMessage.textContent = '⚠️ Email tidak boleh kosong!';
            errorMessage.classList.add('show');
            return;
        }
        
        if (password === '') {
            errorMessage.textContent = '⚠️ Password (NIM) tidak boleh kosong!';
            errorMessage.classList.add('show');
            return;
        }
        
        // Jika semua terisi → tampilkan pesan "Login berhasil" lalu redirect
        errorMessage.classList.remove('show');
        alert('✅ Login berhasil!');
        
        // Redirect ke dashboard.html
        window.location.href = 'dashboard.html';
    });
    
    // Hilangkan pesan error saat user mengetik
    document.getElementById('email').addEventListener('input', function() {
        errorMessage.classList.remove('show');
    });
    
    document.getElementById('password').addEventListener('input', function() {
        errorMessage.classList.remove('show');
    });
}


// LOGIN DENGAN GOOGLE

function loginWithGoogle() {
    alert('🔵 Login dengan Google dipilih!\n\nAnda akan diarahkan ke halaman dashboard.');
    // Simulasi loading
    setTimeout(function() {
        window.location.href = 'dashboard.html';
    }, 1000);
}


// LOGIN DENGAN FACEBOOK

function loginWithFacebook() {
    alert('🔷 Login dengan Facebook dipilih!\n\nAnda akan diarahkan ke halaman dashboard.');
    // Simulasi loading
    setTimeout(function() {
        window.location.href = 'dashboard.html';
    }, 1000);
}


// HALAMAN DASHBOARD - Render Data Summary

if (document.getElementById('totalProducts')) {
    // Format angka ke format Rupiah
    function formatRupiah(angka) {
        return 'Rp ' + angka.toLocaleString('id-ID');
    }
    
    // Update data di card
    document.getElementById('totalProducts').textContent = summary.totalProducts;
    document.getElementById('totalSales').textContent = summary.totalSales;
    document.getElementById('totalRevenue').textContent = formatRupiah(summary.totalRevenue);
}


// HALAMAN PRODUCTS - Render Tabel Produk

if (document.getElementById('productsTableBody')) {
    const tableBody = document.getElementById('productsTableBody');
    
    // Fungsi untuk format harga ke Rupiah
    function formatPrice(price) {
        return 'Rp ' + price.toLocaleString('id-ID');
    }
    
    // Fungsi untuk render tabel produk
    function renderProducts() {
        tableBody.innerHTML = '';
        
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.setAttribute('data-id', product.id);
            
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${formatPrice(product.price)}</td>
                <td>${product.stock}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="editProduct(${product.id}, '${product.name}')">
                            ✏️
                        </button>
                        <button class="btn-delete" onclick="deleteProduct(${product.id}, '${product.name}')">
                            🗑️
                        </button>
                    </div>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
    }
    
    // Render tabel saat halaman dimuat
    renderProducts();
}


// FUNGSI EDIT PRODUK

function editProduct(id, name) {
    alert(`✏️ Edit produk: ${name}`);
    // Di sini bisa ditambahkan fungsi edit yang lebih kompleks
    // seperti membuka modal atau form edit
}


// FUNGSI DELETE PRODUK

function deleteProduct(id, name) {
    // Konfirmasi sebelum menghapus
    if (confirm(`❓ Yakin hapus produk "${name}"?`)) {
        // Cari index produk berdasarkan id
        const productIndex = products.findIndex(p => p.id === id);
        
        if (productIndex !== -1) {
            // Hapus produk dari array
            products.splice(productIndex, 1);
            
            // Hapus baris dari tabel menggunakan DOM
            const row = document.querySelector(`tr[data-id="${id}"]`);
            if (row) {
                // Animasi hapus
                row.style.transition = 'opacity 0.3s ease';
                row.style.opacity = '0';
                
                setTimeout(() => {
                    row.remove();
                    
                    // Re-render untuk update nomor urut
                    if (document.getElementById('productsTableBody')) {
                        const tableBody = document.getElementById('productsTableBody');
                        tableBody.innerHTML = '';
                        
                        products.forEach((product, index) => {
                            const newRow = document.createElement('tr');
                            newRow.setAttribute('data-id', product.id);
                            
                            newRow.innerHTML = `
                                <td>${index + 1}</td>
                                <td>${product.name}</td>
                                <td>Rp ${product.price.toLocaleString('id-ID')}</td>
                                <td>${product.stock}</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="btn-edit" onclick="editProduct(${product.id}, '${product.name}')">
                                            ✏️
                                        </button>
                                        <button class="btn-delete" onclick="deleteProduct(${product.id}, '${product.name}')">
                                            🗑️
                                        </button>
                                    </div>
                                </td>
                            `;
                            
                            tableBody.appendChild(newRow);
                        });
                    }
                    
                    alert(`✅ Produk "${name}" berhasil dihapus!`);
                }, 300);
            }
        }
    }
}