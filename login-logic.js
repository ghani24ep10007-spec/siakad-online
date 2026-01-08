// --- DATABASE PENGGUNA (Password Semua 123) ---
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

// --- LOGIKA LOGIN ---
document.addEventListener("DOMContentLoaded", function() {
    
    // Mencari elemen tombol dan input
    // Pastikan di HTML kamu menggunakan id="username" dan id="password"
    const loginForm = document.querySelector("form"); 
    const inputUser = document.getElementById("username"); 
    const inputPass = document.getElementById("password"); 

    if(loginForm && inputUser && inputPass) {
        
        loginForm.addEventListener("submit", function(event) {
            // INI YANG MENCEGAH WEB MENTAL (REFRESH)
            event.preventDefault(); 

            const usernameValue = inputUser.value.toLowerCase(); // Ubah ke huruf kecil biar tidak error kalau caps lock nyala
            const passwordValue = inputPass.value;

            // Cek apakah data input cocok dengan salah satu user di database
            const validUser = users.find(user => user.username === usernameValue && user.password === passwordValue);

            if (validUser) {
                // JIKA BERHASIL
                localStorage.setItem("namaUser", validUser.username); // Simpan nama siapa yang login
                alert("Selamat Datang, " + validUser.username + "!");
                window.location.href = "dashboard.html"; // Pindah ke dashboard
            } else {
                // JIKA GAGAL
                alert("Username atau Password salah! (Coba cek daftar nama teman)");
            }
        });
    } else {
        console.error("Error: Pastikan ID 'username' dan 'password' sudah benar di file index.html");
    }
});
// Mengambil elemen form
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

// Menangani saat tombol Login diklik
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman refresh otomatis

    // Ambil nilai dari input
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // --- DATA LOGIN RAHASIA (Hardcoded) ---
    // Username bisa: "admin" ATAU "ghani" ATAU "24EP10007"
    const validUsernames = ['admin', 'ghani', '24EP10007']; 
    const validPassword = '123'; 

    // Cek kecocokan
    if (validUsernames.includes(usernameInput) && passwordInput === validPassword) {
        
        // JIKA BENAR:
        // 1. Simpan nama user ke LocalStorage (biar muncul di Dashboard)
        let namaLengkap = "Mahasiswa";
        if(usernameInput === 'ghani' || usernameInput === '24EP10007') {
            namaLengkap = "Rizqi Ghani Adinata";
        } else {
            namaLengkap = "Administrator";
        }
        
        localStorage.setItem('namaUser', namaLengkap);

        // 2. Arahkan ke halaman Dashboard
        // Pastikan file dashboard.html sudah ada di folder yang sama
        window.location.href = 'dashboard.html';

    } else {
        // JIKA SALAH:
        // Tampilkan pesan error berwarna merah
        errorMsg.style.display = 'block';
        
        // Goyangkan form sedikit (opsional, efek visual)
        const card = document.querySelector('.login-card');
        card.style.transform = 'translateX(10px)';
        setTimeout(() => { card.style.transform = 'translateX(0)'; }, 100);
    }
});
