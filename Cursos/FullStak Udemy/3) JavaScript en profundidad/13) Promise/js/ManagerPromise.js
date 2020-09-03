'use strict'

window.addEventListener('load', () => {
	getInfo().
	then(data => {
		console.log(JSON.parse(data).name);
	});
});

function getInfo() {
	var user = {
		name : "Camilo",
		country : "Colombia",
		age : 22
	};
	return new Promise((resolve, reject) => {
		var userString = JSON.stringify(user);
		if (typeof userString != "string") return reject("Error");
		return resolve(userString);
	});
}