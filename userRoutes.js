const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", userController.index);
router.get("/crear", userController.create);
router.post("/", userController.store);
router.get("/editar/:id", userController.edit);
router.post("/editar/:id", userController.update);
router.get("/eliminar/:id", userController.destroy);

module.exports = router;
