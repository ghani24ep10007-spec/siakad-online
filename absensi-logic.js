// --- LOGIKA DAFTAR HADIR ---

document.addEventListener("DOMContentLoaded", function() {
    tampilkanData(); // Tampilkan data saat halaman dibuka
});

// Fungsi saat tombol "ISI KEHADIRAN" diklik
function isiHadir() {
    // 1. Ambil nama user yang sedang login
    const userSekarang = localStorage.getItem("namaUser");

    if (!userSekarang) {
        alert("Anda belum login! Silakan login dulu.");
        window.location.href = "index.html";
        return;
    }

    // 2. Buat data waktu sekarang
    const waktu = new Date();
    const tanggal = waktu.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const jam = waktu.toLocaleTimeString("id-ID");

    // 3. Siapkan objek data baru
    const dataBaru = {
        nama: userSekarang.toUpperCase(), // Ubah jadi huruf besar biar keren
        tanggal: tanggal,
        jam: jam,
        status: "Hadir Online"
    };

    // 4. Ambil data lama dari LocalStorage (jika ada)
    let daftarHadir = JSON.parse(localStorage.getItem("dataAbsensi")) || [];

    // 5. Masukkan data baru ke antrian paling atas (unshift)
    daftarHadir.unshift(dataBaru);

    // 6. Simpan kembali ke LocalStorage
    localStorage.setItem("dataAbsensi", JSON.stringify(daftarHadir));

    // 7. Beri notifikasi dan update tabel
    alert("Terima kasih " + userSekarang + ", kehadiranmu sudah tercatat!");
    tampilkanData();
}

// Fungsi untuk menampilkan data ke Tabel HTML
function tampilkanData() {
    const tabel = document.getElementById("tabelAbsensi");
    let daftarHadir = JSON.parse(localStorage.getItem("dataAbsensi")) || [];

    // Kosongkan tabel dulu biar tidak dobel
    tabel.innerHTML = "";

    if (daftarHadir.length === 0) {
        tabel.innerHTML = "<tr><td colspan='5' style='text-align:center; padding:20px;'>Belum ada yang absen hari ini.</td></tr>";
        return;
    }

    // Loop data dan buat baris tabel (row)
    daftarHadir.forEach((data, index) => {
        let row = `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px; color:#555;">${index + 1}</td>
                <td style="padding: 12px; font-weight:bold; color:#1a4d2e;">${data.nama}</td>
                <td style="padding: 12px;">${data.tanggal}</td>
                <td style="padding: 12px;">${data.jam}</td>
                <td style="padding: 12px;">
                    <span style="background:#e6fffa; color:#00695c; padding:4px 8px; border-radius:4px; font-size:12px;">
                        <i class="fas fa-check-circle"></i> ${data.status}
                    </span>
                </td>
            </tr>
        `;
        tabel.innerHTML += row;
    });
}

// Fungsi Hapus Data (Reset)
function resetAbsensi() {
    if(confirm("Yakin ingin menghapus semua data kehadiran?")) {
        localStorage.removeItem("dataAbsensi");
        tampilkanData();
    }
}