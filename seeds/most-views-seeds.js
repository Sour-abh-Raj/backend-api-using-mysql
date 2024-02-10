const { mostViews } = require("../models");

const mostViewsData = [
  {
    most_views_name: "The Best of the Best",
    most_views_description: "This is the best of the best",
    most_views_image: "https://via.placeholder.com/150",
    most_views_link: "https://www.google.com",
  },
  {
    most_views_name: "The Best of the Best",
    most_views_description: "This is the best of the best",
    most_views_image: "https://via.placeholder.com/150",
    most_views_link: "https://www.google.com",
  },
  {
    most_views_name: "The Best of the Best",
    most_views_description: "This is the best of the best",
    most_views_image: "https://via.placeholder.com/150",
    most_views_link: "https://www.google.com",
  },
  {
    most_views_name: "The Best of the Best",
    most_views_description: "This is the best of the best",
    most_views_image: "https://via.placeholder.com/150",
    most_views_link: "https://www.google.com",
  },
  {
    most_views_name: "The Best of the Best",
    most_views_description: "This is the best of the best",
    most_views_image: "https://via.placeholder.com/150",
    most_views_link: "https://www.google.com",
  },
  {
    most_views_name: "The Best of the Best",
    most_views_description: "This is the best of the best",
    most_views_image: "https://via.placeholder.com/150",
    most_views_link: "https://www.google.com",
  },
];

const seedMostViews = () => mostViews.bulkCreate(mostViewsData);

module.exports = seedMostViews;
