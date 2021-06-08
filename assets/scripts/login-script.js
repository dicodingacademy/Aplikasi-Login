/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';

/* TODO : Menyimpan hasil enkripsi MD5 */
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = inputEmailElement.value;

  /* TODO : Melakukan enkripsi pada hasil input password dengan MD5 */
  const password = inputPasswordElement.value;
  if (email === expectedEmail && password === expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
