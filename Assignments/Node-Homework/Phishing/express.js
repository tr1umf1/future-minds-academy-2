const express = require('express');
const path = require('path');


const app = express();

app.use('/static', express.static('public'));

const STATIC_ASSETS_PATH = path.join(__dirname, 'public')

app.get('/facebook',(req, res) => {
    res.sendFile(path.join(STATIC_ASSETS_PATH, 'facebook.html'));

});


app.listen(8181)