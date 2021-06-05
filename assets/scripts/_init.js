// mendapatkan modal element dari DOM
const modalElement = document.querySelector('#modal');

// fungsi untuk menampilkan modal
const showPopUp = () => {
  modalElement.classList.add('display');

  // menyembunyikan modal setelah 3 detik
  setTimeout(() => {
    modalElement.classList.remove('display')
  }, 3000)
}

// pindah ke halaman home
const goToHome = () => {
  location.href = '/home.html';
}

// pindah ke halaman login
const gotToLogin = () => {
  location.href = '/';
}
