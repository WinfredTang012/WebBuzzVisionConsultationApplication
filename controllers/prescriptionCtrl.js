const Prescriptions = require("../models/prescriptionModel");

const prescriptionCtrl = {
// Save data of the user in database //
addPrescription : async (request, response) => {
  // retreive the info of user from frontend //
  const prescription = request.body;
  const newPrescription = new Prescriptions(prescription);
  try {
    await newPrescription.save();
    response.status(201).json(newPrescription);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
},

getPrescriptions: async (req, res) => { 
  prescriptions = Prescriptions.find((err,prescriptions) => {

   if (err)
   {
     console.log(err)
   }else{

     res.json(prescriptions)
   }
 })  
},

};

module.exports = prescriptionCtrl;