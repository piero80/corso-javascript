# OBJECTS

---

## Dichiarazione

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

---

## Accesso alle proprietà

Le proprietà di un oggetto sono rappresentate da coppie chiave: valore.

Si può accedere ad esse tramite l'operatore punto.

```javascript
object.key;
```

oppure con l'operatore []

```javascript
object["key"];
// va passata una stringa o qualcosa che ritorni una stringa
```

---

## Array

Un array é una struttura dati che si puo usare per inserire valori di ogni tipo.
Noi possiamo definire un array come una lista di valori separati da virgola tra parentesi quadre.

```javascript
//creates a `donuts` array with three strings
var gelati = ["cocco", "panna", "cioccolato"];
// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];
// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [
  [1, 2, 3],
  ["Julia", "James"],
  [true, false, true, false]
];
```

---

## Accedere agli elementi di un array

Ricorda che gli elementi di un array sono indicizzati a partire dalla posizione 0. Per accedere a un elemento in un array, usa il nome dell'array seguito immediatamente da parentesi quadre che contengono l'indice del valore a cui vuoi accedere.

```javascript
var gelati = ["cocco", "panna", "cioccolato"];
console.log(gelati[0]); // "cocco" é il primo elemento nel `gelati` array
// Prints: "cocco"
console.log(gelati[3]);
//Prints: undefined
```

---

## Domanda?

Quale linea di codice useresti per selezionare il gelato "cocco" dall'array gelati?

```javascript
var gelati = [
  "cioccolato",
  "crema",
  "panna",
  "cocco",
  "nocciola",
  "amarena",
  "melone",
  "nutella"
];
```

---

<h1>gelati[6]</h1>

---

Infine, se si desidera modificare il valore di un elemento nell'array, è possibile farlo impostandolo uguale a un nuovo valore.

```javascript
gelati[1] = "limone";
console.log(gelati[1]);
//limone
```

---

## Esercizio

Creiamo un array chiamato fusolab e aggiungiamo "corso javascript", "corso python", "corso taglio e cucito" all' array.
Poi stampiamo tramite console.log l'array.

---

## Proprietà e metodi dell' Array

---

## Array.length

Puoi trovare la lunghezza di un array usando la sua proprietà length.

```javascript
var gelati = ["cocco", "panna", "cioccolato"];
console.log(gelati.length); // Prints: 3
var string = "pippo";
console.log(string.length); // Prints: 5
```

---

## Array.push

```javascript
var gelati = ["cioccolato", "crema", "panna"];
gelati.push("nocciola"); //Inserisce l'elemento alla fine dell'array
console.log(gelati); // cioccolato, crema, panna, nocciola
```

---

## Array.pop

In alternativa, è possibile utilizzare il metodo pop () per rimuovere elementi dalla fine di un array.

```javascript
var gelati = ["cioccolato", "crema", "panna"];
gelati.pop(); //Rimuove l'elemento alla fine dell'array e mi ritorna l'elemento rimosso
console.log(gelati); // cioccolato, crema
```

---

## Array.splice

E' un altro pratico metodo che ti consente di aggiungere e rimuovere elementi da qualsiasi posizione all'interno di un array. Mentre push () e pop () limitano l'aggiunta e la rimozione di elementi dalla fine di un array, splice () consente di specificare la posizione dell'indice per aggiungere nuovi elementi, nonché il numero di elementi che si desidera eliminare.

```javascript
var gelati = ["cioccolato", "crema", "panna"];
gelati.splice(1, 1, "limone"); //Rimuove l'elemento alla fine dell'array e mi ritorna l'elemento rimosso
console.log(gelati); // cioccolato, limone, panna
```

---

Il primo argomento rappresenta l'indice iniziale da cui si desidera modificare l'array, il secondo argomento rappresenta il numero di elementi che si desidera rimuovere e gli argomenti rimanenti rappresentano gli elementi che si desidera aggiungere.

- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)<br>

---

## Esercizio 1

Abbiamo un array di corsi del Fusolab e vogliamo rimuovere e aggiungere altri.

```javascript
var fusolab = ["javascript", "python", "elettronica", "cucina", "spagnolo"];
var myfusolab = ["javascript", "python", "inglese"];
//Rimuovere "inglese"
//Aggiungere "elettronica" and "taglio e cucito"
//Aggiungere "spagnolo"
```

---

```javascript
var myfusolab = ["javascript", "python", "inglese"];
myfusolab.splice(2, 1, "elettronica", "cucina");
myfusolab.splice(4, 1, "spagnolo");
console.log(myfusolab);
```

---

## Array Loops

Una volta che i dati sono nell'array, si desidera essere in grado di accedere e manipolare in modo efficiente ogni elemento dell'array senza scrivere codice ripetitivo per ciascun elemento.

```javascript
var fusolab = ["javascript", "python", "elettronica"];

// la variabile `i` viene utilizzata per scorrere ogni elemento dell'array
for (var i = 0; i < fusolab.length; i++) {
  fusolab[i] += " corso";
  fusolab[i] = fusolab[i].toUpperCase();
}
```

---

## The forEach() loop

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

# ESERCIZI

---

## Creato

Programmare un oggetto che alla sua creazione scrivi in console "oggetto creato"

---

## Person Mail

Creare un oggetto Person da inizializzarsi con le proprietà name, surname e mail.
la mail dovrà però essere passata come normale stringa, ma essere salvata
internamente come mail in formato antispam.

```javascript
var jacopo = new Person("Jacopo", "Pace", "jacopo.pace@gmail.com");

console.log(jacopo.mail); // jacopo[dot]pace[at]gmail[dot]com
```

[soluzione scorsa antispam](http://jsbin.com/yaveze/edit?js,console)

<!--
[soluzione](http://jsbin.com/jigomijeje/edit?js,console)
-->

---

## Numero naturale

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
