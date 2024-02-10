const router = require("express").Router();
const { model } = require("../../config/connection");
const { category } = require("../../models");

errMsg = "No category found with this id";

router.get("/", (req, res) => {
  category
    .findAll({
      attributes: ["id", "category_name"],
    })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  category
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "category_name"],
    })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  category
    .create({
      category_name: req.body.category_name,
    })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  category
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbCategoryData) => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  category
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
