// ===============================================================================
// DATA
// Below data will hold all of the hired waiters.
// Initially we just set it equal to a "dummy" waiter. 
// But you could have it be an empty array as well.
// ===============================================================================


var waiterArray = [
	{
		waiterName: "Mike",
		waiterEmail: "mike@gmail.com",
		waiterID: "mike9999",
		phoneNumber: "111-222-3333",

	}
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = waiterArray; 