/*var i = 1;
var msg = "";

while (i < 10) {
  msg += i + " x 5 = " + i * 5 + "<br />";
  i++;
}

document.getElementById("answer").innerHTML = msg;*/

//var i = 1;
var msg = "";

/*while (i < 10) {
  msg += i + " x 5 = " + i * 5 + "<br/>";
  i++;
}*/

for (var i = 1; i < 10; i++) {
  msg += i + "x 5 = " + i * 5 + "<br/>";
}


function laugh(num){
  var string = "ha";
  var content = "";
  for(var i = 1; i <= num ; i++){
    content += string
    if(i===num){
      content += "!"
    }
  }
  return content;
}

document.getElementById("answer").innerHTML = laugh(2);

