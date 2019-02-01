const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();

app.use( bodyParser.json());

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouses)
app.delete('/api/houses/:id', controller.deleteHouse)

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {app.set('db',dbInstance)})

app.listen(4000, ()=>console.log('We are running here on port 4000'))