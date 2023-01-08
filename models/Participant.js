const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var participantSchema = new mongoose.Schema({
    pseudo : {
        type: String,
        require : true,
        unique:true
    },
    mobile:{
        type:String,
        require:true,
        unique:true,
    },
    score : Number
});

//Export the model
module.exports = mongoose.model('Participant', participantSchema);