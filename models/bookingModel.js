const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({

      patientname: {
          type: String,
      },
      
      doctorname: {
        type: String,
    },
      emailp: {
        type: String,
      },
      phone: {
          type: String,
      },
      age: {
          type: Number,
      },
      date: {
        type: String,
      },
      time: {
        type: String,
        
      },
      description: {
          type: String,
       
      },
      location: {
        type: String,
     
    },
      sender: {

        type: String,
   
      
    },
    type: {
      type: String,
  },
    receiver: {   
      type: String,
  },
  status: { type: String, default: "PENDING" },
  diagnosis: {
    type: String,
    default: "-",
},
})


module.exports = mongoose.model('booking', bookingSchema);