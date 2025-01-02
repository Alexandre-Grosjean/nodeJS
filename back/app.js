const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('requete via console.log');
})

app.use((req, res, next) => {
    res.json({message: 'requete reçue !'});
});

module.exports = app;