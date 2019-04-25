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

/*
// CODING CHALLENGE 2

// variable declarations
let teamJohnWins, teamMikeWins, teamMaryWins,
	johnGame1, johnGame2, johnGame3,
	mikeGame1, mikeGame2, mikeGame3,
	maryGame1, maryGame2, maryGame3,
	mikeAverage, johnAverage, maryAverage,
	gameDraw, tiedTeams;

// variable assignments
johnGame1 = 94;
johnGame2 = 134;
johnGame3 = 108;

mikeGame1 = 100;
mikeGame2 = 94;
mikeGame3 = 123;

maryGame1 = 97;
maryGame2 = 134;
maryGame3 = 105;

// calculate average game scores
johnAverage = (johnGame1 + johnGame2 + johnGame3)/3;

mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3)/3;

maryAverage = (maryGame1 + maryGame2 + maryGame3)/3;

// set winner logic
teamJohnWins = (johnAverage > mikeAverage) && (johnAverage > maryAverage);

teamMikeWins = (johnAverage < mikeAverage) && (mikeAverage > maryAverage);

// game draw condition
gameDraw = ((johnAverage === mikeAverage) && (johnAverage > maryAverage)) ||
			((maryAverage === mikeAverage) && (johnAverage < maryAverage)) ||
			((johnAverage === maryAverage) && (johnAverage > mikeAverage));

// get the teams with a tie
if (gameDraw) {
	if(johnAverage < mikeAverage) {
		tiedTeams = 'Mike\'s and Mary\'s teams';
	} else if(maryAverage < mikeAverage) {
		tiedTeams = 'Mike\'s and John\'s teams';
	} else {
		tiedTeams = 'Mary\'s and John\'s teams';
	}
}

// output display
if (gameDraw) {
	alert('a tie between ' + tiedTeams + ' play again to get a winner');
} else if (teamJohnWins) {
	alert('John\'s team has won with an average score of ' + johnAverage)
} else if (teamMikeWins) {
	alert('Mike\'s team has won with an average score of ' + mikeAverage)
} else {
	alert('Mary\'s team has won with an average score of ' + maryAverage)
}
*/

/*
function calculateAge (birthYear, currentYear) {
	return currentYear - birthYear;
}

let ageChijioke = calculateAge(1987, 2019);
//alert(ageChijioke)

function yearsUntilRetirement (firstName, year, now) {
	let age = calculateAge(year, now);
	let retirement = 65 - age;
	if (retirement > 0) {
		alert(firstName + ' retires in ' + retirement + 'years');
	} else {
		alert(firstName + ' is already retired')
	}
}
yearsUntilRetirement('Emma', 1900, 2019);
yearsUntilRetirement('Chijioke', 1987, 2019);
yearsUntilRetirement('Nkechi', 1990, 2019);
*/

/*
let whatDoYouDo = function (job, firstName) {
	switch (job) {
		case 'Teacher':
			return firstName + ' teaches students';
		case 'Doctor':
			return firstName + ' treats patients';
		case 'Lawyer':
			return firstName + ' defends clients';
		case 'Programmer':
			return firstName + ' writes codes to solve problems';
		default:
		return firstName + ' is unemployed';
	}
}
alert(whatDoYouDo('Programmer', 'Chijioke'));
alert(whatDoYouDo('Teacher', 'Ayo'));
*/

// ARRAYS
/*
let names = ['Happiness',  'Josiah', 'Chris', 'Chijioke'];
let years = [1988, 1985, 1984, 1987];

alert(names);
names[1] = 'Uzor';
names[names.length] = 'Obeta'
names.push('Nwoko');
alert(names);
names.unshift('Emeka');
alert(names);
names.pop();
names.pop();
names.shift();
alert(names);
*/
/*
// TIP CALCULATOR

// Variables
let billRestaurant = [124, 48, 268];
let tip;

// Tip calculator 
function tipGiven (bill) {
	if (bill < 50) {
		tip = bill * 0.2;
	} else if (bill >= 50 && bill < 201) {
		tip = bill * 0.15;
	} else {
		tip = bill * 0.1;
	}
	return tip;
}

let restaurantOneTip = tipGiven(billRestaurant[0]);
let restaurantTwoTip = tipGiven(billRestaurant[1]);
let restaurantThreeTip = tipGiven(billRestaurant[2]);

// Tips Array
let johnTips = [restaurantOneTip,
				restaurantTwoTip,
				restaurantThreeTip];

// Total Amount paid
let paidAmount = [johnTips[0] + billRestaurant[0],
				  johnTips[1] + billRestaurant[1],
				  johnTips[2] + billRestaurant[2],]
alert(johnTips);
alert(paidAmount);
*/

