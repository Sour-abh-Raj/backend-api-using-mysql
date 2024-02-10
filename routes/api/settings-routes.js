const router = require("express").Router();
const { model } = require("../../config/connection");
const { settings } = require("../../models");

errMsg = "No settings found with this id";

router.get("/", (req, res) => {
  settings
    .findAll({
      attributes: [
        "id",
        "site_name",
        "site_description",
        "site_email",
        "site_phone",
        "site_address",
        "site_logo",
      ],
    })
    .then((dbSettingsData) => res.json(dbSettingsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  settings
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "site_name",
        "site_description",
        "site_email",
        "site_phone",
        "site_address",
        "site_logo",
      ],
    })
    .then((dbSettingsData) => {
      if (!dbSettingsData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSettingsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  settings
    .create({
      site_name: req.body.site_name,
      site_description: req.body.site_description,
      site_email: req.body.site_email,
      site_phone: req.body.site_phone,
      site_address: req.body.site_address,
      site_logo: req.body.site_logo,
    })
    .then((dbSettingsData) => res.json(dbSettingsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  settings
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbSettingsData) => {
      if (!dbSettingsData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSettingsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  settings
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbSettingsData) => {
      if (!dbSettingsData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSettingsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
