#!/usr/bin/env node

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var answer1,answer2;

mult = function(answer1,answer2){
	var multiplied = (answer1*answer2);
	console.log("Your two numbers multiplied equals: ",multiplied.toPrecision(5));
}

rl.question("What is your first number? ", function(answer1){
	rl.question("What is your second number? ", function(answer2){
		rl.close();
		mult(answer1,answer2);
	});
});