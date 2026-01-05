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

// --- LOGIKA LOGIN (JANGAN DIUBAH) ---
document.addEventListener("DOMContentLoaded", function() {
    
    // Mencari tombol dan input di HTML
    const loginButton = document.querySelector("button"); 
    const inputUser = document.getElementById("username"); 
    const inputPass = document.getElementById("password"); 

    // Cek apakah elemen ditemukan agar tidak error
    if(loginButton && inputUser && inputPass) {
        
        loginButton.addEventListener("click", function(event) {
            event.preventDefault(); // Mencegah form refresh halaman

            const usernameValue = inputUser.value;
            const passwordValue = inputPass.value;

            // Cek kecocokan data
            const validUser = users.find(user => user.username === usernameValue && user.password === passwordValue);

            if (validUser) {
                // JIKA LOGIN BERHASIL
                localStorage.setItem("namaUser", validUser.username); // Simpan nama user
                window.location.href = "dashboard.html"; // Pindah ke dashboard
            } else {
                // JIKA LOGIN GAGAL
                alert("Username atau Password salah! (Coba password: 123)");
            }
        });
    } else {
        console.error("Error: Element ID 'username' atau 'password' tidak ditemukan di index.html");
    }
});
