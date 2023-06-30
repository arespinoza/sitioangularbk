const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/proyectodb';
const URI = 'mongodb+srv://jperez:test123@cluster0.kpjec80.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;
