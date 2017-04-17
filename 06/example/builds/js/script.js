/*FIRST CLASS OBJECT --- FUNCTION CALLBACK*/

var x = function(){
  console.log("Io sono chiamato all'interno di un altra funzione")
};
var y = function(callback){
  console.log('fai qualcosa');
  callback();
}
y(x);
/* ESEMPIO SENZA CALLBACK */
var calc = function(num1,num2,calcType){
  if(calcType==='add'){
    return num1 + num2;
  }
  else if(calcType==='multiply'){
    return num1 * num2;
  }
}
console.log(calc(2, 3 ,'add'));

/* ESEMPIO CON CALLBACK */

var add = function(num1, num2){
  return num1 + num2;
}
var multiply = function(num1, num2){
  return num1 * num2;
}
var calc = function(num1, num2, callback){
  if(typeof callback == 'function'){
    return callback(num1,num2);
  }
}
console.log(calc(2,3,add));


var myArr =
[
  {
  num:5,
  str:'Ananas'
  },
  {
  num:7,
  str:'Banana'
  },
  {
  num:3,
  str:'Mela'
  }
]
myArr.sort(function(val1,val2){
  if(val1.num<val2.num){
    return -1;
  }
  else{
    return 1;
  }
});
console.log(myArr);



var hotel = function(text) {
  return text.replace(/park/ig, "Golden");
};
console.log(hotel("Il Park Hotel è il più costoso di tutta Roma"));
// Il Golden Hotel è il più costoso di tutta Roma.


var player = function(text) {
  return text.replace(/martens/ig, "Dybala");
};
console.log(player("Martens è il giocatore più forte del campionato Italiano"));
// Dybala è il giocatore più forte del campionato Italiano.


var attitude = function(original, replacement){
  return function(source){
    return source.replace(original, replacement);
  }
}

var getHotel = attitude(/park/ig,'Golden');
var getBed = attitude(/romelikehome/ig, 'Macalitte');

var newHotel = getHotel("Excelsior Hotel è il più costoso di tutta Roma")
var elHotel = document.getElementById('myHotel');
elHotel.textContent = newHotel;

var newBed = getBed("RomeLikeHome è il bed&breakfast più richiesto");
var elBedAndBreak = document.getElementById('myBedAndBreak');
elBedAndBreak.textContent = newBed;


var buildings = [
  { name: 'Hilton', type: 'hotel', availability: 12 },
  { name: 'Esedra', type: 'hotel', availability: 0 },
  { name: 'Macalitte', type: 'bed&breakfast', availability: 4 },
  { name: 'Excelsior', type: 'hotel', availability: 11 },
  { name: 'RomeLikeHome', type: 'bed&breakfast', availability: 9 },
  { name: 'Fori Imperiali', type: 'hotel', availability: 1 },
  { name: 'Park', type: 'hotel', availability: 6 }
];
var freeHotel = buildings.filter(function(building){
  return building.type === 'hotel' && building.availability > 0;
}).map(function(hotel){
  return hotel.name;
})
var msg = '';
freeHotel.forEach(function(item){
  msg += item + '<br/>';
})
var elHotel = document.getElementById('myFreeHotel');
elHotel.innerHTML = msg;

var freeBed = buildings.filter(function(building){
  return building.type === 'bed&breakfast' && building.availability > 0;
}).map(function(bed){
  return bed.name;
})
var msg2 = '';
freeBed.forEach(function(item){
  msg2 += item + '<br/>';
})
var elBed = document.getElementById('myFreeBed');
elBed.innerHTML = msg2;
