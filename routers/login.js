const express = require('express');
const router = express.Router();
const { createSignedSessionId } = require('../services/Session');

router.get('/', (req, res, next) => {
  try {
    console.log('In Login Route');
    if (req.session.sessionId) {
      res.render('welcome/index');
    }
    res.render('welcome/login');
  } catch (e) {
    next(e);
  }
});

router.post('/', (req, res, next) => {
  try {
    const { username, email } = req.body;
    req.session.sessionId = createSignedSessionId(email);
    req.method = 'GET';
    res.redirect('/post');
  } catch (e) {
    next(e);
  }
});

module.exports = router;
