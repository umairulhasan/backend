const Staff = require('../models/Staff');

const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find({});
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStaff };
