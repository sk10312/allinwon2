
const express = require('express');
const router = express.Router();
const db = require('../../db'); // assume db connection

router.post('/log', async (req, res) => {
  const { employeeId, action, path } = req.body;
  try {
    await db.query(
      'INSERT INTO activity_logs (employee_id, action, path, timestamp) VALUES ($1, $2, $3, NOW())',
      [employeeId, action, path]
    );
    res.status(200).send({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Logging failed', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM activity_logs ORDER BY timestamp DESC LIMIT 100');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Log fetch failed', details: err.message });
  }
});

module.exports = router;
