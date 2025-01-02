const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('requete via console.log');
    next();
})

app.use((req, res, next) => {
    res.status(201);
    next();
})

app.use((req, res, next) => {
    res.json({message: 'requete reçue !'});
    next();
});

app.use((req, res, ) => {
    console.log('middleware fonctionnel');
});

module.exports = app;