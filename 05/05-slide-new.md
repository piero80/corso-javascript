## THIS in JAVASCRIPT

---

Default Binding (this)

```javascript
function whoIsThis() {
  console.log(this);
}
whoIsThis(); // global Object => Window
```

---

"use strict" mode

```javascript
"use strict";

function whoIsThis() {
  console.log(this);
}
whoIsThis(); // undefined
```

---

Implicit Binding (this)

```javascript
var person = {
  name: "Giovanna",
  greet: function() {
    console.log("Hello" + " " + person.name);
  }
};
person.greet();
```

---

Implicit Binding (this)

```javascript
var person = {
  name: "Giovanna",
  greet: function() {
    console.log("Hello" + " " + this.name);
  }
};
person.greet();
```

---

Implicit Binding (this)

```javascript
var video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function() {
    this.tags.forEach(function(tag) {
      console.log(this, tag);
    });
  }
};
video.showTags();

// undefined "a"
// undefined "b"
// undefined "c"
```

---

Implicit Binding (this)

```javascript
var video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function() {
    this.tags.forEach(function(tag)
      console.log(this, tag);
    },this);
  }
};
video.showTags();

// {title: "a", tags: Array(3), showTags: ƒ} "a"
// {title: "a", tags: Array(3), showTags: ƒ} "b"
// {title: "a", tags: Array(3), showTags: ƒ} "c"
```

---

Implicit Binding with Arrow Function (this)

```javascript
var video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function() {
    this.tags.forEach(tag)=>{
      console.log(this, tag);
    });
  }
};
video.showTags();

// {title: "a", tags: Array(3), showTags: ƒ} "a"
// {title: "a", tags: Array(3), showTags: ƒ} "b"
// {title: "a", tags: Array(3), showTags: ƒ} "c"
```

---

Explicit Binding (this)

```javascript
var obj = {
  name: "Giovanna"
};
function greet() {
  console.log("Hello " + this.name);
}
//“Hello undefined”.
```

Non sono collegati in nessun modo
Esistono infatti due utility,
call e apply che permettono di legare la nostra funzione ed il nostro oggetto.

---

```javascript
var obj = {
  name: "Giovanna"
};
function greet() {
  console.log("Hello " + this.name);
}

greet.call(obj);
```

---

Applicando l’explicit binding il contesto della funzione diventa in questo caso obj. call e apply
svolgono lo stesso compito con l’unica differenza che oltre al this accettano:

- una lista di argomenti aggiuntivi (call)
- un array di argomenti (apply)

---

Ecco call in azione con una lista di argomenti:

```javascript
var obj = {
  name: "Giovanna"
};
function greet(a, b, c) {
  console.log("Hello " + this.name, a, b, c);
}

greet.call(obj, "a", "b");

// Hello Giovanna a b undefined
```

---

Ed ecco apply:

```javascript
var obj = {
  name: "Giovanna"
};
function greet(a, b, c) {
  console.log("Hello " + this.name, a, b, c);
}

greet.apply(obj, ["a", "b", "c"]);

// Hello Giovanna a b c
```

---

Con ECMAScript 2015 possiamo anche semplificare la dichiarazione dei parametri grazie al rest
parameter¹⁶:

```javascript
var obj = {
  name: "Giovanna"
};
function greet(...args) {
  console.log("Hello " + this.name, ...args);
}

greet.apply(obj, ["a", "b", "c"]);

// Hello Giovanna a b c
```

---

L’explicit binding quindi si attiva quando una funzione viene chiamata con call o apply e riceve
un oggetto da usare come riferimento per determinare a cosa corrisponde this. Le regole per
determinare il this in JavaScript si arricchiscono di un nuovo tassello: il motore controlla prima
se si tratta di explicit binding, solo dopo controlla se c’è implicit binding e se nessuno dei due entra
in azione applica infine il default binding. Ma non abbiamo ancora finito. Esiste un’ultima regola
per determinare il this ed è la più “forte” del gruppo.

---

## this in JavaScript: new binding

Nel capitolo 5 abbiamo visto da vicino il funzionamento di new. La keyword new in JavaScript è una sintassi pratica per:

