const Bookings = require("../models/bookingModel");

const bookingCtrl = {
    createBooking: async (req, res) => {
        try {
            const { patientname, emailp, age, phone, date, description,sender,doctorname, type, time, status,location} = req.body;
           
            const newBooking = new Bookings({
                patientname, emailp, age, phone, date, description, sender,doctorname, type, time, status,location
        
            });
      
      
            await newBooking.save();
            res.json({
              msg: "Booking Success!",
           
              booking: {
                ...newBooking._doc,
                user: req.user,
            
              },
            });
          } catch (err) {
   
          }
    },


    getBookings: async (req, res) => { 
         bookings = Bookings.find((err,bookings) => {

          if (err)
          {
            console.log(err)
          }else{

            res.json(bookings)
          }
        })  
  },

}
  module.exports = bookingCtrl;
  