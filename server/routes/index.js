const Router = require('express');

const router = new Router;

router.get('/user', (req, res) => res.json({ message: 'Hi' }));

module.exports = router;