- ritornare oggetti dalle funzioni costruttore
- collegare i nuovi oggetti ad un prototype comune
- puntare nel modo corretto il this; non c’è bisogno di puntare a mano person.name = name

---

In altre parole una funzione costruttore alla “vecchia maniera”:

```javascript
function Person(name, nick) {
  var newPerson = Object.create(personMethods);
  newPerson.name = name;
  newPerson.nick = nick;
  return newPerson;
}
```

---

può essere semplificata in:

```javascript
function Person(name, nick) {
  this.name = name;
  this.nick = nick;
}
var laura = new Person("Laura", "javaScripter89");
```

---

Bene, il binding che otteniamo con new è la regola numero 4 del this in JavaScript. Questa quarta e ultima regola viene definita new binding ed è la più forte. Il “new” binding si attiva quando creiamo un nuovo oggetto con new a partire da una funzione costruttore. Il contesto della funzione diventa l’oggetto che è stato instanziato con new. Con questa quarta e ultima regola abbiamo un quadro chiaro: per determinare il significato di this il motore JavaScript controlla in ordine: “new” binding, explicit binding, poi l’implicit binding ed infine fa default sull’oggetto globale window con il default binding. Possiamo immaginare queste regole in ordine, come una cascata. A cosa si riferisce this in un determinato contesto, si chiede il motore JavaScript?

---

- all’oggetto creato con una funzione costruttore chiamata con new: “new” binding
- all’oggetto passato esplicitamente con call o apply: explicit binding
- all’oggetto che contiene la funzione: implicit binding
- all’oggetto globale se nessuna delle regole sopra è applicabile: default binding

  Queste 4 regole governano il “significato” di this in JavaScript e padroneggiarle ti permetterà di non rimanere più confuso di fronte ad un this.

---

## PROGRAMMAZIONE AD OGGETTI

---

- Incapsulamento
- Astrazione
- Ereditá
- Polimorfismo

---

Programmazione Procedurale

```javascript
let salario_base = 30_000;
let straordinario = 10;
let rate = 20;
function calcolaSalario(salario_base, straordinario, rate) {
  return salario_base + straordinario * rate;
}
```

---

Programmazione ad Oggetti

```javascript
let impiegato = {
  salario_base: 30_000,
  straordinario: 10,
  rate: 20,
  calcolaSalario: function() {
    return this.salario_base + this.straordinario * this.rate;
  }
};
impiegato.calcolaSalario();
```

---

<em>The best functions are those with no parameters!</em>

---

```javascript
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw");
  }
};
circle.draw();
```

---

```javascript
const circle2 = {
  radius: 2,
  location: {
    x: 2,
    y: 2
  },
  draw: function() {
    console.log("draw");
  }
};
circle2.draw();
```

---

## Constructor Function and Factory Function

---

## FACTORY FUNCTION

```javascript
//FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius: radius,
    location: {
      x: 1,
      y: 1
    },
    draw: function() {
      console.log("draw");
    }
  };
}
const circle = createCircle(1);
console.log(circle);
```

---

## CONSTRUCTOR FUNCTION

```javascript
//CONSTRUCTOR FUNCTION
//Name Convention Different with first capital letter
function Circle(radius) {
  console.log("this", this); // this é relativo al Circle Object
  (this.radius = radius),
    (this.location = {
      x: 1,
      y: 1
    }),
    (this.draw = function() {
      console.log("draw");
    });
}
const circle = new Circle(1);
```

---

## L'istruzione new

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

---

## Metodi

In JavaScript non è propriamente corretto parlare di metodi, tuttavia una
proprietà di un oggetto può essere qualunque cosa, anche una funzione.

```javascript
function Persona(nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;
  this.stampa = function stampa() {
    console.log(this.nome + " " + this.cognome);
  };
}
pietro = new Persona("Pietro", "Colangelo");
pietro.stampa(); // Pietro Colangelo
```

Funzioni di questo tipo vengono chiamate costruttori.
Per convenzione vengono dichiarate con la prima lettera maiuscola.

---

## Metodi - Prototype

Un metodo puó essere dichiarato anche esternamente al costruttore

