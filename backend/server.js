const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/datatokoonline';

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Terhubung'))
  .catch(err => console.error('Gagal koneksi MongoDB:', err));

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running di port ${PORT}`));