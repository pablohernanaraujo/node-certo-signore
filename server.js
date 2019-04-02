const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, err => {
  err ? console.log('ERROR', err) : console.log(`server running on port ${PORT}`);
});
