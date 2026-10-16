const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //pengecekan email sudah terdaftar atau belum
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //simpan new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();

    res.status(201).json({ message: 'Registrasi berhasil, silahkan login.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    //cek email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email atau password salah' });
    }

    //cek password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Email atau password salah' });
    }

    //buat token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;