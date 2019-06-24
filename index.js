const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(req.query);
    res.send('<h1>hello</h1>')
})
app.listen(3000);
