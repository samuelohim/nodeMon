const mgo = require('mongoose'),
	Schema = mgo.Schema;


	// Create the schema

		const restaurantSchema = new Schema({
			name: String,
			slug: {
				type: String,
				unique: true
			},
			description: String
		});


	// Create the model
		const restaurantModel = mgo.model('restaurant', restaurantSchema);

	// export the model
		module.exports = restaurantModel;

	// middleware

		restaurantSchema.pre('save', function(next){

			this.slug = slugify(this.name);
			next();
		});

		function slugify(text) { // Make url ready
		  return text.toString().toLowerCase()
		    .replace(/\s+/g, '-')           // Replace spaces with -
		    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
		    .replace(/^-+/, '')             // Trim - from start of text
		    .replace(/-+$/, '');            // Trim - from end of text
		}