# FUNCTIONS

People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.

-- Donald Knuth

---

## Funzioni in Javascript

Le funzioni in JavaScript hanno un ruolo importantissimo, sono definite a partire da una modalità (o paradigma) di programmazione che prende le mosse dal concetto di funzione in matematica e come vedremo permettono di definire gli oggetti.

<em>una funzione è un insieme di istruzioni racchiuse in un blocco di codice, che può essere contraddistinto da un nome, può accettare argomenti o parametri di ingresso e restituire valori</em>

---

## Definire una Funzione

Le funzioni sono trattate come tutti gli altri dati e sono dunque assegnabili ad una variabile.

```javascript
function sayHello() {
  // dichiarazione
  document.write("Hello"); // statement
}
sayHello(); // Chiamata della funzione
```

```javascript
var cube = function cube(x) {
  return x * x * x;
};
console.log(cube(3));
```

---

## L’istruzione return

Nel corpo della funzione può essere presente l’istruzione return che consente di terminare e restituire un valore al codice che l’ha chiamata.

```javascript
function somma() {
  var z = 11 + 5;
  return z;
}
var risultato = somma();
```

In questo esempio abbiamo definito una funzione senza argomenti che somma due interi e restituisce il risultato. L’invocazione della funzione fa sì che venga eseguita la somma ed il risultato venga assegnato alla variabile risultato.

---

La funzione somma() che abbiamo definito può essere utilizzata in qualsiasi espressione e verrà trattata da JavaScript come un valore numerico:

```javascript
var risultato = 5 + somma() * 2;
```

In questo esempio l’invocazione somma() sarà equivalente al valore 16, per cui la variabile risultato avrà valore 37.

---

## Argomenti o parametri di una funzione

La funzione somma() che abbiamo definito prima è in grado di sommare soltanto i due numeri fissati nel blocco di istruzioni. Per renderla più generale è opportuno introdurre due PARAMETRI che rappresenteranno i numeri da sommare:
<em>x e y sono parametri nella dichiarazione della funzione</em>
```javascript
function somma(x, y) {
  var z = x + y;
  return z;
}
```

In questo caso i valori da sommare (ARGOMENTI) verranno passati alla funzione somma() al momento dell’invocazione:
<em>11 e 5 sono passati nella funzione come argomenti</em>
```javascript
var risultato = somma(11, 5);
```

---

## Parametri opzionali

Come abbiamo avuto modo di vedere, JavaScript è un linguaggio molto flessibile. Ad esempio, a proposito degli argomenti di una funzione, non è obbligatorio passarli tutti in una chiamata di funzione.
In altre parole, data la definizione della funzione somma() con i due argomenti da sommare, possiamo invocare la funzione nei seguenti modi:

```javascript
var risultato1 = somma(11);
var risultato2 = somma();
var risultato3 = somma(11, 5, 7, 9);
```

---

Queste tre invocazioni della funzione somma() potrebbero apparire errate, ma non generano nessun errore in JavaScript. In particolare, nel primo caso specifichiamo un solo argomento, il che assegna automaticamente al secondo argomento mancante il valore undefined restituendo come somma il valore NaN. Lo stesso ragionamento vale per il secondo caso, dove non passiamo alcun argomento.
Nel terzo caso, invece, passiamo più argomenti di quelli previsti nella definizione della funzione. JavaScript ignorerà gli argomenti in più restituendo lo stesso risultato di somma(11, 5).

---

## L’array arguments

Una analoga flessibilità l’abbiamo anche nella dichiarazione degli argomenti quando definiamo una funzione. Ad esempio, possiamo non definire alcun argomento nella definizione di somma() ed accedere ai valori passati in fase di chiamata tramite un array speciale predefinito: arguments.

```javascript
function somma() {
  var z = arguments[0] + arguments[1];
  return z;
}
```

In questo caso non specifichiamo gli argomenti a fianco al nome della funzione, ma accediamo ad essi sfruttando questo array predefinito.

---

La disponibilità di arguments ci consente di creare funzioni con un numero di parametri non definito. Ad esempio, possiamo sommare un numero indefinito di valori:

```javascript
function somma() {
  var z = 0;
  var i;
  for (i in arguments) {
    z = z + arguments[i];
  }
  return z;
}
```

In questo modo potremo chiamare la funzione per sommare un qualsiasi numero di valori:

```javascript
somma(2, 78);
somma(17, 32, 4, 19, 52);
```

---

## Argomenti con valori di default

Con l’avvento di ECMAScript 6 vengono introdotti altri elementi che arricchiscono la flessibilità della gestione degli argomenti di una funzione. In particolare viene introdotta la possibilità di specificare dei valori di default:

```javascript
function somma(x = 0, y = 0) {
  var z = x + y;
  return z;
}
```

In questo modo se al momento della chiamata non viene passato un argomento, ad esso viene assegnato il valore di default specificato, invece del valore undefined. Quindi, ad esempio, la chiamata somma() senza argomenti restituirà il valore 0 anzichè NaN.

---

Esercizio
---------
Dichiara una funzione chiamata ridere() che ritorna "ahahahahahaa!". Stampa il valore ritornato dalla funzione ridere() nella console.
```javascript

// il tuo codice va qui!

console.log(/* chiama la funzione ridere() */);

```
---

2 Esercizio
-----------
Scrivi una funzione chiamata ridere() che prende un parametro, num che rappresenta il numero di "ha" da ritornare
Attenzione ad aggiungere il punto esclamativo alla fine della stringa!
```javascript

// il tuo codice va qui!

console.log(ridere(3));

```

---

## Scope delle Funzioni

```javascript
var x = "globale";

var f1 = function() {
  var x = "locale f1";
};
f1();
console.log(x); // "globale"

var f2 = function() {
  x = "dentro f2";
};
f2();
console.log(x); // "dentro f2"
```

