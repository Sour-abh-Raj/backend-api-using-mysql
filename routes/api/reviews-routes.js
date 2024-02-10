const router = require("express").Router();
const { model } = require("../../config/connection");
const { reviews } = require("../../models");

errMsg = "No reviews found with this id";

router.get("/", (req, res) => {
  reviews
    .findAll({
        attributes: ["id", "review"],
    })
    .then((dbReviewsData) => res.json(dbReviewsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  reviews
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "review"],
    })
    .then((dbReviewsData) => {
      if (!dbReviewsData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbReviewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  reviews
    .create({
        review: req.body.review,
    })
    .then((dbReviewsData) => res.json(dbReviewsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  reviews
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbReviewsData) => {
      if (!dbReviewsData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbReviewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  reviews
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbReviewsData) => {
      if (!dbReviewsData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbReviewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
