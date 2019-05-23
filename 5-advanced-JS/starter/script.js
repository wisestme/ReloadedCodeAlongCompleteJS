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

let a = 23;
let b = a;

a = 32;

console.log(a, b);

let obj1 = {
	name: 'John',
	age: 26,
};

let obj2 = obj1;
obj1.age = 30;

console.log(obj1, obj2);