//OBJECTS AND PROPERTIES
/*
let chijioke = {
	firstName: 'Chijioke',
	lastName: 'Nwagwu',
	birthYear: 1988,
	family: ['Edith', 'Bethel', 'Chima', 'Enyinnaya', 'Bridget'],
	job: 'Programmer',
	isMarried: false,
	calcAge: function () {
		this.age = 2019 - this.birthYear;
	},
};

chijioke.calcAge();
console.log(chijioke);

alert(chijioke.family);
chijioke.job = 'Data Scientist';

let x = 'job';
alert(chijioke[x]);

let gloria = new Object();
gloria.firstName = 'Gloria';
gloria.lastName = 'Ugwu';
gloria.birthYear = 1994;
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
let mark = {
	firstName: 'Mark',
	mass: '60',
	height: 1.5,
	calcBMI: function () {
		this.BMI = this.mass/(this.height * this.height);
		return this.BMI;
	}
}

mark.calcBMI();
//console.log(mark.BMI);

let john = {
	firstName: 'John',
	mass: 60,
	height: 1.5,
	calcBMI: function () {
		this.BMI = this.mass/(this.height * this.height);
		return this.BMI;
	}
}
john.calcBMI();
//console.log(john.BMI)
if (john.BMI > mark.BMI) {
	console.log(john.firstName + ' has a higher BMI of ' + john.BMI);
} else if (john.BMI < mark.BMI) {
	console.log(mark.firstName + ' has a higher BMI of ' + mark.BMI);
} else {
	console.log(john.firstName + ' and ' + mark.firstName + ' have equal BMIs')
}
*/

// LOOPS AND ITERATION
/*for (let i = 0; i < 10; i++) {
	console.log(i + '\) Jesus is Lord')
}

let names = ['Happiness',  'Josiah', 'Chris', 'Chijioke'];

for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

// WHILE LOOP
let i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}
*/


// CONTINUE AND BREAK STATEMENTS
/*let names = ['Happiness',  'Josiah', 20, 'Chris', 'Chijioke'];
for (let i = names.length-1; i >= 0; i--) {
	if (typeof names[i] !== 'string') {
		continue;
	}
	console.log(names[i]);
}*/
/*let tip = [];
let johnTip = {
	bills: [124, 48, 268, 180, 42],
	calcTip: function () {
		
		for (i = 0; i < this.bills.length - 1; i++) {
			if (this.bills[i] < 50) {
				tip[i] = this.bills[i] * 0.2;
				//console.log(tip[i])
			} else if ((this.bills[i] >= 50) && (this.bills[i] < 201)) {
				tip[i] = this.bills[i] * 0.15;
				//console.log(tip[i])
			} else if (this.bills[i] > 200) {
				tip[i] = this.bills[i] * 0.10;
			}
			tip.push(tip[i]);
		}
	}
};
//console.log(tip[i])
johnTip.calcTip();
/*for(i = 0; i < johnTip.bills.length - 1; i++){
	
}


console.log(tip);*/

// CODE CHALLENGE
 // variables
let paidAmounts = [];
let paid;
let tipGiven;
let tip;
let tips = [];

// // Object
let johnTip = {
 	bills: [124, 48, 268, 180, 42],// Array
// 	//Method
// 	calcTip: function () {
// 		// loop through
// 		for (i = 0; i < this.bills.length; i++) {
// 			// set tip
// 			if (this.bills[i] < 50) {
// 				tip =  0.2;
// 			} else if ((this.bills[i] >= 50) && (this.bills[i] < 201)) {
// 				tip = 0.15;
// 				//console.log(tip[i])
// 			} else if (this.bills[i] > 200) {
// 				tip = 0.10;
// 			}
			
// 			tipGiven = this.bills[i] * tip;
// 			tips.push(tipGiven);
			
// 			paid = this.bills[i] + tips[i];
// 			paidAmounts.push(paid);
// 		}
// 		console.log(tips);
// 		console.log(paidAmounts);
// 	}
};

// johnTip.calcTip();
