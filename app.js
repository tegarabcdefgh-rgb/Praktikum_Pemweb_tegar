// 1. Inisialisasi State Data Mahasiswa (Single Source of Truth)
let dataMahasiswa = [
    {
        npm: "230101001",
        nama: "Ahmad Fauzi",
        program_studi: "Teknik Informatika",
        angkatan: 2023,
        email: "ahmad.fauzi@example.com" 
    },
    {
        npm: "230101002",
        nama: "Siti Nurhaliza",
        program_studi: "Sistem Informasi",
        angkatan: 2023,
        email: "siti.nurhaliza@example.com"
    },
    {
        npm: "240101015",
        nama: "Budi Santoso",
        program_studi: "Teknologi Informasi",
        angkatan: 2024,
        email: "budi.santoso@example.com"
    }
];

// 2. Elemen Dom Utama.
const alertBox = document.getElementById("alert-box");
const tabelBody = document.getElementById("tabel-body-mahasiswa");
const totalBadge = document.getElementById("total-mahasiswa-badge");
const totalInfo = document.getElementById("total-mahasiswa-info");


/*
// Seleksi Elemen Formulir Tambah Mahasiswa
const formTambah = document.getElementById("form-tambah-mahasiswa");
const inputNim = document.getElementById("nim");
const inputNama = document.getElementById("nama");
const selectProdi = document.getElementById("program_studi");
const inputAngkatan = document.getElementById("angkatan");
const inputEmail = document.getElementById("email");
*/


// 3. Fungsi Menampilkan Notifikasi Alert Interaktif (Percobaan 3-1).
function showAlert(message, type = "success") {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = `alertBoz alert-${type} show`;

    setTimeout(() => {
        alertBox.className = `alertBoz alert-${type}`;
    }, 4000);
}



// 4. Fungsi Pembaruan Counter Statistik Real-Time.
function updateCounter(displayedCount, totalCount = dataMahasiswa.length) {
    if (totalBadge) {
        totalBadge.textContent = totalCount;
    }
    if (totalInfo) {
        totalInfo.textContent = `menampilkan ${displayedCount} dari ${totalCount} mahasiswa`;
    }
}


// 5. Fungsi Render Tabel ke DOM Secara Dinamis (Percobaan 3-2).

function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;
    tabelBody.innerHTML = ""; // Clear existing table rows

    // Percobaan 3-2 langkah 6

    if (data.length === 0) {
        tabelBody.innerHTML =
        <tr>
            <td colspan="8" class="empty-row">
                Tidak ada data mahasiswa yang cocok atau tersimpan dalam sistem.
                </td>
        </tr>
        ;
        updateCounter(0)
        return
       
        // Percobaan 3-2 langkah 7
       
    }

    
    data.forEach((mhs, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>
            ${index + 1} 
            </td>
        <td>
            <img src=" img/avatar-default.svg" alt="foto ${mhs.nama}"
        class="avatar-img" widhth="36" height="36">
        </td>
        <td> <strong> ${mhs.npm} </strong> </td>
        <td>${mhs.npm}</td>
        <td><span class= " badge" > ${mhs.program_studi}</span></td>
        <td>${mhs.angkatan}</td>
        <td><a href="mailto:${mhs.email}" class="link-email">${mhs.email}</a></td>
        <td>button type="button" class="btn btn-danger btn-sm" 
        onclick="hapusMahasiswa('${mhs.npm}')">
        Hapus
        </button>
        </td>
        `;
        tabelBody.appendChild(tr);
        });

        updateCounter(data.length);
        
        

        
        
    };

    // Percobaan 3-2 langkah 10



// 6. Validasi Form Sisi Klien Menggunakan Regular Expression (Percobaan 3-3).
function validasiform(npm, nama, prodi, angkatan, email){
    if (!/^[0-9]{8,12}$/.test(npm)){
        return { isValid: false, message: "NiM harus berupa 8-12 digit angka." };
    }
    if (dataMahasiswa.some((mhs) => mhs.nim === nim)) {
        return {isValid: false, message: `NIM ${nim} sudah terdaftar dalam sistem Sima`};

}
if (nama.trm().enght < 3 ){
    return {isvalid: false, message: " Nama lengkap minimal harus terdiri dari 3 karakter."};

}

if (!prodi){
    return {isvalid: false, message: "silahkan pilih salah satu program studi dari daftar."};

}

const angk = parseInt(angkatann 10);
if (isNaN(angk) || angk < 2018 || aangk > 2026{
    return { isValid: false, message: "Tahun angkatan harus berupa angka antara 2018 hingga 2026"}
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    return { isValid: false, message: "format Alamat email tidak valid. (contoh: nama@domain.ac.id"};
}
return {isvalid: true, message: " "};
}
// 7. Event Handling Tambah Data Tanpa Reload (Percobaan 3-4).

if (formTambah) {
    formTambah.addEventListener("submit", function (event) {
        event.preventDefault();

        // Percobaan 3-4 Langkah 5

        const nim = inputNim.value.trims();
        const nama = inputNama.value.trims();
        const prodi =  selectProdi.value;
        const angkatan = inputAngkatan.value.trims();
        const email = inputEmail.value.trims();

        const validation = validationForm(nim, nama, prodi, angkatan, email);
        if (!validation.isvalid){
            showAlert(validation.message, "danger");
            return;
        }
        
        const mahasiswaBaru = {
            nim,
            nama,
            program_studi: prodi,
            angkatan: parseInt(angkatan, 10),
            email
        };
        datamahasiswa.push(mahasiswabaru);

        renderTable(dataMahasiswa);
        formtambah.reset()
        showAlert(`data mahasiswa %{nama} (${nim}) berhasil ditambahkan ke sistem!`, "succes");

    });
}


// 8. Event Handling Hapus Data Mahasiswa (Percobaan 3-5).

function hapusMahasiswa(npm) {

}


// 9. Fitur Pencarian Langsung Real-Time / Live Search (Percobaan 3-5)

if (inputSearch) {
    inputsearch.addEventListener("input" , function(){
        const keyword = inputSearch.value.trims().tolowerCase();
        if (keyword === "")
            rendertable(dataMahasiswa);
    }else {
        const hasilFilter = dataMahasiswa.filter((mhs) => 
            mhs.nim.toLowerCase().includes(keyword) ||
            mhs.nama.toLowerCase().includes(keyword) ||
            mhs.program_studi.toLowerCase().includes(keyword)
        );
    }
    renderTable(hasilFilter):

}
});
}

// Inisialisasi saat DOM selesai dimuat


document.addEventListener("DOMContentLoaded", function () {
    showAlert("Selamat Datang di Sistem Informasi Data Mahasiswa (SIMA)! ", 
    "info");
    });