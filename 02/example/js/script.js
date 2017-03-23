var today = new Date();
var hours = today.getHours();
var hello;

if(hours>12){
  hello = 'Buon pomeriggio';
}else if(hours>18){
  hello = 'Buonasera';
}else if(hours>0){
  hello = 'Buongiorno';
}

document.getElementById('demo').innerHTML = hello;
