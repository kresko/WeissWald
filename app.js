const express = require('express');
const session = require('express-session');
const app = express();
const passport = require('./passport.js');
const cors = require("cors");

const postsRouter = require("./routes/postsRouter");
const authRouter = require("./routes/authRouter");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: "http://localhost:5173",  // Your React app URL
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", postsRouter);
app.use("/", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("Listening on port " + port);
});