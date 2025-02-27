const passport = require("passport");
const db = require("./db/authQueryHandler");
const dotenv = require("dotenv");
const { Strategy, ExtractJwt } = require("passport-jwt");

dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(
    new Strategy(opts, async(jwt_payload, done) => {
        try {
            const user = await db.getUserByUsername(jwt_payload.username);

            if (user) {
                return done(null, user);
            }

            return done(null, false);
        } catch (e) {
            return done(e, false);
        }
    })
);

module.exports = passport;