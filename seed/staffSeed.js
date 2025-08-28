const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Staff = require('../models/Staff');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const staffData = [
  { 
    name: "Michael Dean", 
    position: "Chef Master",
    image: "https://res.cloudinary.com/dbizn6b9x/image/upload/v1756414154/xkz2wqechlmmsef9ymzp.png"
  },
  { 
    name: "Arnold Taylor", 
    position: "Room Owner",
    image: "https://res.cloudinary.com/dbizn6b9x/image/upload/v1756414061/kikurktg1autaxycqgos.png"
  },
  { 
    name: "Michael Dean", 
    position: "Assistant Chef",
    image: "https://res.cloudinary.com/dbizn6b9x/image/upload/v1756414207/d81zrjpr6rbl3hghs8vm.png"
  },
];

const seedStaff = async () => {
  try {
    await Staff.deleteMany({});
    await Staff.insertMany(staffData);
    console.log('Staff data seeded!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedStaff();
