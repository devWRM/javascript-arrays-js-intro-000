var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(sampleArray, sampleElement) {
  var newArray = [sampleElement, ...sampleArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(sampleArray, sampleElement) {
  sampleArray.unshift(sampleElement);
  return sampleArray;
}

function addElementToEndOfArray(sampleArray, sampleElement) {
  var newArray = [...sampleArray, sampleElement];
  return newArray;
}

function destructivelyAddElementToEndOfArray(sampleArray, sampleElement) {
  sampleArray.push(sampleElement);
  return sampleArray;
}
