const express = require('express');

const router = express.Router();

// Dashboard Page
router.get('/', (req, res) => {
    res.render('dashboard');
});

router.get('/dashboard/test', (req, res) => {
    res.render('test');
});

module.exports = router;