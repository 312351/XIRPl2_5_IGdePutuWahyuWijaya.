var judul = document.getElementById('judul');
var pesan = document.getElementById('pesan');
var Ganti = document.getElementById('Ganti');

var kondisi = true;

Ganti.addEventListener('click', function() {
if (kondisi) {
   judul.textContent ='Benar';
   pesan.textContent ='Anda Telah memencet tombol yang benar';
   judul.style.color ='green';
   pesan.style.color ='green';
}
else {
   judul.textContent = 'Salah';
   pesan.textContent = 'Anda telah mengeclik tombol yang salah';
   pesan.style.color = 'red';
   judul.style.color = 'red';
}
});