const express = require('express');

const router = express.Router();

router.get('/electronics-and-repairs',(req, res)=> res.send('hello'));

module.exports = router;