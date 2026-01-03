// login-logic.js

// 1. DATA USER (MAHASISWA) - Password Pendek
const mahasiswaUsers = [
    { user: "ghani", pass: "123", nama: "Rizqi Ghani Adinata" },
    { user: "24010007", pass: "mhs", nama: "Rizqi Ghani Adinata" },
    { user: "budi", pass: "123", nama: "Budi Santoso" },
    { user: "siti", pass: "123", nama: "Siti Aminah" },
    { user: "anton", pass: "123", nama: "Anton Wijaya" },
    { user: "putri", pass: "123", nama: "Putri Lestari" },
    { user: "dewi", pass: "123", nama: "Dewi Sartika" },
    { user: "eko", pass: "123", nama: "Eko Prasetyo" },
    { user: "fajar", pass: "123", nama: "Fajar Nugraha" },
    { user: "gilang", pass: "123", nama: "Gilang Ramadhan" }
];

// 2. DATA ADMIN - Cuma 2 Orang (Password tidak terlalu panjang tapi beda)
const adminUsers = [
    { user: "admin1", pass: "adminok", nama: "Admin Akademik" },
    { user: "pakdos", pass: "dosen1", nama: "Dosen Wali" }
];

// 3. FUNGSI CEK LOGIN
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-text");

    // Cek apakah dia ADMIN?
    let isAdmin = adminUsers.find(data => data.user === u && data.pass === p);
    if (isAdmin) {
        // Simpan nama admin sementara (opsional)
        localStorage.setItem("namaUser", isAdmin.nama);
        localStorage.setItem("role", "admin");
        // Redirect ke Halaman Admin
        window.location.href = "admin.html"; 
        return;
    }

    // Cek apakah dia MAHASISWA?
    let isMhs = mahasiswaUsers.find(data => data.user === u && data.pass === p);
    if (isMhs) {
        // Simpan nama mahasiswa agar muncul di dashboard
        localStorage.setItem("namaUser", isMhs.nama);
        localStorage.setItem("role", "mahasiswa");
        // Redirect ke Halaman Dashboard Utama
        window.location.href = "index.html";
        return;
    }

    // Jika Salah Semua
    errorMsg.style.display = "block";
    errorMsg.innerText = "Username atau Password Salah!";
});