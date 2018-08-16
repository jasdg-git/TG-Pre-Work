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




