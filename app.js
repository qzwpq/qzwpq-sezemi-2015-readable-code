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
};

var getNameById = function(id, obj) {
	var keys = Object.keys(obj);
	for (var i = keys.length - 1; i >= 0; i--) {
		var key = keys[i];
		if (obj[key] === id) {
			return key;
		}
	}
	new Error('the name is not in the object');
};

var printIdAndName = function(recipe) {
	var recipeName = recipe.name;
	var recipeId = getRecipeId(recipeName);
	console.log(recipeId + ': ' + recipeName);
};

var args = process.argv.slice(2);

var getRecipeId = initIdTable();

var recipes = readJson('./recipe.json');

if (args.length === 0) {
	recipes.forEach(function(recipe) {
		printIdAndName(recipe);
	});
} else {
	args.forEach(function(id) {
		var var name=getNameById(id);
		printIdAndName(recipe);
	});
}
