"use strict"

// array splice example
var arrsplice_add = [1,2,5,6];
arrsplice_add.splice(2,0,3,4); // inserting 3,4 between 2 and 5
document.write("<br/>Inserting 3,4 between 2 and 5  from array [1,2,5,6] <br/>");
printArray(arrsplice_add);
console.log("inserting 3,4 between 2 and 5 from array [1,2,5,6] \n" + arrsplice_add);

var arrsplice_remove = [1,2,3,4,5,6];
arrsplice_remove.splice(2,2); // removing 3 and 4
document.write("Removing 3 and 4 from array [1,2,3,4,5,6] <br/>");
printArray(arrsplice_remove);
console.log("Removing 3 and 4 from array [1,2,3,4,5,6] \n" + arrsplice_remove);

var arrsplice_remove_add = [1,2,3,4,5,6];
var a = arrsplice_remove_add.splice(4,2,7,8,9); // removing 5,6 and add 7,8,9
document.write("Removing 5,6 and add 7,8,9 from array [1,2,3,4,5,6] <br/>");
printArray(arrsplice_remove_add);
console.log("Removing 5,6 and add 7,8,9 from array [1,2,3,4,5,6] \n" + arrsplice_remove_add);

/*******************************************************************************************/

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
