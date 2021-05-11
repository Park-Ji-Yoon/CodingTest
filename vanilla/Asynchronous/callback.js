'use strict';

// Javascript is synchronous.
// hoisting : var, function declaration goes to top..
console.log("1");
// setTiimeout(() => console.log("2"), 1000);
setTimeout(function(){
  console.log("2");
}, 1000);
console.log("3");

// Synchronous callback
function printImmediately(print){
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDalay(print, timeout){
  setTimeout(print, timeout);
}
printWithDalay(() => console.log('bye'), 2000);