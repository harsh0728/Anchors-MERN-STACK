const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'otp',
}, async (email, otp, done) => {
  try {
    const user = await User.findOne({ email, otp });
    if (!user) return done(null, false, { message: 'Incorrect email or OTP' });
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
