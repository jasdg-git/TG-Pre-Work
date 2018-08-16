console.log('pepperoni');
console.log('lord of the rings');


console.log('JavaScript');
console.log(33.7);
console.log(true);
console.log(null);


console.log(3.5+30);
console.log(2018-1969);
console.log(65/240);
console.log(.2708*100);


console.log('Teaching the world how to code'.length);


// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase()); 

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim()); 


console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));


// Opening line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/


// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;
console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);


const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);
entree = 'Tacos';


let changeMe = true;
changeMe = false;
console.log(changeMe);


let notDefined;
console.log(notDefined);
let valueless;
console.log(valueless);


let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16;

// Multiply and assign to particle below
particle *= 6.02;

// Increment assay by 1
assay += 1;


let favoriteAnimal = 'horse';
console.log("My favorite animal: " + favoriteAnimal);


let myName = 'jason';
let myCity = 'San diego';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)


const kelvin = 294;


// Kelvin constant for conversion
const kelvin = 294;


// Kelvin constant for conversion
const kelvin = 294;

let celsius = kelvin - 273;


// Kelvin constant for conversion
const kelvin = 294;

// celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;


// Kelvin constant for conversion
const kelvin = 294;

// celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

let fahrenheit = Math.floor(celsius * (9/5) + 32);


// Kelvin constant for conversion
const kelvin = 294;

// celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

// formula to convert Celsius to Fahrenheit rounded down
let fahrenheit = Math.floor(celsius * (9/5) + 32);


// Kelvin constant for conversion
const kelvin = 294;

// celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

// formula to convert Celsius to Fahrenheit rounded down
let fahrenheit = Math.floor(celsius * (9/5) + 32);


// Kelvin constant for conversion
const kelvin = 294;

// celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

// formula to convert Celsius to Fahrenheit rounded down
let fahrenheit = Math.floor(celsius * (9/5) + 32);


// Kelvin constant for conversion
const kelvin = 294;

// celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

// formula to convert Celsius to Fahrenheit rounded down
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// Kelvin constant for conversion
const kelvin = 0;

// celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

// formula to convert Celsius to Fahrenheit rounded down
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// Kelvin constant for conversion
const kelvin = 294;

// celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

