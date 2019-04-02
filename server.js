import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, err => {
  if (!err) {
    console.log(`app running on port ${PORT}`);
  } else {
    console.log('ERROR', err);
  }
});
