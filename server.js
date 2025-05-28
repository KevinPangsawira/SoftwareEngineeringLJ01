const express = require('express');
const app = express();
const priceRoutes = require('./routes/prices');
const userRoutes = require('./routes/users');

app.use(express.json());

app.use('/api/prices', priceRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running....');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});