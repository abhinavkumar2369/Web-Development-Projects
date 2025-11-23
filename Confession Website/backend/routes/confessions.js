import express from 'express';
import Confession from '../models/Confession.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const confessions = await Confession.find().sort({ createdAt: -1 });
    res.json(confessions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch confessions' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { heading, message, name } = req.body;
    if (!heading || !message) {
      return res.status(400).json({ error: 'Heading and message are required' });
    }
    const confession = await Confession.create({
      heading,
      message,
      authorName: name && name.trim() !== '' ? name.trim() : 'Anonymous'
    });
    res.status(201).json(confession);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create confession' });
  }
});

export default router;
