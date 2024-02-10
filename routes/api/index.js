const router = require("express").Router();
const writerDetail = require("./writer-detail-routes");
const news = require("./news-routes");
const subscription = require("./subscription-routes");
const blog = require("./blog-routes");
const category = require("./category-routes");
const subCategory = require("./sub-category-routes");
const admin = require("./admin-routes");
const mostViews = require("./most-views-routes");
const review = require("./reviews-routes");
const settings = require("./settings-routes");
const trending = require("./trending-routes");
const api = require("./api-route");

router.use("/writerdetail", writerDetail);
router.use("/news", news);
router.use("/subscription", subscription);
router.use("/blog", blog);
router.use("/category", category);
router.use("/subcategory", subCategory);
router.use("/admin", admin);
router.use("/mostviews", mostViews);
router.use("/reviews", review);
router.use("/settings", settings);
router.use("/trending", trending);
router.use("/", api);

module.exports = router;
