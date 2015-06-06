#!/usr/bin/env node

var fs = require('fs');

var readJson = function(path) {
	var data = fs.readFileSync(path, {
		encoding: 'utf8'
	});
	return JSON.parse(data);
};

var initIdTable = function() {
	var table = {};
	var count = 0;
	return function(name) {
		// confirm the name is not in the table
		if (table[name] === void 0) {
			return ++count;
		} else {
			return count;
		}
	};
}

var getRecipeId = initIdTable();

var recipes = readJson('./recipe.json');

recipes.forEach(function(recipe) {
	var recipeName = recipe.name;
	var recipeId = getRecipeId(recipeName);
	console.log(recipeId + ': ' + recipeName);
});
