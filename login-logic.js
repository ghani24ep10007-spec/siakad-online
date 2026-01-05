// login-logic.js

// 1. DATA USER (MAHASISWA)
const mahasiswaUsers = [
    // Tambahkan user dengan username "ghani" DAN NIM "24EP10007"
    { user: "ghani", pass: "12345", nama: "Rizqi Ghani Adinata" }, 
    { user: "24EP10007", pass: "12345", nama: "Rizqi Ghani Adinata" },
    
    // User dummy lainnya
    { user: "budi", pass: "123", nama: "Budi Santoso" }
];

// 2. DATA ADMIN
const adminUsers = [
    { user: "admin", pass: "admin123", nama: "Administrator" }
];

// 3. FUNGSI CEK LOGIN
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-text");

    // Cek Admin
    let isAdmin = adminUsers.find(data => data.user === u && data.pass === p);
    if (isAdmin) {
        localStorage.setItem("namaUser", isAdmin.nama);
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html"; 
        return;
    }

    // Cek Mahasiswa
    let isMhs = mahasiswaUsers.find(data => data.user === u && data.pass === p);
    if (isMhs) {
        localStorage.setItem("namaUser", isMhs.nama); // Simpan nama untuk ditampilkan di dashboard
        localStorage.setItem("role", "mahasiswa");
        window.location.href = "dashboard.html"; // Arahkan ke dashboard
        return;
    }

    // Jika Gagal
    if(errorMsg) {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Username atau Password Salah!";
    } else {
        alert("Username atau Password Salah!");
    }
});