```javascript
function Persona(nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;
}
Persona.prototype.stampa = function() {
  //{objectName}.prototype.{methodName}
  console.log(this.nome + " " + this.cognome);
};
pietro = new Persona("Pietro", "Colangelo");
mario = new Persona("Mario", "Rossi");
pietro.stampa(); // Pietro Colangelo
mario.stampa(); // Mario Rossi
```

Generalmente avremo oggetti con proprietá e metodi in comune agli oggetti.

---

## Metodi - Object.create

Un oggetto puó essere creato da un oggetto esistente e erediterá le sue proprietá

```javascript
var persona1 = {
  name: "Pietro",
  surname: "Colangelo"
};
var persona2 = Object.create(persona1);
console.log(persona2.name); //Pietro
```

---

Prototypical (Ereditarietá)

```javascript
function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

//Circle erediterá tutte i metodi e le proprietà di Shape
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log("draw");
};

const s = new Shape();
const c = new Circle();
```

---

## ES6 - Classes

ES6 introduce la sintassi Class per definire una classe o funzione.

```javascript
class Person {
  //special object
  constructor(name) {
    this.kind = "Person";
    this.name = name;
  }
  printName() {
    console.log("this.name");
  }
}
var pietro = new Person("Pietro");
pietro.printName(); // Pietro
pietro.hasOwnProperty("kind"); // true
```

---

Class é una funzione

```javascript
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log("starting engines…");
    this.enginesActive = true;
  }
}

typeof Plane; // function
```

---

## Esempio Es5 Vs Es6

```javascript
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// metodi "ereditati" da tutte le istanze
Plane.prototype.startEngines = function() {
  console.log("starting engines...");
  this.enginesActive = true;
};

var richardsPlane = new Plane(1);
richardsPlane.startEngines();

var jamesPlane = new Plane(4);
jamesPlane.startEngines();
```

---

```javascript
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log("starting engines…");
    this.enginesActive = true;
  }
}
const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();
```

---

## Benefici dell'uso di Class

- C'è molto meno codice che devi scrivere per creare una funzione
- Constructor Function chiaramente definita
- Tutto è contenuto (Tutto il codice necessario per la classe è contenuto nella dichiarazione della classe. Invece di avere la funzione di costruzione in un posto, quindi aggiungere metodi al prototipo uno per uno, puoi fare tutto in una volta!)

---

## ES6 - Classes

Ereditarietá

```javascript
class Person {
  constructor(name) {
    this.kind = "Person";
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}
class Male extends Person {
  constructor(name) {
    super(name); //call the parent method with super
    this.kind = "male";
  }
}
var pietro = new Person("Pietro");
pietro.printName(); //Pietro
var giorgio = new Male("Giorgio");
giorgio.printName(); //Giorgio
```

---

## Esercizio

Creare una Bicicletta subclass che estende Veicolo class. La Bicicletta SubClass dovrá modificare i valori predefiniti per ruote da 4 a 2 e clacson da
'beep beep' a 'honk honk'

```javascript
class Veicolo {
  constructor(colore = "blue", ruote = 4, clacson = "beep beep") {
    this.colore = colore;
    this.ruote = ruote;
    this.clacson = clacson;
  }

  suonaClacson() {
    console.log(this.clacson);
  }
}
```

---

```javascript
class Bicicletta extends Veicolo {
  constructor(colore, route = 2, clacson = "honk honk") {
    super(colore, ruote, clacson);
    //this.colore = colore;
    //this.ruote = 2;
    //this.clacson ='honk honk';
  }
}
const mioVeicolo = new Veicolo();
mioVeicolo.honkHorn(); // beep beep
const myBike = new Bicicletta();
myBike.honkHorn(); // honk honk
```

---

# ES6

---

## Let & Const

Ora ci sono due nuovi modi per dichiarare le variabili in JavaScript: let e const.
Fino ad ora, l'unico modo per dichiarare una variabile in JavaScript era usare la parola chiave var. Per capire perché let e const sono stati aggiunti, è probabilmente meglio guardare un esempio di quando usare var può metterci nei guai.

```javascript
function getClothing(isCold) {
  if (isCold) {
    var freezing = "Grab a jacket!";
  } else {
    var hot = "It’s a shorts kind of day.";
    console.log(freezing);
  }
}
getClothing(false); //undefined
```

