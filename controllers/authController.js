const db = require('../db/authQueryHandler');
const passport = require('passport');

async function registerUser(req, res) {
    try {
        await db.registerUser(req.body);

        return res.json('User created!');
    } catch (e) {
        console.log(e);
    }
}

async function loginUser(req, res) {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.redirect('/');
        }

        req.login(user, (err) => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    })(req, res, next);
}

module.exports = {
    registerUser,
    loginUser
}