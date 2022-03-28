const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// auth
router.post("/register", authController.signUP);

// user display: 'block',
router.get("/", userController.getAllUsers);

module.exports = router;
