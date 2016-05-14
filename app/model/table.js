// *********************************************************************************
// CHARACTER.JS - THIS FILE CREATES A MODELED OF INDIVIDUAL CHARACTERS IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Character" model that matches up with DB
var Table = sequelize.define("tableData", {
	customerName: {
		type: Sequelize.STRING,
	},
	customerEmail: {
		type: Sequelize.STRING,
	},
	customerID: {
		type: Sequelize.STRING,
	},
	phoneNumber: {
		type: Sequelize.STRING,
	}
});

// Syncs with DB
Table.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Table;
