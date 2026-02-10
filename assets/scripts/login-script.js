/* Coment: Membuat Variabel untuk setiap elemen view.   */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Coment: Membuat Variabel untuk menyimpan data username dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Coment: Membuata aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    /* Coment : Mendapatkan nilai dari masing masing 
    input (email dan password) ketika tombol di tekan */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
    
    /* Coment: Memastikan bahwa nilai email dan paswword sesuai dengan nilai yang disimpan*/
    if (email === expectedEmail && password === expectedPassword) {

        /* Coment: Jika sesuai, maka program akan berpindah ke halaman home. */
        goToHome();
    } else {
        /* Coment: namun jika tidak sesuai, maka program akan menampilkan input salah */
        showPopUp();
    }
});
