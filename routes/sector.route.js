//defino controlador para el manejo de CRUD
const sectorCtrl = require('./../controllers/sector.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
const autCtrl = require('./../controllers/auth.controller');

//router.get('/', productoCtrl.getPromociones); 
router.get('/', autCtrl.verifyToken, sectorCtrl.getSectores); 
router.post('/',autCtrl.verifyToken, sectorCtrl.createSector); 
router.get('/:id',autCtrl.verifyToken, sectorCtrl.getSector);
router.post('/:idsector/contacto',autCtrl.verifyToken, sectorCtrl.addContacto); 
router.delete('/:idsector/contacto/:idcontacto',autCtrl.verifyToken, sectorCtrl.deleteContacto)
router.put('/:idsector/contacto/:idcontacto',autCtrl.verifyToken, sectorCtrl.updateContacto)//ruta para modificar un contacto



//router.put('/:id', agenteCtrl.editAgente);
//router.delete('/:id', agenteCtrl.deleteAgente);


//exportamos el modulo de rutas
module.exports = router;