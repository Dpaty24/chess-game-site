const express = require('express');
const router = express.Router();

// Dummy game start route
router.post('/start', (req, res) => {
    res.json({ success: true, gameId: 1 });
});

module.exports = router;
