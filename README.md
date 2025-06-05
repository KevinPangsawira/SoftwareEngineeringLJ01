(Penting: Script database yang dijalankan adalah yang ada di branch main, bukan yang berada di branch backend, pastikan semuanya berjalan dengan lancar dan database di-create dengan benar.)
Repositori ini berisi source code untuk aplikasi fullstack yang terdiri dari dua bagian utama:

- 🎨 **Frontend** – terdapat pada branch `Front-End`
- ⚙️ **Backend** – terdapat pada branch `backend`

Untuk menjalankan projek ini: (Pastikan bukan dari branch main harus pindah branch)
Pertama, pindah ke branch Front-End untuk clone code Frontend
Kedua, prindah ke branch backend untuk clone code Backend
Untuk backend, Buat file .env di root folder backend, lalu isi sesuai konfigurasi lokal. Contoh:
                          DB_USER=user321
                          DB_PASS=user123
                          DB_NAME=bahan_makanan_SE
                          DB_SERVER=LAPTOP-1234567
Untuk menjalankan frontend, pertama install dulu vite dengan command "npm install vite", setelah itu bisa menggunakan command "npm run dev" untuk menjalankan website dan pastikan sudah meng-install dependencies yang diperlukan dengan menjalankan "npm install"
Untuk menjalankan backend, bisa menggunkan command "node server" dan pastikan sudah meng-install dependencies yang diperlukan menjalankan "npm install"

Untuk di sql server yang digunakan, pastikan authenticationnya menggunakan SQL Server Authentication
Lalu buat new Logins, lalu sesuaikan dengan isi dari file .env di backend.


Untuk melakukan login pada frontend sebagai:
Customer:
email: kevin@gmail.com
password: kevin123
Admin:
email: admin@gmail.com
password: admin123

