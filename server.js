const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// Routes
const staffRoutes = require('./routes/staffRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/staff', staffRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
