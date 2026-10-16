const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 5000, // Batas waktu memilih server (5 detik)
})
.then(() => console.log('MongoDB Atlas Berhasil Terhubung!'))
.catch(err => console.error('Gagal koneksi ke MongoDB Atlas.', err.message));

// Log koneksi Mongoose
mongoose.connection.on('error', err => {
  console.error('Mongoose connection error:', err);
});

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running di port ${PORT}`));