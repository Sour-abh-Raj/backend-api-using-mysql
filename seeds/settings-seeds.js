const { settings } = require("../models");

const settingsData = [
  {
    site_name: "The Best of the Best",
    site_description: "This is the best of the best",
    site_email: "abc@stark.com",
    site_phone: "123-456-7890",
    site_address: "123 Main St, New York, NY 10030",
    site_logo: "https://via.placeholder.com/150",
  },
  {
    site_name: "The Best of the Best",
    site_description: "This is the best of the best",
    site_email: "random@hotmail.com",
    site_phone: "123-456-7890",
    site_address: "123 Main St, New York, NY 10030",
    site_logo: "https://via.placeholder.com/150",
  },
];

const seedSettings = () => settings.bulkCreate(settingsData);

module.exports = seedSettings;
