const router = require("express").Router();
const prescriptionCtrl = require("../controllers/prescriptionCtrl");


router.get("/display", prescriptionCtrl.getPrescriptions);
router.get("/appointment", prescriptionCtrl.getPrescriptions);
router.get("/booking", prescriptionCtrl.getPrescriptions);
router.post("/prescription", prescriptionCtrl.addPrescription);
router.post("/appointment", prescriptionCtrl.addPrescription);
router.post("/booking", prescriptionCtrl.addPrescription);

module.exports = router;