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
}

let chijioke = new Person('Chijioke', 1987, 'Programmer');

console.log(john);
console.log(chijioke);