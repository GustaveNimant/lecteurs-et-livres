const express = require("express");
const app = express();

// bodyParser
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set ('view engine', 'ejs');

const lecteur_router = require('./backend/routes/lecteur.routes')

// apply the routes to our application
app.use('/', lecteur_router);

const livre_router = require('./backend/routes/livre.routes')

// apply the routes to our application
app.use('/', livre_router);

// Mongo_db
const Db_Promise = require('./backend/mongo_db');

const db_config = require('./backend/models/db_config');
const port_server = db_config.SERVER_PORT;

app.listen(port_server, () => {
    console.log("Server listening on port http://localhost:" + port_server);
});
