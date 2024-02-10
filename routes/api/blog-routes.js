const router = require("express").Router();
const { model } = require("../../config/connection");
const { blog } = require("../../models");

errMsg = "No blogs found with this id";

router.get("/", (req, res) => {
  blog
    .findAll({
      attributes: [
        "id",
        "blog_title",
        "blog_content",
        "blog_date",
        "writer_id",
        "sub_category_id",
      ],
    })
    .then((dbBlogData) => res.json(dbBlogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  blog
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "blog_title",
        "blog_content",
        "blog_date",
        "writer_id",
        "sub_category_id",
      ],
    })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  blog
    .create({
      blog_title: req.body.blog_title,
      blog_content: req.body.blog_content,
      blog_date: req.body.blog_date,
      writer_id: req.body.writer_id,
      sub_category_id: req.body.sub_category_id,
    })
    .then((dbBlogData) => res.json(dbBlogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  blog
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbBlogData) => {
      if (!dbBlogData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  blog
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
