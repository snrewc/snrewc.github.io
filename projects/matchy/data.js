/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
// 3. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = "Malti-poo";
// 4. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal["name"] = "Zoey";
// 5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = {};
// 6. [ ] Print your `animal` Object to the console by adding, `console.log(animalc);`,
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*  1. [ ] Create a variable named `noises` and assign it to an empty array.
 2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
 3. [ ] Using an array function add another noise to the end of `noises`.
 4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
 6. [ ] Add an element to `noises` using this function.
 7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
 8. [ ] `console.log` the length of `noises`
 9. [ ] `console.log` the last element in `noises` again without hard coding the index.
 10. [ ] `console.log` the whole array.*/
 
var noises = [];
noises[0] = 'woof';
noises.push('ruff');
noises.unshift('Bhruh');
noises[noises.length] = "bark";
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
animal["noises"].push("grrr");
console.log(animals);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
 
 
 

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
    };
animals.push(duck);
console.log(animals);
var cat = {
    species: 'lion',
    name: 'snow ball',
    noises: ['meow', 'scratching']
};
var horse = {
    species: 'ponie',
    name: 'Ed',
    noises: ['neigh', 'whinny'] 
};
animals.push(cat);
animals.push(horse);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
function getRandom(array) {
    return Math.floor(Math.random() * (array.length - 0) +0);
}
friends.push(animals.getRandom(animals));
console.log(friends);

horse["friends"] = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}