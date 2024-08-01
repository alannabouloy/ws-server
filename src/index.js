const app = require('./app'); // imports that app object from our app.js file

app.listen(3000, () => console.log(`Listening: port 3000`)); //sets the server to listen at port 3000 and logs a listening message upon starting server