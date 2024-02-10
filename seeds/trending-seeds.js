const { trending } = require("../models");

const trendingData = [
  {
    trending_name: "The Best of the Best",
    trending_description: "This is the best of the best",
    trending_image: "https://via.placeholder.com/150",
    trending_link: "https://www.google.com",
  },
  {
    trending_name: "The Best of the Best",
    trending_description: "This is the best of the best",
    trending_image: "https://via.placeholder.com/150",
    trending_link: "https://www.google.com",
  },
  {
    trending_name: "The Best of the Best",
    trending_description: "This is the best of the best",
    trending_image: "https://via.placeholder.com/150",
    trending_link: "https://www.google.com",
  },
  {
    trending_name: "The Best of the Best",
    trending_description: "This is the best of the best",
    trending_image: "https://via.placeholder.com/150",
    trending_link: "https://www.google.com",
  },
  {
    trending_name: "The Best of the Best",
    trending_description: "This is the best of the best",
    trending_image: "https://via.placeholder.com/150",
    trending_link: "https://www.google.com",
  },
];

const seedTrending = () => trending.bulkCreate(trendingData);

module.exports = seedTrending;
