#!/usr/bin/env node

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//add 3rd question to ask user if they want to add or multiply
//add if(add) elseif(multiply) else(error function, then restart
	// by calling rl function)

var answer1,answer2;

var mult = function(answer1,answer2){
	var multiplied = (answer1*answer2);
	console.log("Your two numbers multiplied equals: ",multiplied.toPrecision(5));
};

var add = function(answer1,answer2) {
	var sum = (parseFloat(answer1)+parseFloat(answer2));
	console.log("Your two numbers added equals: ",sum.toPrecision(5));	
};

var rlfunction = function(){
	rl.question("What is your first number? ", function(answer1){
	rl.question("What is your second number? ", function(answer2){
	rl.question("Do you want to add [A] or multiply [M]? ",function(choice){
		if (choice === 'M' || choice === 'm') {
			mult(answer1,answer2);
			rl.question("Try again [Y/N]? ", function(startAgain){
				if (startAgain === "Y" || startAgain === 'y') {
					rlfunction();
				} else {
					//this should quit the function - currently it does not
					return true;
				};
			});
		} else if (choice === 'A' || choice === 'a') {
			add(answer1,answer2);
			rl.question("Try again [Y/N]? ", function(startAgain){
				if (startAgain === "Y" || startAgain === 'y') {
					rlfunction();
				} else {
					//this should quit the function - currently it does not
					return true;
				};
			});

		} else {
			rl.question("I don't understand what you entered. Try again [Y/N]? ", function(restart){
				if (restart === "Y" || restart === 'y') {
					rlfunction();
				} else {
					return;
				};
			});
		};
	});
	});
});
};

rlfunction();