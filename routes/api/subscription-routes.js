const router = require("express").Router();
const { subscription } = require("../../models");

const errMsg = "No subscription found with this id";

router.get("/", (req, res) => {
  subscription
    .findAll({
      attributes: ["id", "subscription_type", "subscription_price"],
    })
    .then((dbSubscriptionData) => res.json(dbSubscriptionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  subscription
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "subscription_type", "subscription_price"],
    })
    .then((dbSubscriptionData) => {
      if (!dbSubscriptionData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSubscriptionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  subscription
    .create({
      subscription_type: req.body.subscription_type,
      subscription_price: req.body.subscription_price,
    })
    .then((dbSubscriptionData) => res.json(dbSubscriptionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  subscription
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbSubscriptionData) => {
      if (!dbSubscriptionData[0]) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSubscriptionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  subscription
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbSubscriptionData) => {
      if (!dbSubscriptionData) {
        res.status(404).json({ message: errMsg });
        return;
      }
      res.json(dbSubscriptionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
