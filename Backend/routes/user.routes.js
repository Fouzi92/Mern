const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.signUP);

module.exports = router;
