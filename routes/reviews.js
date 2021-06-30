const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const Campground = require('../models/campground');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');

//* @route POST
//? @desc Create review
router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

//* @route DELETE
//? @desc Delete review
router.delete(
  '/:reviewId',
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
