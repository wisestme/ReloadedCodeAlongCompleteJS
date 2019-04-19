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

// TO DO: play with alert, prompt and confirm.
*/
let currentYear, firstName, LastName, birthYear, age;

firstName = prompt('What is your name?');
birthYear = prompt('When weere you born?');
currentYear = prompt('What year are we in');

age = parseInt(currentYear) - parseInt(birthYear);
confirm(firstName + ' I know your age');

alert('You are ' + age + ' years old!')
