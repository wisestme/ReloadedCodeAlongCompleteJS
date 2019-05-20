// Function constructor

let john = {
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
hapiness.calculateAge();