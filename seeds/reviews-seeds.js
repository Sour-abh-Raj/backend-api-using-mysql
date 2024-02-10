const { reviews } = require("../models");

const reviewsData = [
  {
    review: "This is the best of the best",
  },
  {
    review: "Nice read",
  },
  {
    review: "I love this website",
  },
  {
    review: "Very informative",
  },
];

const seedReviews = () => reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
