require('dotenv').config();
	const eo = require('express');
	app = eo();

port = process.env.PORT || 8080;

	app.set('view engine', 'ejs');

mgo = require('mongoose');
mgo.connect(process.env.mdb);

	expressLayout = require('express-ejs-layouts');
	app.use(expressLayout);

			app.use(eo.static(__dirname+'/public/css'));
			app.use(require('./app/router.js'));

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});