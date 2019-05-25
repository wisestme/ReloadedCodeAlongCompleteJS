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

let years = [1960, 1938, 2010, 1999, 1993];

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

let ages = arrayCalc(years, calcAge);