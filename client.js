console.log( 'js' );

let testVar = 'twelve';

// + operator is overloaded to assume string concatenation if a string is found

console.log( testVar );

// ++ tried to coerce the value to a number if it can
let testy = testVar++;

console.log( testy );

console.log( 'testing truhtiness of NaN');
if( testy ){
  console.log( 'true' );
}
else {
  console.log( 'false' );
}

let nully = null;
console.log( 'testing truhtiness of null');
if( nully ){
  console.log( 'true' );
}
else {
  console.log( 'false' );
}

let stringy = 'false';
console.log( 'testing truhtiness of string "false"');
if( stringy ){
  console.log( 'true' );
}
else {
  console.log( 'false' );
}

//////////// end basic re-intro to variables, types, and simple conditionals
/////////// START PART 2 //////////

// arrays

let arrayName = []; // initializes an empty array

// .length: "built-in" of the array class. It is a property

// "verbs" = methods
// push (returns length)
// unshift, shift, pop

let cards = [];
// original test data...
// cards.push( '3 of Hearts' );
// cards.push( 'K of Clubs' );
// cards.push( '8 of Clubs' );
// cards.push( 'J of Spades' );

let tempCard = {
  number: 3,
  suit: 'Hearts'
}
cards.push( tempCard );

tempCard = {
  number: 'K',
  suit: 'Clubs'
}
cards.push( tempCard );
tempCard = {
  number: 'K',
  suit: 'Spades'
}
cards.push( tempCard );
tempCard = {
  number: 9,
  suit: 'Diamonds'
}
cards.push( tempCard );

// loop to display all cards
// for loop
for( let i=0; i< cards.length; i++ ){
  console.log( cards[ i ] );
}

// for of loop
for( card of cards ){
  console.log( card );
}

// search for # of Kings in cards array
let kings=[];
for( card of cards ){
  if( card.number=== "K" ){
    kings.push( card );
  } // end match
} // end for

console.log( kings );
