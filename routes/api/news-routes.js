const router = require("express").Router();
const { model } = require("../../config/connection");
const { news } = require("../../models");

errMsg = "No news articles found with this id";

router.get("/", (req, res) => {
  news
    .findAll({
      attributes: [
        "id",
        "news_title",
        "news_content",
        "news_date",
        "writer_id",
        "sub_category_id",
      ],
    })
    .then((dbNewsData) => res.json(dbNewsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  news
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "news_title",
        "news_content",
        "news_date",
        "writer_id",
        "sub_category_id",
      ],
    })
    .then((dbNewsData) => {
      if (!dbNewsData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbNewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  news
    .create({
      news_title: req.body.news_title,
      news_content: req.body.news_content,
      news_date: req.body.news_date,
      writer_id: req.body.writer_id,
      sub_category_id: req.body.sub_category_id,
    })
    .then((dbNewsData) => res.json(dbNewsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  news
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbNewsData) => {
      if (!dbNewsData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbNewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  news
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbNewsData) => {
      if (!dbNewsData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbNewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
