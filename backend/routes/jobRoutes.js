const express = require("express");
const router = express.Router();
const jobs = require("../controllers/jobController");

router.post("/", jobs.postJob);
router.get("/", jobs.getJobs);

module.exports = router;
