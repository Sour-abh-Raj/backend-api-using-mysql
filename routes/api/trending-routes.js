const router = require("express").Router();
const { model } = require("../../config/connection");
const { trending } = require("../../models");

errMsg = "No trending articles found with this id";

router.get("/", (req, res) => {
  trending
    .findAll({
      attributes: [
        "id",
        "trending_name",
        "trending_description",
        "trending_image",
        "trending_link",
      ],
    })
    .then((dbTrendingData) => res.json(dbTrendingData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  trending
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "trending_name",
        "trending_description",
        "trending_image",
        "trending_link",
      ],
    })
    .then((dbTrendingData) => {
      if (!dbTrendingData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbTrendingData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  trending
    .create({
      trending_name: req.body.trending_name,
      trending_description: req.body.trending_description,
      trending_image: req.body.trending_image,
      trending_link: req.body.trending_link,
    })
    .then((dbTrendingData) => res.json(dbTrendingData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  trending
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbTrendingData) => {
      if (!dbTrendingData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbTrendingData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  trending
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbTrendingData) => {
      if (!dbTrendingData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbTrendingData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
