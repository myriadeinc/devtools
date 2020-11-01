const router = require('express').Router();

router.use('/metrics', require('src/routes/sapphire.router.js'));

module.exports = router;
