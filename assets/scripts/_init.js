// mendapatkan modal element dari DOM
const modalElement = document.querySelector('#modal');

// fungsi untuk menampilkan modal
function showPopUp() {
  modalElement.classList.add('display');

  // menyembunyikan modal setelah 3 detik
  setTimeout(function() {
    modalElement.classList.remove('display')
  }, 3000)
}

// pindah ke halaman home
function goToHome() {
  location.href = './home.html';
}

// pindah ke halaman login
function goToLogin() {
  location.href = './index.html';
}
