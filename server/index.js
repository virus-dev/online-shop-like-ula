const express = require('express');
const router = require('./routes/index');

const app = express();
app.use('/api', router);
app.get('/', (req, res) => res.json({ message: 'Hidwadwadwa' }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('========================', PORT));