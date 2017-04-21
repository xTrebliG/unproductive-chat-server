const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./app/routes.js');
const port = process.env.PORT || '3000';
const app = express();

require("./config/connection.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
})
app.use('/', api);
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on port ${port}`));
