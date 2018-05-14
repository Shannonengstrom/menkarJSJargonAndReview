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