// formula to convert Celsius to Fahrenheit rounded down
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//formula to convert Celsius to Newton
let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} Newton.`)


let userName = 'jason';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}


let isSoccerFan = true;
if (isSoccerFan) {
  console.log('Goall');
} else {
  console.log('No goall');
}


let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'a';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'a';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


let hungerLevel = 10;
if (hungerLevel>7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}


let moonPhase = 'full';

switch (moonPhase) {
  case 'full': console.log('Howl!'); break;
  case 'mostly full': console.log('Arms and legs are getting hairier'); break;
  case 'mostly new': console.log('Back on two feet'); break;
  default: console.log('Invalid moon phase'); break;
}

/*
if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
}
  else {
  console.log('Invalid moon phase.');
}
*/


let moonPhase = 'full';

switch (moonPhase) {
  case 'full': console.log('Howl!'); break;
  case 'mostly full': console.log('Arms and legs are getting hairier'); break;
  case 'mostly new': console.log('Back on two feet'); break;
  default: console.log('Invalid moon phase'); break;
}

/*
if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
}
  else {
  console.log('Invalid moon phase.');
}
*/


let moonPhase = 'full';

switch (moonPhase) {
  case 'full': console.log('Howl!'); break;
  case 'mostly full': console.log('Arms and legs are getting hairier'); break;
  case 'mostly new': console.log('Back on two feet'); break;
  default: console.log('Invalid moon phase'); break;
}

/*
if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
}
  else {
  console.log('Invalid moon phase.');
}
*/


let moonPhase = 'full';

switch (moonPhase) {
  case 'full': console.log('Howl!'); break;
  case 'mostly full': console.log('Arms and legs are getting hairier'); break;
  case 'mostly new': console.log('Back on two feet'); break;
  default: console.log('Invalid moon phase'); break;
}

/*
if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
}
  else {
  console.log('Invalid moon phase.');
}
*/


let isLocked = false;

isLocked ?
  console.log('You will need a key to open the door.')
:
  console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ?
  console.log('Correct!')
:
  console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
  console.log('I love that!')
:
  console.log("I don't love that!");

  
  
  let isLocked = false;

isLocked ?
  console.log('You will need a key to open the door.')
:
  console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ?
  console.log('Correct!')
:
  console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
  console.log('I love that!')
:
  console.log("I don't love that!");

  
  
  let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.


const takeOrder = () => { console.log('Order: pizza') };
takeOrder();


const takeOrder = (topping) => {
  console.log('Order: pizza with ' + topping);
};

takeOrder('mushrooms');


const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushrooms', 'thin crust');
takeOrder('pepperoni', 'thick crust');
takeOrder('sausage', 'pan crust');


let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));


let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return getSubTotal(itemCount)*0.06;
};

const getTotal = (itemCount) => {
  return getSubTotal(itemCount)+getTax(itemCount);
};

console.log(getSubTotal(orderCount));

console.log(getTotal(orderCount));


function isGreaterThan (numberOne, numberTwo) {
  if (numberOne > numberTwo) return true
  else return false;
};

isGreaterThan(3,2);


const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)


const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
};

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');


const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = function() { 
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);



const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const myNightSky = function() { 
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);



const visibleLightWaves = function() {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

visibleLightWaves();



const visibleLightWaves = function() {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

visibleLightWaves();



const starCount = function() {
  let i = 5;
  console.log(i);
  for (let i=0; i<12; i++){
    console.log(i);
  }
};

starCount();
console.log(i);


const starCount = function() {
  let i = 5;
  console.log(i);
  for (let i=0; i<12; i++){
    console.log(i);
  }
};

starCount();
console.log(i);


let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

console.log(bucketList);


let newYearsResolutions = ['diet', 'have fun', 'be free'];
console.log (newYearsResolutions);
let listItem = newYearsResolutions[0];
console.log (listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
newYearsResolutions[1] = 'Learn a new language';
console.log(newYearsResolutions.length);
newYearsResolutions.push('read', 'run');
console.log(newYearsResolutions);
console.log(newYearsResolutions.pop());


let newYearsResolutions = ['diet', 'have fun', 'be free'];
console.log (newYearsResolutions);
let listItem = newYearsResolutions[0];
console.log (listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
newYearsResolutions[1] = 'Learn a new language';
console.log(newYearsResolutions.length);
newYearsResolutions.push('read', 'run');
console.log(newYearsResolutions);
console.log(newYearsResolutions.pop());


let newYearsResolutions = ['diet', 'have fun', 'be free'];
console.log (newYearsResolutions);
let listItem = newYearsResolutions[0];
console.log (listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
newYearsResolutions[1] = 'Learn a new language';
console.log(newYearsResolutions.length);
newYearsResolutions.push('read', 'run');
console.log(newYearsResolutions);
console.log(newYearsResolutions.pop());


let newYearsResolutions = ['diet', 'have fun', 'be free'];
console.log (newYearsResolutions);
let listItem = newYearsResolutions[0];
console.log (listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
newYearsResolutions[1] = 'Learn a new language';
console.log(newYearsResolutions.length);
newYearsResolutions.push('read', 'run');
console.log(newYearsResolutions);
console.log(newYearsResolutions.pop());



let newYearsResolutions = ['diet', 'have fun', 'be free'];
console.log (newYearsResolutions);
let listItem = newYearsResolutions[0];
console.log (listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
newYearsResolutions[1] = 'Learn a new language';
console.log(newYearsResolutions.length);
newYearsResolutions.push('read', 'run');
console.log(newYearsResolutions);
console.log(newYearsResolutions.pop());


let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));


let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('mayonnaise');
console.log(condiments);
condiments = ['single string'];
console.log(condiments);
utensils.pop();
console.log(utensils);
utensils = ['spoon'];


let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));


let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}


let vacationSpots = ['carribean', 'new zealand', 'canada'];
for (let vacationSpotIndex=vacationSpots.length-1;vacationSpotIndex>=0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}


let vacationSpots = ['carribean', 'new zealand', 'canada'];
for (let vacationSpotIndex=vacationSpots.length-1;vacationSpotIndex>=0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}


let vacationSpots = ['carribean', 'new zealand', 'canada'];
for (let vacationSpotIndex=vacationSpots.length-1;vacationSpotIndex>=0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}


let myPlaces = ['wyoming', 'east coast', 'alaska'];
let friendPlaces = ['europe', 'england', 'wyoming'];
for (let myPlacesIndex=0; myPlacesIndex<myPlaces.length; myPlacesIndex++) {

  for (let friendPlacesIndex=0;  friendPlacesIndex<friendPlaces.length; friendPlacesIndex++){
  if (myPlaces[myPlacesIndex]===friendPlaces[friendPlacesIndex]){
     console.log(myPlaces[myPlacesIndex]);
   }
  }
}


let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Heart';
while (currentCard != 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log("found a spade");


let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}


let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));


let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);



let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach( fruit => 
  console.log('I want to eat a '+fruit)
);


let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function(bigNumber) {
  return bigNumber/100;
});


let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(randomNumber => randomNumber<250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// Refactor the code above using arrow function syntax



let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(word => word.length>5);


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length>5     ));



let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);



let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);



let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  name: 'jason',
  age: 40,
  weekendAlarm: 'No alarm needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayGoodbye() { return 'Goodbye!';},
  sayHello() {return `Hello, my name is ${this.name}`}
};

person.hobbies = ['soccer', 'movies'];
person.hobbies = ['trading'];
//person.sayHello = () => `Hello, my name is ${this.name}`;

let friend = {
  name: 'steve'
};
let day = 'Sunday';
let alarm;

friend.sayHello = person.sayHello;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());


let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
};

person.age = 'Thirty-nine';
person.age = 39;
console.log(person.age);


let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
};

person.age = 'Thirty-nine';
person.age = 39;
console.log(person.age);


let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
};

person.age = 'Thirty-nine';
person.age = 39;
console.log(person.age);


let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
};

person.age = 'Thirty-nine';
person.age = 39;
console.log(person.age);


class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console


class Surgeon {
  constructor (name, department) {
    this.name = name;
    this.department = department;
  }
}


class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');



