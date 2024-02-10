const router = require("express").Router();
const { model } = require("../../config/connection");
const { subCategory } = require("../../models");

errMsg = "No sub-category found with this id";

router.get("/", (req, res) => {
  subCategory
    .findAll({
      attributes: ["id", "sub_category_name", "category_id"],
    })
    .then((dbSubCategoryData) => res.json(dbSubCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  subCategory
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "sub_category_name", "category_id"],
    })
    .then((dbSubCategoryData) => {
      if (!dbSubCategoryData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSubCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  subCategory
    .create({
      sub_category_name: req.body.sub_category_name,
      category_id: req.body.category_id,
    })
    .then((dbSubCategoryData) => res.json(dbSubCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  subCategory
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbSubCategoryData) => {
      if (!dbSubCategoryData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSubCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  subCategory
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbSubCategoryData) => {
      if (!dbSubCategoryData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSubCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
