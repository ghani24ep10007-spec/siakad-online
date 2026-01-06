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
