const express = require('express');
const router = express.Router();

// Dummy profile route
router.get('/:username', (req, res) => {
    res.json({ success: true, user: { username: req
