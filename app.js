#!/usr/bin/env node

var fs = require('fs');

var readJson = function(path) {
	var data = fs.readFileSync(path, {
		encoding: 'utf8'
	});
	return JSON.parse(data);
};

var recipes = readJson('./recipe.json');

recipes.forEach(function(recipe) {
	console.log(recipe.name);
});
