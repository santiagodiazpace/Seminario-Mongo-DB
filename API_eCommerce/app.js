const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv/config');

const bodyParser = require('body-parser');

const productsRoute = require('./routes/productos');
const salesRoute = require('./routes/ventas');

app.use(bodyParser.json());

app.use('/products', productsRoute);
app.use('/sales', salesRoute);

// Se conecta a Mongo
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Conectado a la base con exito')
);

// Puerto que se utiliza
app.listen(8080);