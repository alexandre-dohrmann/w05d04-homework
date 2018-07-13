// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampires = require('./models/vampire.js');
const VampiresCollection = require('./populateVampires')
// 3. Connect your database and collection name
const app = mongoose.connection;
// 4. Open your mongoose connection
mongoose.connect('mongodb://localhost:27017/vampires');

app.on("error", (err) => {
	console.log(err, "this is the error message")
});
app.on("connected", () => {
	console.log("mongoose is connected to mongodb")
});
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// Vampires.collection.insertMany(VampiresCollection,(err, data) => {
// 	console.log("added provided vampire data")
// 	mongoose.connection.close();
// });

// ### Add some new vampire data
// Vampires.create (
// 	{
// 	  name: "Alex",
// 	  hair_color: "Dark Brown",
// 	  eye_color: "Green",
// 	  dob: "06/19/1985",
// 	  loves: ["Music", "Running", "WebDev"],
// 	  location: "Denver, Colorado",
// 	  gender: "m",
// 	  victims: 50,
// 	}, (err, resCreate) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(resCreate);
// 		}
// 	});

// Vampires.create (
// 	{
// 	  name: "Bob Barker",
// 	  hair_color: "White",
// 	  eye_color: "Blue",
// 	  dob: "12/12/1923",
// 	  loves: ["Price Is Right", "Women", "Money"],
// 	  location: "Los Angeles, California",
// 	  gender: "m",
// 	  victims: 94,
// 	},
// 	{
// 	  name: "Joan Rivers",
// 	  hair_color: "Salt & Pepper",
// 	  eye_color: "Brown",
// 	  dob: "06/08/1933",
// 	  loves: ["Fashion", "Comedy", "Insults"],
// 	  location: "Brooklyn, New York",
// 	  gender: "f",
// 	  victims: 81,
// 	},
// 	{
// 	  name: "Whitney Houston",
// 	  hair_color: "Black",
// 	  eye_color: "Dark Brown",
// 	  dob: "08/09/1963",
// 	  loves: ["Singing", "Bobby Brown", "Cocaine"],
// 	  location: "Beverly Hills, California",
// 	  gender: "f",
// 	  victims: 48,
// 	}, (err, resCreate) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(resCreate);
// 		}
// });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// 1. Find all the vampires that that are females

Vampires.find({gender:"f"}, (err, response) => {
	console.log(response); 
});

// 2. Have greater than 500 victims

Vampires.find({victims:{$gt:500}}, (err, response) => {
	console.log(response);
});

// 3. Have fewer than or equal to 150 victims
Vampires.find({victims:{$lte:150}}, (err, response) => {
	console.log(response);
});

// 4.  Have a victim count is not equal to 210234
Vampires.find({victims:{$ne:210234}}, (err, response) => {
	console.log(response);
});

// 5. Have greater than 150 AND fewer than 500 victims
Vampires.find({victims:{$gt:150, $lt:500}}, (err, response) => {
	console.log(response);
})


/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
