const mongoose = require('mongoose');



const { Schema } = mongoose;
const AgenteSchema = new Schema({
    legajo: { type: Number, required: true },
    apellido: { type: String, required: true },
    nombre: { type: String, required: true },
    nro_documento: { type: String, required: true },
    estado: { type: Boolean, required: true }
})


AgenteSchema.pre("deleteOne", async function(next){
    const Sector = require('./sector');
    //ver si el agente no esta siendo usado en sector.
    const idAgente = this.getFilter()['_id'];
    const sectores = await Sector.find({responsable: idAgente});
    if (sectores.length > 0){
        return next(new Error("Error al intentar eliminar el agente, referenciado en Sector"));
    }

    //ver si el agente no esta siendo usado en recibo.

})
module.exports = mongoose.models.Agente || mongoose.model('Agente', AgenteSchema);