// app.js
//
//Object Oriented Programming
//
//
//
// Z. Ames 7/14/14

/* global prompt:true*/
var prompt = require('sync-prompt').prompt;
//var chalk = require('chalk');


/*
var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

var dog2 = {name: 'sam', age: 4};

console.log(dog2);


//Prompt user for properties of their dog and then make the properties an object
var breed = prompt('What is your dogs breed? ');
var name = prompt('What is your dogs name? ');
var age = prompt('What is your dogs age? ');
age = parseInt(age);

var userDog = {breed: breed, name: name, age: age};

console.log(userDog);
*/

//array of dogs
var dogs=[];
var menu = prompt('Would you like to add a dog? (y)es or (n)o' );
while (menu !== 'n'){
  var name = prompt('Dog name:  ');
  var age = parseInt(prompt('Dog age:  '));
    //age=parseInt(age)
  var gender = prompt('Dog gender:  ');
  var userDog = { name:name, age:age, gender:gender};
  dogs.push(userDog);
  menu = prompt('Would you like to add a dog? (y)es or (n)o? ' );
  }
console.log(dogs);
