const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { name } = req.body;
    res.json({ result: `Hello ${name}, your request was processed successfully!` });
});

module.exports = router;
