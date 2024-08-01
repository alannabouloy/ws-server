const express = require('express'); //importing the express module into app

const app = express(); //initializing the express function under the app object

app.get('/', (req, res) => { //creating a callback function which triggers upon a get request to the '/' endpoint
    res.send('running with my dress unbuttoned'); //sending a response which includes the song lyrics specified in our test
});

module.exports = app; //exporting the app object so that it can be called elsewhere in code