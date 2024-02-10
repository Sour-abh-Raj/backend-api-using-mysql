const { news } = require("../models");

const newsData = [
  {
    news_title: "Quantum Computing",
    news_content: "Quantum Computing is the future",
    news_date: "2021-09-01",
    writer_id: 1,
    sub_category_id: 1,
  },
  {
    news_title: "Artificial Intelligence",
    news_content: "Artificial Intelligence is the future",
    news_date: "2021-09-01",
    writer_id: 1,
    sub_category_id: 1,
  },
  {
    news_title: "Bollywood",
    news_content: "Bollywood is the future",
    news_date: "2021-09-01",
    writer_id: 1,
    sub_category_id: 2,
  },
  {
    news_title: "Hollywood",
    news_content: "Hollywood is the future",
    news_date: "2021-09-01",
    writer_id: 1,
    sub_category_id: 2,
  },
  {
    news_title: "Korean Drama",
    news_content: "Korean Drama is the future",
    news_date: "2021-09-01",
    writer_id: 1,
    sub_category_id: 2,
  },
];

const seedNews = () => news.bulkCreate(newsData);

module.exports = seedNews;
