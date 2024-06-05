const express = require('express');
const router = express.Router();

// Dummy authentication route
router.post('/login', (req, res) => {
    res.json({ success: true, user: { username: 'User', coins: 100 } });
});

module.exports = router;
