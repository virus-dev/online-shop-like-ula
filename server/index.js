require('dotenv').config();
const express = require('express');
const router = require('./routes/index');

const app = express();
app.use('/api', router);
app.get('/', (req, res) => res.json({ message: 'Hidwadwadwa' }));

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    app.listen(PORT, () => console.log('========================', PORT));
  } catch (e) {
    console.log('Error')
  }
}
start();