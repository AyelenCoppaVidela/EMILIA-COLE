const express = require('express');
const app = express();
const path = require('path');


app.listen(8080, () => {
    console.log("servidor corriendo 8080");
});


app.get('/', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/music', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/music.html'));
});

app.get('/about', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('./contacto', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/contacto.html'));
});

app.use(express.static ("public"));
