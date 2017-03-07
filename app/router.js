const eo = require('express');
router = eo.Router();
module.exports = router;

router.get('/', require('./controllers/main.controller').showHome);

router.get('/listing', require('./controllers/listing.controller').showListing);

// See items
 router.get('/listing/seed', require('./controllers/listing.controller').seedRestaurants);

router.get('/detail/:slug', require('./controllers/listing.controller').showSingleItem);
