const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const project = require('./routes/projectRoute');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', project);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));