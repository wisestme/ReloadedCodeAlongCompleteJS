///////////////////////////////////////
// Lecture: Hoisting
// FUNCTIONS
/*calculateAge(1989);
function calculateAge (year) {
    console.log(2019 - year);
}


let retirement = function (year) {
    console.log(65 - (2019 - year));
}
retirement(1987);


// VARIABLES

console.log(age);
let age = 32;*/












///////////////////////////////////////
// Lecture: Scoping
// var a = 'hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second () {
//     var c = 'Hey!';
//     console.log(a + b + c);
// } 
// }

/*let a = 'Hello!';
first();

function first() {
    let b = 'Hi!';
    second();

    function second () {
        let c = 'Hey!';
        third();
    }
}

function third () {
    let d = 'John';
    console.log(c);
}*/
// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

/*calculateAge(1987);
function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}*/

const john = {
    name: 'John',
    yearOfBirth: 1987,
    calculateAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        /*function innerFunction() {
            console.log(this);
        }
        innerFunction();*/
    }
};

john.calculateAge();

const mike = {
    name: 'Mike',
    yearOfBirth: 1985,
};

// Method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();