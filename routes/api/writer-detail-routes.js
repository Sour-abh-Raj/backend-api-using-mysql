const router = require("express").Router();
const { model } = require("../../config/connection");
const { writerDetail } = require("../../models");

errMsg = "No writer found with this id";

router.get("/", (req, res) => {
  writerDetail
    .findAll({
      attributes: ["id", "writer_name", "writer_bio"],
    })
    .then((dbWriterData) => res.json(dbWriterData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  writerDetail
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "writer_name", "writer_bio"],
    })
    .then((dbWriterData) => {
      if (!dbWriterData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbWriterData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  writerDetail
    .create({
      writer_name: req.body.writer_name,
      writer_bio: req.body.writer_bio,
    })
    .then((dbWriterData) => res.json(dbWriterData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  writerDetail
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbWriterData) => {
      if (!dbWriterData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbWriterData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  writerDetail
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbWriterData) => {
      if (!dbWriterData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbWriterData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
