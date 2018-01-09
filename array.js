"use strict"

// code to create 2 two diamentional array and sum of both Array
var arr1 = getTwoDimensionalArr(3,3);
populateArr(arr1, 1, "asc");// populate array 1,2,3, .... 9
document.write("<br/>");
var arr2 = getTwoDimensionalArr(3,3); // populate array 9,8,7....1
populateArr(arr2, 9, "desc");

// define two diamentional array to hold sum of arr1 and arr2
var arrsum = getTwoDimensionalArr(3,3);
for( var i = 0; i < 3; i++ ) {
  for( var j = 0; j < 3; j++ )
    arrsum[i][j] = arr1[i][j] + arr2[i][j];
}
document.write("<br/>");
printArr(arrsum);
console.log("Sum of Array : \n" + arrsum);
/*******************************************************************************************/

// code to remove duplicate values in array using filter
var names = ["John","Mery","Lucy","Adam","John","john","Adam"];
var unames = names.filter(function(value, index, arr) {
  return names.indexOf(value) == index;
}, unames);
console.log("Removing duplicate from [\"John\",\"Mery\",\"Lucy\",\"Adam\",\"John\",\"john\",\"Adam\"] : \n" + unames);

/*******************************************************************************************/

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

//function to get two diamentional array
function getTwoDimensionalArr(rows = 3, columns =3) {
  var arr = new Array(rows);
  for( var i = 0; i < rows; i++ )
    for( var j = 0; j < columns; j++ )
      arr[i] = new Array(columns);
  return arr;
}

// function to populate and print two diamentional Array
function populateArr(array, start, order) {
  var rows = array.length;
  var colums = array[0].length;
  for( var i = 0; i < rows; i++ ) {
    for( var j = 0; j < colums; j++ ) {
      array[i][j] = start;
      document.write(start + "&emsp;");
      start = (order == "asc" ? (start + 1) : (start -1));
    }
    document.write("<br/>");
  }
  console.log("populateArray() called : |\n" + array );
}

// function to print two diamentional Array
function printArr(array) {
  var rows = array.length;
  var colums = array[0].length;
  for( var i = 0; i < rows; i++ ) {
    for( var j = 0; j < colums; j++ )
      document.write(array[i][j] + "&emsp;");
    document.write("<br/>");
  }
  console.log("printArr() called : \n" + array);
}
