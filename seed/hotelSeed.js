const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Hotel = require('../models/Hotel');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const hotelData = [
  {
    name: "Family Rooms",
    pricePerNight: 900,
    guests: 4,
    beds: 2,
    baths: 1,
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    imageUrl: "https://res.cloudinary.com/dbizn6b9x/image/upload/v1756414257/freyzkiqefjicc0xhr1i.png"
  },
  {
    name: "Deluxe Suite",
    pricePerNight: 1200,
    guests: 2,
    beds: 1,
    baths: 1,
    description: "Luxurious suite with sea view, king size bed and modern amenities.",
    imageUrl: "https://res.cloudinary.com/dbizn6b9x/image/upload/v1756414313/j9hu2np66dpdqynulgyi.png"
  },
    {
    name: "Deluxe Suite",
    pricePerNight: 1200,
    guests: 2,
    beds: 1,
    baths: 1,
    description: "Luxurious suite with sea view, king size bed and modern amenities.",
    imageUrl: "https://res.cloudinary.com/dbizn6b9x/image/upload/v1756414313/j9hu2np66dpdqynulgyi.png"
  }
];

const seedHotels = async () => {
  try {
    await Hotel.deleteMany({});
    await Hotel.insertMany(hotelData);
    console.log('Hotel data seeded!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedHotels();
