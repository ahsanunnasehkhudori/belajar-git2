const form = document.getElementById('idContactForm');
const nameInput = document.getElementById('exampleInputName');
const emailInput = document.getElementById('exampleInputEmail1');
const passwordInput = document.getElementById('exampleInputPassword1');
const messageInput = document.getElementById('exampleInputMessage');
const hasil = document.getElementById('Hasil');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const message = messageInput.value;

    // Validasi sederhana
    if (name === '' || email === '' || password === '' || message === '') {
        alert('Tolong isi semua form!');
        return;
    }

    // Menampilkan hasil tanpa backtick agar tidak error CSS-nya
    hasil.innerHTML = "<h3>Terima kasih, " + name + "!</h3>" +
        "<p>Email: " + email + "</p>" +
        "<p>Pesan: " + message + "</p>";

    // Memberikan style melalui JavaScript langsung agar tidak error di editor
    hasil.style.marginTop = "20px";
    hasil.style.border = "1px solid #ccc";
    hasil.style.padding = "15px";

    form.reset();
}); // Pastikan baris ini ada di paling bawah!
