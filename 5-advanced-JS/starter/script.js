// Function constructor

/*let john = {
	name: 'Chijioke',
	yearOfBirth: 1987,
	job: 'teacher',
};

let Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge = function() {
		console.log(2019 - this.yearOfBirth);
	}

let chijioke = new Person('Chijioke', 1989, 'Programmer');
let hapiness = new Person('Happiness', 1988, 'Designer');

console.log(john);
console.log(chijioke);
chijioke.calculateAge();
hapiness.calculateAge();*/

// object.create
/*let personProto = {
	calculateAge: function() {
		console.log(2019 - this.yearOfBirth);
	}
};

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1987;
john.job = 'teacher';*/

// objects vs primitives

// primitives
/*let a = 23;
let b = a;

a = 32;

console.log(a, b);

// objects
let obj1 = {
	name: 'John',
	age: 26,
};

let obj2 = obj1;
obj1.age = 30;

console.log(obj1, obj2);

// Functions
let age = 27;
let obj = {
	name:'Jonas',
	city: 'Lisbon'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age, obj.city);
*/

/*let years = [1960, 1938, 2010, 1999, 1993];

function arrayCalc(arr, fn) {
	let arrResult = [];
	for (let i = 0; i < arr.length; i++) {
		arrResult.push(fn(arr[i]));
	}
	return arrResult;
}

function calcAge(e) {
	return 2019 - e;
}

function isFullAge(e) {
	return e >= 18;
}

function maxHeartRate(e) {
	if(e >= 18 && e<= 81) {
		return Math.round(206.9 - (0.67 * e));
	} else {
		return -1;
	}
}


let ages = arrayCalc(years, calcAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);*/

/*function interviewQuestion(job) {
	if(job === 'teacher') {
		return function(name) {
			console.log(name + ', what subject do you teach?');
		}
	} else if (job === 'programmer') {
		return function(name) {
			console.log(name + ', do you have a github account?');
		} 
	} else {
			return function(name) {
				console.log(name + ', how come you are jobless?')
			}
		}
}*/


/*function interviewQuestion(job) {
	switch (job) {
		case 'teacher':
		return function(name) {
			console.log(name + ', what subject do you teach?');
		}
		break;
		case 'programmer':
		return function(name) {
			console.log(name + ', do you have a github account?');
		} 
		break;
		default:
		return function(name) {
				console.log(name + ', how come you are jobless?')
			}
	}
}

let programmerQuestion = interviewQuestion('teacher');
programmerQuestion('Chijioke');

interviewQuestion()('wisest');

(function (goodluck) {
	let score = Math.random() * 10;
	console.log(score >= 5 - goodluck);
})(3);*/
/*let birthYear = prompt('when were you born?');
let country = prompt('where are you from?');

function retirement (retirementAge) {
	let a = ' years left until retirement';
	return function (yearOfBirth) {
		let age = 2019 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

let retirementUS = retirement(66);
let retirementNG = retirement(75);
if (country === 'nigeria') {
	retirementNG(birthYear)
} else{
	retirementUS(birthYear);
}*/

/*function interviewQuestion(job) {
	if(job === 'teacher') {
		return function(name) {
			console.log(name + ', what subject do you teach?');
		}
	} else if (job === 'programmer') {
		return function(name) {
			console.log(name + ', do you have a github account?');
		} 
	} else {
			return function(name) {
				console.log(name + ', how come you are jobless?')
			}
		}
}*/

/*function interviewQuestion(job) {
	return function (name) {
		if(job === 'teacher') {
			console.log(name + ', what subject do you teach?');
		} else if(job === 'programmer') {
			console.log(name + ', do you have a github account?');
		} else {
			console.log(name + ', how come you are jobless?');
		}
	}
}

interviewQuestion('programmer')('Chijioke');*/

/*let john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' 
				+ this.name + 'I\'m a ' + this.job + ' I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up? I\'m ' 
				+ this.name + 'I\'m a ' + this.job + ' I\'m ' + this.age + ' years old. Have a nice '
				+ timeOfDay + '.');
		}
	}
}

let emily = {
	name: 'Emily',
	age:  28,
	job: 'Programmer',
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

let emilyFriendly = john.presentation.bind(emily, 'friendly');
emilyFriendly('afternoon');*/

/*let wisest = {
	name: 'wisestMe',
	birthYear: 1987,
	isMarried: false,
	occupation: 'Computer Scientist',
	family: ['Daddy', 'Mummy', 'Brothers', 'Sisters', 'Girlfriend',],
	calcAge: function() {
		this.age = 2019 - this.birthYear;
	}
};

console.log(wisest.family);
console.log(wisest['name']);
let x = 'isMarried';
console.log(wisest[x]);

wisest.occupation = 'preacher';
wisest.isMarried = true;

console.log(wisest);

let chijioke = new Object();

chijioke.firstName = 'wisestMua';
chijioke.lastName = 'Ceejay';
chijioke.job = 'SuperStar';

console.log(chijioke);

wisest.calcAge();
console.log(wisest.age);


let Book = function(kind, name, numberOfBooks){
	this.kind = kind;
	this.name = name;
	this.numberOfBooks = numberOfBooks;
	this.someBooks = ['Genesis', 'Exodus', 'Leviticus', 'Numbers'];
}

Book.prototype.findBook = function() {
		console.log(this.someBooks[2]);
	}

	Book.prototype.version = 'King James Version';

let bible = new Book('Religious', 'Bible', 66);

bible.findBook();
console.log(bible.version);

let phone = {};

let samsung = Object.create(phone);
samsung.name = 'Samsung';
samsung.model = 'Galaxy S10';
samsung.OS = 'Android';

console.log(samsung);*/


// PRIMITIVES VS OBJECTS
/*let a = 23;
let b = a;
a = 50;

console.log(a, b);

let obj1 = {
	name: 'wisest',
	age: 23,
};

let obj2 = obj1;

obj1.age = 32;

console.log(obj1, obj2);

// IN FUNCTIONS
let age = 40;
let obj = {
	name: 'Chiji',
	city: 'Lagos',
}

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age, obj);*/

let years = [1995, 2007, 2014, 1986, 1980];

function calcAge (e) {
	return 2019 - e;
}

function arrayOp (arr, fn) {
	let ages = [];
	for(let i = 0; i < years.length; i++){
	let result = (fn(arr[i]));
	ages.push(result);
}
	return ages;
}

function isAdult (e) {
	return e >= 18;
}

function lastbornOlder(e) {
	/*if(e < 1995) {
		console.log('I m older than your last born');
	} else {
		console.log('Your last born is older than me');
	}*/
	return e < 1994;
}

let allAges = arrayOp(years, calcAge);
console.log(allAges);

let fullAge = arrayOp(allAges, isAdult);
console.log(fullAge);

let older = arrayOp(years, lastbornOlder);

//console.log(older);

