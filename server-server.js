const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
const profileRoutes = require('./routes/profile');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/profile', profileRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
