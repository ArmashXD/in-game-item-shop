const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./database'); 
const app = express();

app.use(express.json());


app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;


  db.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error finding user' });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: 'Username or password incorrect' });
      }

      bcrypt.compare(password, results[0].password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({ error: 'Username or password incorrect' });
        }

        const token = jwt.sign(
          { userId: results[0].id, username: results[0].username },
          'your_jwt_secret',
          { expiresIn: '1h' }
        );
        res.status(200).json({ token });
      });
    }
  );
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
