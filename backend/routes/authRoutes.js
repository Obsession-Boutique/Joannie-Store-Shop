import express from 'express';
import passport from 'passport';
import session from 'express-session';

import generateToken from '../utils/generateToken.js';

const router = express.Router();

const originUri = process.env.ORIGIN_URI;

// @desc Auth with Google
// @route GET /auth/google

router.get(
  '/google',
  (req, res, next) => {
    req.session.redirectPath = req.query.redirect;
    next();
  },
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// @desc Google auth callback
// @route GET /auth/google/callback

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    const redirect = req.session.redirectPath;
    const redirectQuery = redirect ? `?redirect=${redirect}` : '';
    res.redirect(`${originUri}/login${redirectQuery}`);
  }
);

router.get('/currentuser', (req, res) => {
  const user = req.user;
  if (user) {
    user.token = generateToken(user._id);
    delete user.password;
    res.json(user);
  } else {
    res.send(null);
  }
});

export default router;
