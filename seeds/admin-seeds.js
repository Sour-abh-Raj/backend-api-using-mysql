const { admin } = require("../models");

const adminData = [
  {
    admin_name: "John Doe",
    admin_email: "abc@xyz.com",
    admin_password: "password12345",
  },
];

const seedAdmin = () => admin.bulkCreate(adminData);

module.exports = seedAdmin;
