const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/memo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/notes', noteRoutes);

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
