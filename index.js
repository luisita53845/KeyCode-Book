const express = require('express'); // Estamos utilizando el framework express en nuestro proyecto
const cors = require('cors');
const bodyParser = require('body-parser');
const { conectDB } = require('./db');

const app = express(); // Se convierte a la constante expree en un objeto por el cual podemos trabajar

app.use(cors());
app.use(bodyParser.json());

conectDB(); //Estamos ejecutando el modulo de nuestra conexion a la base de datos

require('./routes/user')(app);

app.listen(3000, () => {
    console.log('El servidor se levanto correctamente');
});