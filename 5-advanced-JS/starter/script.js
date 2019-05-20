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
	this.calculateAge = function() {
		console.log(2019 - yearOfBirth);
	}
};

let chijioke = new Person('Chijioke', 1987, 'Programmer');

console.log(john);
console.log(chijioke);
chijioke.calculateAge();