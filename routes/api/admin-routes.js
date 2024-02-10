const router = require("express").Router();
const { model } = require("../../config/connection");
const { admin } = require("../../models");

errMsg = "No admin found with this id";

router.get("/", (req, res) => {
  admin
    .findAll({
      attributes: ["id", "admin_name", "admin_email"],
    })
    .then((dbAdminData) => res.json(dbAdminData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  admin
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "admin_name", "admin_email"],
    })
    .then((dbAdminData) => {
      if (!dbAdminData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbAdminData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  admin
    .create({
      admin_name: req.body.admin_name,
      admin_email: req.body.admin_email,
    })
    .then((dbAdminData) => res.json(dbAdminData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  admin
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbAdminData) => {
      if (!dbAdminData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbAdminData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  admin
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbAdminData) => {
      if (!dbAdminData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbAdminData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
