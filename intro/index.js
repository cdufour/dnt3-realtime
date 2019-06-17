const express = require('express');
const bodyParser = require('body-parser');
var nbLikes = 0;

var app = express();
app.use(express.static('static'))
app.use(bodyParser.json());

app.post('/like', (req, res) => {
    nbLikes += 1;
    res.send({nbLikes});
})

app.get('/like', (req, res) => {
    res.send({nbLikes});
})

app.listen(8080);