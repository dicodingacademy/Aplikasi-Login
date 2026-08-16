/* Comment :  Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  /** 
   * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
   * @constant {string}
   */
  const email = inputEmailElement.value;
  
  /** 
   * Membuat variabel password untuk menyimpan niali password yang didapatkan saat button ditekan.
   * @constant {string}
   */
  const password = inputPasswordElement.value;
 
 
  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
 
    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
 
  } else {
 
    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
 
  }
});
