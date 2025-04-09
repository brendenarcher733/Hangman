const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Result = require('./models/Result');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/hangman', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/word', (req, res) => {
  const words = ['react', 'hangman', 'docker', 'compose', 'javascript'];
  const word = words[Math.floor(Math.random() * words.length)];
  res.json({ word });
});

app.post('/api/result', async (req, res) => {
  const { win } = req.body;
  const result = new Result({ win });
  await result.save();
  res.sendStatus(200);
});

app.get('/api/stats', async (req, res) => {
  const total = await Result.countDocuments();
  const wins = await Result.countDocuments({ win: true });
  const percentage = total > 0 ? ((wins / total) * 100).toFixed(2) : "0.00";
  res.json({ winPercentage: percentage });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
