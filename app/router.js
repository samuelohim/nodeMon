const eo = require('express');
router = eo.Router();
module.exports = router;

router.get('/', require('./controllers/main.controller').showHome);

router.get('/listing', require('./controllers/listing.controller').showListing);

router.get('/detail/:slug', require('./controllers/listing.controller').showSingleItem);