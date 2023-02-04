const router = require("express").Router();
const auth = require("../middleware/auth");
const bookingCtrl = require("../controllers/bookingCtrl");
const prescriptionCtrl = require("../controllers/prescriptionCtrl");

//got probel why follow this, why i add auth then it error
router.post("/booking", bookingCtrl.createBooking);
router.get("/appointment", bookingCtrl.getBookings);
router.post("/prescription", prescriptionCtrl.addPrescription);
router.post("/appointment", prescriptionCtrl.addPrescription);
router.post("/booking", prescriptionCtrl.addPrescription);
router.get("/appointment", prescriptionCtrl.getPrescriptions);
router.get("/display", prescriptionCtrl.getPrescriptions);
router.get("/booking", prescriptionCtrl.getPrescriptions);



module.exports = router;