const express = require('express');
const router = require('./routes/index');

const app = express();
app.use('/api', router);
app.get('/', (req, res) => res.json({ message: 'Hidwadwadwa' }));

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(PORT, () => console.log('Server started on PORT:', PORT));
  } catch (e) {
    console.log(e)
  }
}
start();