---

Le variabili con let e const sono disponibili solo all'interno del blocco di codice in cui sono dichiarate.

```javascript
function getClothing(isCold) {
  if (isCold) {
    let freezing = "Grab a jacket!";
  } else {
    let hot = "It’s a shorts kind of day.";
    console.log(freezing);
  }
}
getClothing(false); // ReferenceError: freezing is not defined
```

---

Let e ​​const hanno anche altre proprietà interessanti.

- Le variabili dichiarate con let possono essere riassegnate, ma non possono essere ridichiarate nello stesso scope.
- Le variabili dichiarate con const devono avere un valore iniziale, ma non possono essere ridichiarate nello stesso ambito e non possono essere riassegnate.

---

```javascript
let instructor = "James";
instructor = "Richard";
console.log(instructor); //Richard
```

Dato che const è il modo più rigido per dichiarare una variabile, ti suggeriamo di dichiarare sempre variabili con const, perché renderà il tuo codice più facile da ragionare poiché sai che gli identificatori non cambieranno per tutta la durata del tuo programma. Se trovi che devi aggiornare una variabile o cambiarla, torna indietro e passa da const a let.

---

## Esercizio

```javascript
var CHARACTER_LIMIT = 255;
var posts = [
  "Il cielo è azzurro",
  "Il verde è il mio colore preferito",
  "Oggi piove!"
];

// prints posts to the console
function displayPosts() {
  for (var i = 0; i < posts.length; i++) {
    console.log(posts[i].slice(0, CHARACTER_LIMIT));
  }
}
displayPosts();
```

---

## Template Literals

Prima di ES6, il vecchio modo di concatenare le stringhe era usando l'operatore di concatenazione delle stringhe (+).

```javascript
const student = {
  name: "Richard Kalehoff",
  guardian: "Mr. Kalehoff"
};

const teacher = {
  name: "Mrs. Wilson",
  room: "N231"
};

let message =
  student.name +
  " please see " +
  teacher.name +
  " in " +
  teacher.room +
  " to pick up your report card.";
```

---

```javascript
let note =
  teacher.name +
  ",\n\n" +
  "Please excuse " +
  student.name +
  ".\n" +
  "He is recovering from the flu.\n\n" +
  "Thank you,\n" +
  student.guardian;
```

---

```javascript
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
```

---

## Arrow Function

```javascript
const upperizedNames = ["Farrin", "Kagure", "Asser"].map(function(name) {
  return name.toUpperCase();
});

const upperizedNames = ["Farrin", "Kagure", "Asser"].map(name =>
  name.toUpperCase()
);
```

---

Esercizio

```javascript
const names = [
  "Afghanistan",
  "Aruba",
  "Bahamas",
  "Chile",
  "Fiji",
  "Gabon",
  "Luxembourg",
  "Nepal",
  "Singapore",
  "Uganda",
  "Zimbabwe"
];

const longNames = names.filter(function(name) {
  return name.length > 6;
});
```

---

Soluzione

```javascript
const countries = [
  "Afghanistan",
  "Aruba",
  "Bahamas",
  "Chile",
  "Fiji",
  "Gabon",
  "Luxembourg",
  "Nepal",
  "Singapore",
  "Uganda",
  "Zimbabwe"
];

const longNames = countries.filter(country => country.length > 6);
```

---

In questo caso arrow function é memorizzata nella variabile greet e la si chiama in questo modo

```javascript
const greet = name => `Hello ${name}!`;

greet("Piero");

//Hello Piero!
```

---

```javascript
// empty parameter list requires parentheses
const sayHi = () => console.log("Hello Udacity Student!");
sayHi();
```

---

## Default function parameters

```javascript
function greet(name = "Student", greeting = "Welcome") {
  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet("James"); // Welcome James!
greet("Richard", "Howdy"); // Howdy Richard!
```

---

## Destructuring

Destructuring valori da un array

```javascript
const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);
```

---

Destructuring valori da un oggetto

```javascript
const gemstone = {
  type: "quartz",
  color: "rose",
  carat: 21.29
};

const { type, color, carat } = gemstone;

console.log(type, color, carat);
```

---
