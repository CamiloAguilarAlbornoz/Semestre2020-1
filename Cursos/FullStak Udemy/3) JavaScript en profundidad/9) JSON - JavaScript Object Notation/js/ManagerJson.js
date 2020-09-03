'use strict'

var movie = {
	title : "The Silence of the Lambs",
	year : 1991,
	country : "United States"
};

window.addEventListener('load', () => {
	var moviesList = [
		movie,
		{
			title : "Requiem For a Dream",
			year : 2000,
			country : "United States"
		},
		{
			title : "Black Swan",
			year : 2010,
			country : "United States"
		},
		{
			title : "The Joker",
			year : 2019,
			country : "United States"
		},
		{
			title : "The Irishman",
			year : 2010,
			country : "United States"
		}
	];
	show(moviesList);
});

function show(moviesList) {
	var table = document.querySelector("#movieTable");
	moviesList.forEach(actual => {
		var row = document.createElement("tr");
		var columnTitle = document.createElement("td");
		var columnYear = document.createElement("td");
		var columnCountry = document.createElement("td");
		columnTitle.append(actual.title);
		columnYear.append(actual.year);
		columnCountry.append(actual.country);
		row.append(columnTitle);
		row.append(columnYear);
		row.append(columnCountry);
		table.append(row);
	});
}