Lo scope é il <em>contesto di esecuzione</em> all'interno del quale una particolare funzione javascript viene eseguita.
Questo vale anche per le funzioni stesse in quanto possono essere assegnate a delle variabili

---

## ATTENZIONE

Parentesi graffe non significa scope isolato, questo è vero soltanto per le funzioni, ma non per i flussi di controllo (if, for, while, etc...)

Da ECMAScript 6 in poi, si usa la parola chiave _let_ al posto di _var_

---

## Differenti Notazioni

Notazione completa

```javascript
var cube = function cube(x) {
  return x * x * x;
};
```

Assegnazione di una funzione anonima

```javascript
var cube = function(x) {
  return x * x * x;
};
```

Notazione breve

```javascript
function cube(x) {
  return x * x * x;
}
```

La notazione breve permette di usare la funzione senza prima dichiararla

---

Self-Executing Anonymous Functions

```javascript
(function() {
  alert("Hello World");
})();
```

E' una funzione anonima che viene eseguita nel momento in cui viene dichiarata;

---

Arrow Function sintax

```javascript
() => { ... } // no parameter
    x => { ... } // one parameter, an identifier
(x, y) => { ... } // several parameters
Specifying a body:

let cube = x => {
  return x * x * x;
}

let cube = x => x * x * x;
//return implicito e quindi non specificato
//mettere tutto in unica riga
//rimuovere le parentesi graffe
Arrow functions sono sempre funzioni anonime
```

---

## Stack Overflow

```javascript
function gallina() {
  return uovo();
}
function uovo() {
  return gallina();
}
console.log(gallina() + " è venuto prima"); //  ??
```

Bisogna sempre prestare attenzione a non saturare lo stack, non solo in casi infiniti come questo, ma anche in casi molto grandi (funzioni ricorsive)

---

## Funzioni Ricorsive

```javascript
var add = function(n){
  if(n<=0){
    return 0;
  }
  else{
    return n + add(n-1);
  }
}
console.log(add(3));
add(3) => 3 + add(2);
          3 + 2 + add(1);
          3 + 2 + 1 + add(0);
          3 + 2 + 1 + 0;
```

La ricorsione è un'importante tecnica di programmazione nella quale una funzione chiama se stessa.
JavaScript non dispone (ancora) di un'adeguata ottimizzazione per la chiamata ricorsiva delle funzioni, tuttavia per input che si sa per certo essere relativamente piccoli a volte la ricorsione può essere una soluzione più leggibile ed elegante.
Attenzione però a non usarle mai per input molto grandi o molto probabilmente si avrà uno stack overflow.

---

## Argomenti Opzionali

in JavaScript tutti gli argomenti sono considerati opzionali

```javascript
function ciao(name) {
  name = name === undefined ? "mondo" : name;
  console.log("ciao " + name);
}
```

Verificando l'uguaglianza degli argomenti con undefined si può definire il comportamento della funzione a seconda degli argomenti passati.

---

## arguments

All'interno dello scope di una funzione viene automaticamente resa disponibile la variabile arguments che contiene un array di tutti gli elementi passati.

```javascript
function numeroArgomenti() {
  console.log(arguments.length);
}

numeroArgomenti(1, "ciao", 4, "b"); // 4
```

---

## Closures

```javascript
var me = "Pietro Colangelo";
function saluto() {
  console.log("Ciao, " + me + "!");
}
//me = 'Batman';
saluto();
```

In parole povere le variabili definite all'interno di una funzione sono globalmente disponibili all'interno di eventuali funzioni nidificate.

Utile nella programmazione funzionale, in quanto diviene semplice scrivere funzioni che ritornino nuove funzioni che si comportano diversamente a seconda dell'argomento passato (es. il metodo delle stringhe _replace_).

---

## Closures

secondo esempio

```javascript
function wrapValue(n) {
  var localVariable = n;
  return function() {
    return localVariable;
  };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1()); // 1
console.log(wrap2()); // 2
```

---

## Pure Function

```javascript
var values = { a: 1 };

function impureFunction(items) {
  var b = 1;
  items.a = items.a * b + 2;
  return items.a;
}
var c = impureFunction(values);
// Now `values.a` is 3, the impure function modifies it.
```

```javascript
var values = { a: 1 };

function pureFunction(a) {
  var b = 1;
  a = a * b + 2;
  return a;
}
var c = pureFunction(values.a);
// `values.a` has not been modified, it's still 1
```

---

## Linee Guida

- scrivere funzioni che facciano una sola cosa nel modo più generico possibile
- evitare il side effect
- scomporre i problemi in più funzioni ed utilizzarle tutte assieme per la risoluzione

---

# ESERCIZI

---

## Antispam bis

Scrivere una funzione antispam che presa in input una mail ne restituisca una
a prova di spam come definito nella lezione 2.

Si invita inoltre a cercare di scomporre il problema in più funzioni che si
possano riutilizzare in futuro.

[soluzione](http://jsbin.com/yaveze/edit?js,console)

---

## Potenza

Scrivere una funzione potenza che prenda in input una base ed un esponente e
che restituisca il valore calcolato della potenza.

Si invita inoltre a cercare di risolvere il problema in maniera ricorsiva.

[soluzione1](http://jsbin.com/fuloye/edit?js,console)
[soluzione2](http://jsbin.com/yekicaf/edit?js,console)

---

## Scacchiera bis

Scrivere una funzione scacchiera che prenda in input un valore di altezza ed
uno di larghezza e restituisca una stringa contenente una scacchiera di tali
dimensioni.

[soluzione](http://jsbin.com/yepedus/edit?js,console)
