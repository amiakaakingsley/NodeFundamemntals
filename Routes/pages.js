const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/editUser', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/findPerson.html'));
});

router.get('/peoplePage', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/user.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/login.html'));
});

module.exports = router;