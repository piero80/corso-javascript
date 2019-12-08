/*var i = 1;
var msg = "";

while (i < 10) {
  msg += i + " x 5 = " + i * 5 + "<br />";
  i++;
}

document.getElementById("answer").innerHTML = msg;
*/
function ridere(num) {
  var string = "ah";
  var result = "";
  for (var i = 0; i < num; i++) {
    result += string;
  }
  return result + "!";
}
var num = 17;
console.log(ridere(num));
/*
var input = "fusolab";
let output = "";
for (var i = input.length - 1; i >= 0; i--) {
  output += input[i];
}

console.log(output);
*/
/*
//var i = 1;
var msg = "";

/*while (i < 10) {
  msg += i + " x 5 = " + i * 5 + "<br/>";
  i++;
}*/

/*
for (var i = 1; i < 10; i++) {
  msg += i + "x 5 = " + i * 5 + "<br/>";
}


function laugh(num){
  var string = "ha";
  var content = "";
  for(var i = 1; i <= num ; i++){
    content += string
  }
  return content + "!";
}

document.getElementById("answer").innerHTML = laugh(5);
*/
/*
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(width) {
  var triangle = "";
  for (var i = 1; i <= width; i++) {
    triangle += makeLine(i);
  }
  return triangle;
}

console.log(buildTriangle(10));
*/

var profiloFacebook = {
  nome: "Piero",
  numerodiamici: 124,
  messaggi: ["Ciao Mondo", "Lorem ipsum"],
  aggiungiMessaggi: function(messaggio) {
    this.messaggi.push(messaggio);
  },
  rimuoviMessaggio: function() {
    this.messaggi.splice(0, 1);
  },
  aggiuntaAmico: function() {
    this.numerodiamici = this.numerodiamici + 1;
  },
  rimuoviAmico: function() {
    this.numerodiamici = this.numerodiamici - 1;
  }
};
console.log(profiloFacebook.aggiungiMessaggi("Ciao, ciao"));

//document.getElementById("answer").innerHTML = buildTriangle(10);

// function expression catSays
/*
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);

document.getElementById("answer").innerHTML = helloCat(catSays);
*/

/*

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

var pippo = emotions('happy', function(numb) {
  var smile = '';
  for(var i = 0; i < numb; i++) {
      smile += 'ha';
  }
  return smile + '!';
  
})

*/
