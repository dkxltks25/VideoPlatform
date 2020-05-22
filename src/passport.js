import dotenv from "dotenv";
import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import { User } from "./model";
dotenv.config();

const jwtOption = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};
const verifyUser = async (payload, done) => {
  try {
    const user = await User.findOne({ _id: payload.id });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};
export const authenticateJwt = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};
passport.use(new Strategy(jwtOption, verifyUser));
passport.initialize();
