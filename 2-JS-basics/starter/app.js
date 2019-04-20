// Variable declaration
/*
let firstName = prompt('what is your name?');
let LastName  = "Nwagwu";
let age = prompt('how old are you?');
let fullAge = true;
let job;
job = prompt('what is your occupation?');
alert(firstName + ' is a ' + age + ' years old ' + job);
//confirm('would you like to proceed?')
//alert(job);

*/
/*
let currentYear, firstName, LastName, birthYear, age;

firstName = prompt('What is your name?');
birthYear = prompt('When weere you born?');
currentYear = prompt('What year are we in');

age = parseInt(currentYear) - parseInt(birthYear);
confirm(firstName + ' I know your age');

alert('You are ' + age + ' years old!');
*/

/*
let markMass, johnMass, markHeight, johnHeight,
	markBMI, johnBMI, isMarkBMIGreater;

markHeight = 1.7;
markMass = 70;
johnHeight = 1.5;
johnMass = 70;

markBMI = markMass/(markHeight * markHeight);
johnBMI = johnMass/(johnHeight * johnHeight);

isMarkBMIGreater = markBMI > johnBMI;

alert("Is Mark's BMI higher than John's? " + isMarkBMIGreater)
*/
/*
let firstName = 'Cohbams';
let maritalStatus = 'single';

if (maritalStatus === 'married') {
	alert(firstName + ' is married');
} else {
	alert(firstName + ' is still a bachelor');
}

let isMarried = false;
if (isMarried) {
	alert(firstName + ' is married');
} else {
	alert(firstName + ' is still a bachelor');
}
*/

/*
let firstName, age;

firstName = 'Sammy';
age = 4;

if (age < 13) {
	alert(firstName + ' is still a small boy');
} else if (age >= 13 && age < 20) {
	alert(firstName + ' is still a teenager');
} else if (age >= 20 && age < 50) {
	alert(firstName + ' is now a man');
} else {
	alert(firstName + ' is now an advanced man');
}

let drink = age >= 18 ? 'beer':'juice';
alert(firstName + ' drink\'s ' + drink);
*/

/*
let firstName, age;

firstName = 'Ahab';
age = 140;

switch (true) {
	case age < 13:
		alert(firstName + ' is still a small boy');
		break;
	case age >= 13 && age < 20:
		alert(firstName + ' is still a teenager');
		break;
	case age >= 20 && age < 30:
		alert(firstName + ' is an adult');
		break;
	case age >= 30 && age < 50:
		alert(firstName + ' is now a man');
		break;
	case age >= 50 && age <= 120:
		alert(firstName + ' is now an old man');
		break;
	default:
		alert(firstName + ' is not human');
		break;
}
*/

// CODING CHALLENGE 2

let teamJohnWins, teamMikeWins, 
	johnGame1, johnGame2, johnGame3,
	mikeGame1, mikeGame2, mikeGame3,
	mikeAverage, johnAverage
	gameDraw;

johnGame1 = 89;
johnGame2 = 120;
johnGame3 = 103;

mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;

johnAverage = (johnGame1 + johnGame2 + johnGame3)/3;

mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3)/3;

teamJohnWins = johnAverage > mikeAverage;

gameDraw = johnAverage === mikeAverage;

if (gameDraw) {
	alert('a tie!!! play again to get a winner');
} else if (teamJohnWins) {
	alert('John\'s team has won with an average score of ' + johnAverage)
} else {
	alert('Mike's\'s team has won with an average score of ' + mikeAverage)
}