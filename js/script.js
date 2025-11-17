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
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

// HALAMAN LOGIN - Fungsi Validasi dan Login
if (document.getElementById('loginForm')) {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Email dan NIM yang benar
        const validEmail = 'fatihmubarok850@gmail.com';
        const validNIM = '24090002';
        
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
        
        // Validasi email dan password yang benar
        if (email !== validEmail) {
            errorMessage.textContent = '⚠️ Email tidak terdaftar!';
            errorMessage.classList.add('show');
            return;
        }
        
        if (password !== validNIM) {
            errorMessage.textContent = '⚠️ Password (NIM) salah!';
            errorMessage.classList.add('show');
            return;
        }
        
        // Jika semua terisi dan benar → tampilkan pesan "Login berhasil" lalu redirect
        errorMessage.classList.remove('show');
        alert('✅ Login berhasil! Selamat datang Fatih Mubarok.');
        
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
    const button = event.target.closest('.btn-social');
    button.innerHTML = '<span class="loading"></span> Connecting...';
    button.disabled = true;
    
    setTimeout(function() {
        alert('🔵 Login dengan Google berhasil!\n\nSelamat datang!');
        window.location.href = 'dashboard.html';
    }, 1500);
}

// LOGIN DENGAN FACEBOOK
function loginWithFacebook() {
    const button = event.target.closest('.btn-social');
    button.innerHTML = '<span class="loading"></span> Connecting...';
    button.disabled = true;
    
    setTimeout(function() {
        alert('🔷 Login dengan Facebook berhasil!\n\nSelamat datang!');
        window.location.href = 'dashboard.html';
    }, 1500);
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

// PARALLAX EFFECT ON MOUSE MOVE (DASHBOARD)
if (document.querySelector('.cards-container')) {
    const cards = document.querySelectorAll('.card');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        cards.forEach((card, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            card.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// SMOOTH SCROLL ANIMATION
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and tables
    document.querySelectorAll('.card, .table-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// TYPING EFFECT FOR DASHBOARD TITLE
if (document.querySelector('.page-header h1')) {
    const title = document.querySelector('.page-header h1');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = function() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 300);
}

// ADD RIPPLE EFFECT TO BUTTONS
document.addEventListener('click', function(e) {
    const button = e.target.closest('button');
    if (!button) return;
    
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);