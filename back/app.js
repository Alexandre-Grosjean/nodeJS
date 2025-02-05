const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const path = require('path');
const password = require('./password/password');

const stuffRoutes = require('./routes/stuff');
const Thing = require('./models/thing');
const userRoutes = require('./routes/user');
const auth = require('./middleware/auth');
const app = express();

mongoose.connect(`mongodb+srv://AlexandreGrosjean:${password}@cluster0.b2khq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;