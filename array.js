"use strict"

// sort asc array for numbers
var arr = [13,2,56,45,1,9];
var sortArrAsc = arr.sort( function(a,b) {
  return a-b;
});
printArray(sortArrAsc);
console.log(sortArrAsc);

// sort desc array for numbers
var arr = [13,2,56,45,1,9]
var sortArrDesc = arr.sort( function(a,b) {
  return b-a;
});
/**** alternativily use reverse mutator ****/
// var sortArrDesc = arr.sort( function(a,b) {
//   return a-b;
// }).reverse();
printArray(sortArrDesc);
console.log(sortArrDesc);

/***********************************************************
*       common function to create and print arrays         *
***********************************************************/
// function to print one dimentioanl array
function printArray(array) {
  var n = array.length;
  for( var i = 0; i < n; i++)
    document.write(array[i] + "&emsp;")

  document.write("<br/><br/>");
}
