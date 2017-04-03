function sayHello(){
  document.write('Hello');
}
sayHello();

var wallWidth = 15;
var wallHeight = 30;

function getArea(width,height){
  return width * height;
}

function calculateArea(width,height){
  var area = width * height;
  return area;
}

var wallOne = calculateArea(3,5);
var wallTwo = calculateArea(8,5);

document.getElementById('root').textContent = getArea(wallWidth,wallWidth);
document.getElementById('area1').textContent = wallOne;
document.getElementById('area2').textContent = wallTwo;

//ritorna piu valore in un array
function getSize(width, height, depth){
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
var areaOne = getSize(3,2,3)[0];
var areaTwo = getSize(3,2,3)[1];

//IMMEDIATELY INVOKED FUNCTION EXPRESSION OR IIFE
var area = (function(){
  var width = 2;
  var height = 4;
  return width * height;
}());

document.getElementById('areaIIFE').textContent = area;


function pow(b, e) {
  if (e === 1) {
    return b;
  }
  else {
    return b * pow(b,(e - 1));
  }
}


//console.log(pow(2, 4))
document.write(pow(2, 3));
