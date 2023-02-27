// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
// ------------------------------------------//

console.log(example);
let example = "I'm the example!";
// ------------------------------------------//

console.log(hello);
var hello = "world";
// --------------------ANSWER----------------------//
var hello;
console.log(hello); // logs undefined
var hello = "world";
// ------------------------------------------//

var needle = "haystack";
test();
function test(){
    var needle = "magnet";
    console.log(needle);
}
// --------------------ANSWER----------------------//
var needle
function test() {
    var needle;
    var needle = "magnet";
    console.log(needle);
}
var needle = "haystack";
test();
// ------------------------------------------//

var brendan = "super cool";
function print(){
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);
// --------------------ANSWER----------------------//
var brendan = "super cool";
console.log(brendan); // logs 'super cool'
// ------------------------------------------//

var food = "chicken";
console.log(food);
eat();
function eat(){
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
// --------------------ANSWER----------------------//
var food;
function eat() {
    var food;
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
var food = "chicken";
console.log(food); // logs 'chicken'
eat(); // logs 'half-chicken'
// ------------------------------------------//

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// --------------------ANSWER----------------------//
var mean;
mean(); // will return error as mean function is called before it's defined as a function
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
console.log(food);
// ------------------------------------------//

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// --------------------ANSWER----------------------//
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    var genre = "R&B";
    console.log(genre);
}
var genre = "disco";
rewind(); // logs "rock", then "R&B"
console.log(genre); // logs "disco"
// ------------------------------------------//

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// --------------------ANSWER----------------------//
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// ------------------------------------------//

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// --------------------ANSWER----------------------//
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50) {
        dojo.hiring = true;
    }
    else if(dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // logs {name: "Chicago", students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0)); // returns an error, because code tried to assign "closed for now" to const variable, dojo.
// ------------------------------------------//