const SECRET = process.env['secret'] || 'puppies';

const md5 = require('md5');

const createSignedSessionId = email => `${email}:${generateSignature(email)}`;

const generateSignature = email => md5(email + SECRET);

const { User } = require('../models');

const loginMiddleware = (req, res, next) => {
  const sessionId = req.session.sessionId;
  if (!sessionId) return next();

  const [email, signature] = sessionId.split(':');

  User.findOne({ email }, (err, user) => {
    if (signature === generateSignature(email)) {
      req.user = user;
      res.locals.currentuser = user;
      next();
    } else {
      res.send("You've tampered with you session!");
    }
  });
};

const loggedInOnly = (req, res, next) => {
  req.user ? next() : res.redirect('login');
};

const loggedOutOnly = (req, res, next) => {
  !req.user ? next() : res.redirect('/');
};

module.exports = {
  createSignedSessionId,
  loginMiddleware,
  loggedOutOnly,
  loggedInOnly
};
