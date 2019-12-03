# Array

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

Quale linea di codice useresti per selezionare il gelato "nocciola" dall'array gelati?

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

<h1>gelati[4]</h1>

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

## Proprietà e metodi dell'Array

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
//Aggiungere "elettronica" e "taglio e cucito"
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

```javascript
var fusolab = ["javascript", "python", "elettronica"];
fusolab.forEach(function(corso, num, all) {
  console.log("Corso " + num + " in " + all.toString() + " é " + corso);
});
```

---

## Esercizio

Utilizzare il metodo forEach () per eseguire il ciclo sul seguente array e aggiungere 100 a ciascuno dei valori se il valore è divisibile per 3.

```javascript
var test = [
  12,
  929,
  11,
  3,
  199,
  1000,
  7,
  1,
  24,
  37,
  4,
  19,
  300,
  3775,
  299,
  36,
  209,
  148,
  169,
  299,
  6,
  109,
  20,
  58,
  139,
  59,
  3,
  1,
  139
];
//Utilizzare l'operatore modulo (if(num%3===0))
```

---

```javascript
test.forEach(function(num, index, array) {
  if (num % 3 === 0) {
    array[index] = num + 100;
  }
});
console.log(test);
```

---

## Map func

L'uso di forEach () non sarà utile se si desidera modificare in modo permanente l'array originale. forEach () restituisce sempre undefined. Tuttavia, la creazione di un nuovo array da un array esistente è semplice con il potente metodo map ().

Con il metodo map (), è possibile acquisire un array, eseguire alcune operazioni su ciascun elemento dell'array e restituire un nuovo array.

---

```javascript
var fusolab = ["javascript", "python", "elettronica"];
var corsi = fusolab.map(function(corso) {
  corso += " corso";
  corso = corso.toUpperCase();
  return corso;
});
console.log(corsi); //JAVASCRIPT CORSO, PYTHON CORSO, ELETTRONICA CORSO
```

---

## Esercizio

Usa il metodo map () per prendere l'array degli importi delle fatture mostrati di seguito, e crea una seconda serie di numeri chiamati totali che mostrano gli importi delle fatture con una aggiunta del 15%.
Stampa il nuovo array di totali utilizzando console.log
SUGGERIMENTO: usa il metodo toFixed() per i numeri per aiutare ad arrotondare i valori a un massimo di 2 posizioni decimali. Si noti che il metodo restituisce una stringa per mantenere il formato "fisso" del numero. Quindi, se vuoi riconvertire la stringa in un numero, ti serve il metodo Number()

---

```javascript
var fattura = [
  50.23,
  19.12,
  34.01,
  100.11,
  12.15,
  9.9,
  29.11,
  12.99,
  10.0,
  99.22,
  102.2,
  100.1,
  6.77,
  2.22
];
var totale = fattura.map(function(importi) {
  var iva = (importi.toFixed("1") * 15) / 100;
  return Number(importi + iva);
});
console.log(totale);
```

---

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
  nome: "Piero",
  cognome: "Colangelo",
  email: "piero.colangelo@gmail.com"
};
console.log(pietro.email);
```

---

## Accesso alle proprietà

Le proprietà di un oggetto sono rappresentate da coppie chiave: valore.

Si può accedere ad esse tramite l'operatore punto.

```javascript
object.key; // dot notation
```

oppure con l'operatore []

```javascript
object["key"]; //bracket notation
// va passata una stringa o qualcosa che ritorni una stringa
```

---

```javascript
var ombrello = {
  color: "blu",
  isOpen: false,
  open: function() {
    if (ombrello.isOpen === true) {
      return "L'ombrello é giá aperto";
    } else {
      ombrello.isOpen = true;
      return "Giulia apre l'ombrello";
    }
  }
};
```

---

Usando l'esempio dell'ombrello, cosí come abbiamo creato il metodo open () creiamo il metodo close ()!

---

```javascript
var ombrello = {
  color: "blu",
  isOpen: true,
  open: function() {
    if (ombrello.isOpen === true) {
      return "L'ombrello é giá aperto";
    } else {
      ombrello.isOpen = true;
      return "Giulia apre l'ombrello";
    }
  },
  close: function() {
    if (ombrello.isOpen === false) {
      return "L'ombrello é chiuso!";
    } else {
      ombrello.isOpen = false;
      return "Giulia chiude l'ombrello!";
    }
  }
  // your code goes here
};

console.log(ombrello.close());
console.log(ombrello);
```

---

## Esercizio

Creiamo un oggetto profiloFacebook che ha tre proprietá:

- Nome
- Numero di amici
- Array di messaggi che hai postato (stringhe)

L'oggetto deve avere 4 metodi:

- aggiungiMessaggio(messaggio) - aggiunge un nuovo messaggio all'array Messaggi;
- rimuoviMessaggio(index) - rimuove il messaggio corrispondente all'index passato
- aggiungiAmico() - Aumenta il numero di Amici di 1
- rimuoviAmico() - Diminuisce il numero di Amici di 1

---

```javascript
var profiloFacebook = {
  nome: "Piero",
  amici: 140,
  messaggi: ["il cielo é bello", "la notte é buia"],
  aggiungiMessaggio: function(messaggio) {
    profiloFacebook.messaggi.push(messaggio);
  },
  rimuoviMessaggio: function(index) {
    profiloFacebook.messaggi.splice(index, 1);
  },
  aggiungiAmico: function() {
    profiloFacebook.amici += 1;
  },
  rimuoviAmico() {
    profiloFacebook.amici -= 1;
  }
};

console.log(profiloFacebook);
```

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
