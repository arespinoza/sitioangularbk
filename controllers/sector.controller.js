const Sector = require('./../models/sector')
const Contacto = require('./../models/contacto')

sectorCtrl = {};

sectorCtrl.getSectores = async (req, res)=>{
    var sectores = await Sector.find({}).populate("responsable");
    res.json(sectores);
}

sectorCtrl.createSector = async (req, res) => {
    var sector = new Sector(req.body);
    try {
        await sector.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Sector guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

sectorCtrl.getSector = async (req, res) => {
    const sector = await Sector.findById(req.params.id).populate("responsable");
    res.json(sector);
}


sectorCtrl.addContacto = async (req, res) => {
    var contacto = new Contacto(req.body);
    const idsector = req.params.idsector;
    try {
        var sector = await Sector.findById(idsector);
        sector.contactos.push(contacto);
        await sector.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Contacto agregado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

sectorCtrl.deleteContacto = async (req, res) => {
    const idsector = req.params.idsector;
    const idcontacto = req.params.idcontacto;
    try {
        var sector = await Sector.findById(idsector);
        sector.contactos.pull(idcontacto)
        await sector.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Contacto eliminado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

sectorCtrl.updateContacto = async (req, res) => {

}

module.exports = sectorCtrl;