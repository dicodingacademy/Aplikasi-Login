/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// Membuat variabel untuk setiap elemen view
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// Membuat variabel untuk menyimpan informasi email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  // Menambahkan aksi klik pada button
    event.preventDefault();
    // Mendapatkan nilai dari masing-masing email dan password ketika tombol ditekan
    const Email = inputEmailElement.value;
    const Password= inputPasswordElement.value;
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    // Memastikan bahwa nilai dari email dan password identik dengan data yang tersedia
    if (Email === expectedEmail && Password === expectedPassword) {
      //Jika sesuai, maka pindah ke halaman home
      goToHome();
      //Jika salah, maka akan muncul notifikasi kalau email dan password tidak sesuai
    } else {
      showPopUp();
    }
});
