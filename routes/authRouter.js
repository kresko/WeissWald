const { Router } = require("express");
const authRouter = Router();
const authController = require("../controllers/authController");
const passport = require('passport');

authRouter.post("/register", authController.registerUser);
authRouter.post('/login', authController.loginUser);
authRouter.get("/protected", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.json({ message: "Protected route accessed!", user: req.user });
})

module.exports = authRouter;