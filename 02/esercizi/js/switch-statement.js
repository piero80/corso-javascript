var msg; // Message
var level = 3; // Level

// Determine message based on level
switch (level) {
  case 1:
    msg = "Primo Livello - Buona Fortuna";
    break;

  case 2:
    msg = "Secondo dei tre - Andiamo!";
    break;

  case 3:
    msg = "Terzo livello - Ottimo!";
    break;

  default:
    msg = "Buona Fortuna!";
    break;
}

var el = document.getElementById("answer");
el.textContent = msg;
