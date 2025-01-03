const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.query('SELECT * FROM users WHERE id = $1', [userId], (err, result) => {
    if (err) {
      // Log the error but don't send a proper response
      console.error(err);
      res.send('Something went wrong');
    } else {
      res.json(result.rows);
    }
  });
});

// ... rest of your Express app