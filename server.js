const express = require('express');
const app = express();
const priceRoutes = require('./routes/prices');

app.use(express.json());
app.use('/api/prices', priceRoutes);

app.get('/', (req, res) => {
    res.send('API is running....');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);  //Hasilnya bisa dilihat di http://localhost:3000/api/prices di postman berupa data JSON 
    // setelah server di run
});