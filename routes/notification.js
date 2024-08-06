var express = require('express');
var router = express.Router();

router.post('/register', (req, res) => {
  const { token } = req.body;

  if (token) {
    global.deviceTokens = token;
    res.status(200).send('Token received and saved:');
  } else {
    res.status(400).send('Token is missing');
  }
});

module.exports = router;
