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

## ES6 - Classes

ES6 introduce la sintassi Class per definire una classe o funzione.

```javascript
class Person {
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

## Operatore for..in

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
let message = `${student.name} please see ${teacher.name} in ${
  teacher.room
} to pick up your report card.`;
```

---

## Object
