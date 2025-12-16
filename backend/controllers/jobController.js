const Job = require("../models/Job");

exports.postJob = async (req, res) => {
  try {
    await Job.create(req.body);
    res.json({ message: "Job posted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
};
