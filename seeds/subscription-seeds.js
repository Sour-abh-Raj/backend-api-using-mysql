const { subscription } = require("../models");

const subscriptionData = [
  {
    subscription_type: "Basic",
    subscription_price: 5.99,
  },
  {
    subscription_type: "Premium",
    subscription_price: 9.99,
  },
  {
    subscription_type: "Pro",
    subscription_price: 14.99,
  },
];

const seedSubscription = () => subscription.bulkCreate(subscriptionData);

module.exports = seedSubscription;
