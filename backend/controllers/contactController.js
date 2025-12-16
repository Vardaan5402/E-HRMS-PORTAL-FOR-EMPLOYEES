const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    await Contact.create(req.body);
    res.json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
};
