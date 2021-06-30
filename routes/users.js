const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

//* @route GET
//? @desc Render create user form
//* @route POST
//? @desc Create user
router
  .route('/register')
  .get(users.renderRegister)
  .post(catchAsync(users.register));

//* @route GET
//? @desc Render login form
//* @route POST
//? @desc Login user
router
  .route('/login')
  .get(users.renderLogin)
  .post(
    passport.authenticate('local', {
      failureFlash: true,
      failureRedirect: '/login',
    }),
    users.login
  );

//* @route GET
//? @desc Logout user
router.get('/logout', users.logout);

module.exports = router;
