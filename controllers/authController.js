const db = require('../db/authQueryHandler');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

async function registerUser(req, res) {
    try {
        const newUser = await db.registerUser(req.body);

        return res.json({message: 'User created!', user: newUser});
    } catch (e) {
        console.log(e);
    }
}

async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await db.getUserByUsername(req.body.email);
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user });
}

module.exports = {
    registerUser,
    loginUser
}