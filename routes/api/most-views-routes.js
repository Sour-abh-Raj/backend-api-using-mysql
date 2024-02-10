const router = require("express").Router();
const { model } = require("../../config/connection");
const { mostViews } = require("../../models");

errMsg = "No most viewed articles found with this id";

router.get("/", (req, res) => {
  mostViews
    .findAll({
      attributes: [
        "id",
        "most_views_name",
        "most_views_description",
        "most_views_image",
        "most_views_link",
      ],
    })
    .then((dbMostViewsData) => res.json(dbMostViewsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  mostViews
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "most_views_name",
        "most_views_description",
        "most_views_image",
        "most_views_link",
      ],
    })
    .then((dbMostViewsData) => {
      if (!dbMostViewsData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbMostViewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  mostViews
    .create({
      most_views_name: req.body.most_views_name,
      most_views_description: req.body.most_views_description,
      most_views_image: req.body.most_views_image,
      most_views_link: req.body.most_views_link,
    })
    .then((dbMostViewsData) => res.json(dbMostViewsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  mostViews
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbMostViewsData) => {
      if (!dbMostViewsData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbMostViewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  mostViews
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbMostViewsData) => {
      if (!dbMostViewsData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbMostViewsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
