module.exports = {

	showListing: (req, res)=>{

		const items = [	{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},

					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'},
					{name: 'alksdjf', district: 'qwerqwer', pic: 'qwerqwer'}
				];

		res.render('ye/listing', {items:items});

	},

	showSingleItem: (req, res) =>{
		const singleItem = {name: 'abc', district: 'qwerqwer', slug: 'xz'};
		res.render('ye/singleItem', {singleItem:singleItem});

	}

};