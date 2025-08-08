const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Lead = require('./lead.model');

const app = express();

// Middleware
app.use(cors({
  origin: 'https://growly-client-a7cf-9o6u0cnaj-shivam-bhardwajs-projects-d06f6c68.vercel.app',
  methods: ['GET','POST','OPTIONS'],
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/leads', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json({ message: 'Lead saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save lead', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
