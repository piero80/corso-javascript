OBJECTS
=======


----


Dichiarazione
-------------
```javascript
var obj = {
  prop1: valore1,
  prop2: valore2
};
// oppure
var obj = new Object();
obj.prop1 = valore1;
obj.prop2 = valore2;
```

Es.
```javascript
var pietro = {
  nome: "Pietro",
  cognome: "Colangelo",
  email: "pietro.colangelo@gmail.com"
};
console.log(pietro.email);
```


----


Accesso alle proprietà
----------------------
Le proprietà di un oggetto sono rappresentate da coppie chiave: valore.

Si può accedere ad esse tramite l'operatore punto.
```javascript
object.key
```

oppure con l'operatore []
```javascript
object["key"]
// va passata una stringa o qualcosa che ritorni una stringa
```


----


Array
-----
Di fatto gli array non sono che un particolare tipo di oggetto dove le chiavi
sono numeri invece che stringhe e se non diversamente specificato vengono
generate automaticamente a partire da 0.
```javascript
var arr = [2, 3, "ciao", 9];
console.log(arr[0]) // 2
console.log(arr[2]) //ciao
```


----


L'istruzione new
----------------
Con l'istruzione new prima di una chiamata a funzione viene ritornato un oggetto
a cui ci si può riferire all'interno di tale funzione tramite la variabile this.

Più semplice a farsi che a dirsi:
```javascript
function Persona(nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;
}

pietro = new Persona("Pietro", "Colangelo");
console.log(pietro.cognome); // Colangelo
```


----


Metodi
------
In JavaScript non è propriamente corretto parlare di metodi, tuttavia una
proprietà di un oggetto può essere qualunque cosa, anche una funzione.
```javascript
function Persona(nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;
  this.stampa = function stampa() {
    console.log(this.nome + " " + this.cognome);
  }
}
pietro = new Persona("Pietro", "Colangelo");
pietro.stampa(); // Pietro Colangelo
```

Funzioni di questo tipo vengono chiamate costruttori.
Per convenzione vengono dichiarate con la prima lettera maiuscola.


----


Metodi - Prototype
------
Un metodo puó essere dichiarato anche esternamente al costruttore
```javascript
function Persona(nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;
}
Persona.prototype.stampa = function() {//{objectName}.prototype.{methodName}
  console.log(this.nome + " " + this.cognome);
}
pietro = new Persona("Pietro", "Colangelo");
mario = new Persona("Mario", "Rossi");
pietro.stampa(); // Pietro Colangelo
mario.stampa();// Mario Rossi
```
Generalmente avremo oggetti con proprietá e metodi in comune agli oggetti.


----


Metodi - Object.create
------
Un oggetto puó essere creato da un oggetto esistente e erediterá le sue proprietá
```javascript
var persona1 = {
  name:"Pietro",
  surname:"Colangelo"
}
var persona2 = Object.create(persona1);
console.log(persona2.name);//Pietro

```


----


ES6 - Classes
------
ES6 introduce la sintassi Class per definire una classe o funzione.

```javascript
class Person {
  constructor(name){
    this.kind = 'Person';
    this.name = name;
  }
  printName(){
    console.log('this.name');
  }
}
var pietro = new Person('Pietro');
pietro.printName(); // Pietro
pietro.hasOwnProperty('kind') // true
```


----


ES6 - Classes
------
Ereditarietá

```javascript
class Person {
  constructor(name){
    this.kind = 'Person';
    this.name = name;
  }
  printName(){
    console.log(this.name);
  }
}
class Male extends Person {
  constructor(name){
    super(name); //call the parent method with super
    this.kind = 'male'
  }
}
var pietro = new Person('Pietro');
pietro.printName(); //Pietro
var giorgio = new Male('Giorgio');
giorgio.printName(); //Giorgio
```


----


Operatore for..in
-----------------
Serve a iterare tra tutte le proprietà enumerabili di un oggetto.
```javascript
for (key in obj) {
  console.log(key + ": " + obj[key]);
}
```

Tuttavia il suo uso è abbastanza limitato in quanto non garantisce un ordine di
visita e scansiona anche gli enumerabili di tutti i prototype da cui un oggetto
discende.

Inoltre bisogna ricordare che eventuali "metodi" verrebbero scansionati.

In sostanza può essere utile quando si usano gli oggetti come semplici mappe di
valori.


---


ESERCIZI
========


----


Creato
------
Programmare un oggetto che alla sua creazione scrivi in console "oggetto creato"


----


Person Mail
-----------
Creare un oggetto Person da inizializzarsi con le proprietà name, surname e mail.
la mail dovrà però essere passata come normale stringa, ma essere salvata
internamente come mail in formato antispam.
```javascript
var jacopo = new Person(
  "Jacopo",
  "Pace",
  "jacopo.pace@gmail.com");

console.log(jacopo.mail); // jacopo[dot]pace[at]gmail[dot]com
```

[soluzione scorsa antispam](http://jsbin.com/yaveze/edit?js,console)  
<!--  
[soluzione](http://jsbin.com/jigomijeje/edit?js,console)
-->

----


Numero naturale
---------------
Creare un oggetto che venga inizializzato con un numero naturale e fornisca un
metodo fact che ne calcoli il fattoriale ed un metodo pow(x) che lo elevi alla x
```javascript
var cinque = new N(5);
console.log(cinque.fact()); // 120
console.log(cinque.pow(2)); // 25
```

[potenza](http://jsbin.com/yekicaf/edit?js,console)  
[fattoriale](http://jsbin.com/zamito/edit?js,console)  
<!--  
[soluzione](http://jsbin.com/zecufu/2/edit?html,js,output)
-->
