const mongoose = require('mongoose');

//Define DB schema
const clientSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});


//Initialize Schema
const clientData = mongoose.model('clientData', clientSchema);
module.exports = clientData;
