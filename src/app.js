const express = require('express');

const app = express(); 

app.get('/', (req, res) => { 
    res.send('running with my dress unbuttoned'); 
});

module.exports = app; 