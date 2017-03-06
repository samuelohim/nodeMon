const eo = require('express');
app = eo();
port = process.env.PORT || 8080;

app.use(require('./app/router.js'));

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});