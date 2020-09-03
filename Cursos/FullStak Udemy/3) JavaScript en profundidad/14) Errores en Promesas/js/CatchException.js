'use strict'

const LOAD_EVENT = 'load';
const URL_BACKEND = "https://reqres.in/api/users?page=2";

window.addEventListener(LOAD_EVENT, () => {
	//fetch(URL_BACKEND).
	fetch("https://reqres.in2/api/users?page=").
	then(data => data.json()).
	then(userList => {
		userList = userList.data;
		userList.forEach(user => {
			console.log(user);
		});
	}).
	catch(error => {
		console.log(error);
	});
});