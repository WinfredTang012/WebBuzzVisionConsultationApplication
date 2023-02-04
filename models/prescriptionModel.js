const mongoose = require('mongoose');


const prescriptionSchema = new mongoose.Schema({
      senderp: {
          type: String,
      }, 
      patientnamep: {
        type: String,
    },
      agep: {
          type: Number,
      },
      datep: {
        type: String,
      },
      addressp: {
        type: String, 
      },
      diagnosisp: {
          type: String,
      },

});


//collection exports //
module.exports = mongoose.model("prescription", prescriptionSchema);
