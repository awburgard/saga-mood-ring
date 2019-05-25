const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const tags = require('./routes/tags.router');
const images = require ('./routes/images.router')
const imageTags = require ('./routes/imagetags.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/tags', tags);
app.use('/images', images);
app.use('/images/tags', imageTags)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});