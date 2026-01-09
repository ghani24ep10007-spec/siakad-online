// --- 1. DATABASE PENGGUNA TAMBAHAN (Teman Sekelas) ---
// Password default untuk semua: 123
const users = [
    { username: "faqih", password: "123" },
    { username: "toik", password: "123" },
    { username: "widad", password: "123" },
    { username: "dinda", password: "123" },
    { username: "alia", password: "123" },
    { username: "nwalia", password: "123" },
    { username: "syafa", password: "123" },
    { username: "rizqi", password: "123" },
    { username: "ghani", password: "123" },
    { username: "fiki", password: "123" }
];

// --- 2. LOGIKA UTAMA LOGIN ---
document.addEventListener("DOMContentLoaded", function() {
    
    const loginForm = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            // Mencegah halaman refresh otomatis
            e.preventDefault(); 

            // Ambil input dan ubah username jadi huruf kecil semua biar tidak case-sensitive
            const usernameInput = document.getElementById('username').value.toLowerCase().trim();
            const passwordInput = document.getElementById('password').value.trim();

            // --- A. CEK LOGIN KHUSUS DOSEN (BU IHDA) ---
            if (usernameInput === 'bu ihda' && passwordInput === '123') {
                localStorage.setItem('namaUser', 'Ibu Ihda, M.Kom');
                // Arahkan ke Halaman Dosen
                window.location.href = 'dosen_nilai.html'; 
                return;
            }

            // --- B. CEK LOGIN KHUSUS KAMU (GHANI / NIM) ---
            if ((usernameInput === 'ghani' || usernameInput === '24ep10007') && passwordInput === '123') {
                localStorage.setItem('namaUser', 'Rizqi Ghani Adinata');
                // Arahkan ke Dashboard Mahasiswa
                window.location.href = 'dashboard.html';
                return;
            }

            // --- C. CEK LOGIN TEMAN DARI DATABASE ARRAY ---
            // Mencari apakah input cocok dengan salah satu data di array 'users'
            const validFriend = users.find(user => user.username === usernameInput && user.password === passwordInput);

            if (validFriend) {
                // Simpan username teman ke penyimpanan sementara browser
                // Huruf pertama dibuat kapital (opsional, biar rapi)
                const formattedName = validFriend.username.charAt(0).toUpperCase() + validFriend.username.slice(1);
                localStorage.setItem('namaUser', formattedName);
                
                // Arahkan ke Dashboard Mahasiswa
                window.location.href = 'dashboard.html';
                return;
            }

            // --- D. JIKA SEMUA SALAH (ERROR HANDLING) ---
            // Tampilkan pesan error
            if (errorMsg) {
                errorMsg.style.display = 'block';
                errorMsg.innerText = "Username atau Password salah! Coba lagi.";
            }

            // Efek Getar pada Card (Visual Feedback)
            const card = document.querySelector('.login-card');
            if (card) {
                card.style.transform = 'translateX(10px)';
                setTimeout(() => { card.style.transform = 'translateX(0)'; }, 100);
                setTimeout(() => { card.style.transform = 'translateX(10px)'; }, 200);
                setTimeout(() => { card.style.transform = 'translateX(0)'; }, 300);
            }
        });
    }
});
