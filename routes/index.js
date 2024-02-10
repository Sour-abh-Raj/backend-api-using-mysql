const router = require("express").Router();
const apiRoutes = require("./api");

successMsg =
  "Redirected to the home page. Please use /api to access the API routes.";

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send(`<h1>${successMsg}</h1>`);
});

module.exports = router;
