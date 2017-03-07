const Item = require('../models/restaurant');
module.exports = {

	showListing: (req, res)=>{

		

		res.render('ye/listing', {Item:Item});

	},

	showSingleItem: (req, res) =>{
		const singleItem = {name: 'abc', district: 'qwerqwer', slug: 'xz'};
		res.render('ye/singleItem', {singleItem:singleItem});

	},



	seedRestaurants: (req, res) =>{
		const items = [	{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},

					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'}
				];

		//	use restaurant model to save/insert
		for (item of items){
			var newItem = new Item(item);
			newItem.save();
		}

		res.send('db seeded');
	}

};