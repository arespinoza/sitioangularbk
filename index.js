const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/agente', require('./routes/agente.route.js'));
app.use('/api/sector', require('./routes/sector.route.js'));
app.use('/api/usuario', require('./routes/usuario.route'));

//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en puerto `, app.get('port'));
});
