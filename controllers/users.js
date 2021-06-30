const User = require('../models/user');

//* @route GET
//? @desc Render create user form
module.exports.renderRegister = (req, res) => {
  res.render('users/register');
};

//* @route POST
//? @desc Create user
module.exports.register = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'Welcome to Yelp Camp!');
      res.redirect('/campgrounds');
    });
  } catch (e) {
    req.flash('error', e.message);
    res.redirect('register');
  }
};

//* @route GET
//? @desc Render login form
module.exports.renderLogin = (req, res) => {
  res.render('users/login');
};

//* @route POST
//? @desc Login user
module.exports.login = (req, res) => {
  req.flash('success', 'welcome back!');
  const redirectUrl = req.session.returnTo || '/campgrounds';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

//* @route GET
//? @desc Logout user
module.exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'Goodbye!');
  res.redirect('/campgrounds');
};
