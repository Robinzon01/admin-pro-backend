const express = require('express');
//VARIABLES DE ENTORNO
require('dotenv').config();
//CORS
const cors = require('cors');

const { dbConnection } = require('./database/config');

//CREAR EL SERVIDOR DE EXPRESS
const app = express();

//CONFIGURACION DE CORS
app.use(cors());

/*
mean_user
vmnaHxIbWHnamN1p
hospitaldb
mongodb+srv://mean_user:vmnaHxIbWHnamN1p@cluster0.law49.mongodb.net/hospitaldb
*/
// BASE DE DATOS
dbConnection();

//RUTAS
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto : ' + process.env.PORT);
});