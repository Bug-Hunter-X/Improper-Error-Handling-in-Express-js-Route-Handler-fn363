const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM users WHERE id = $1', [userId], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Failed to retrieve user data' });
    } else if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(result.rows[0]);
    }
  });
});

// ... rest of your Express app