const express = require('express');
const router = require('./routes/index');

const app = express();
app.use('/api', router);

const PORT = 5000;

const start = async () => {
  try {
    app.listen(PORT, () => console.log('GOOOOOO'))
  } catch (e) {
    console.log('Error')
  }
}
start();