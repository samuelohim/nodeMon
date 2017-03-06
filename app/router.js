const eo = require('express');
router = eo.Router();
module.exports = router;

router.get('/', require('./controllers/main.controller').showHome);