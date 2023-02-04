const express = require("express");
const router = express.Router();
const detailController = require("../controllers/detailCtrl");

router.get("/detail", detailController.crud_index);
router.post("/detail", detailController.crud_create_post);
router.post("/detail/:id", detailController.crud_create_post);
router.get("/detail/:id", detailController.crud_details);
router.patch("/detail/:id", detailController.crud_update);
router.delete("/detail/:id", detailController.crud_delete);

module.exports = router;