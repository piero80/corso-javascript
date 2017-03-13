FUNCTIONS
==========
People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.

-- Donald Knuth


----


Definire una Funzione
-------------------------
Le funzioni sono trattate come tutti gli altri dati e sono dunque assegnabili ad una variabile.

```javascript
var cube = function cube(x) { // dichiarazione
  return x * x * x;  // valore di ritorno
};

console.log(cube(3)); // 27
```


----


Scope delle Funzioni
------------------------
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

Questo vale anche per le funzioni stesse in quanto possono essere assegnate a delle variabili


----


ATTENZIONE
----------------
Parentesi graffe non significa scope isolato, questo è vero soltanto per le funzioni, ma non per i flussi di controllo (if, for, while, etc...)

Da ECMAScript 6 in poi, si usa la parola chiave *let* al posto di *var*


----


Differenti Notazioni
----------------------
Notazione completa

```javascript
var cube = function cube(x) {
  return x * x * x;
};
```

Assegnazione di una funzione anonima

```javascript
var cube = function (x) {
  return x * x * x;
}
```

Notazione breve

```javascript
function cube(x) {
  return x * x * x;
}
```

La notazione breve permette di usare la funzione senza prima dichiararla

N.B. mai dichiarare una funzione all'interno di un if


----


Stack Overflow
------------------
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


----


Funzioni Ricorsive
---------------------
```javascript
function fattoriale(n) {
  return (n === 0) ? 1 : n * fattoriale(n - 1);
}
```

JavaScript non dispone (ancora) di un'adeguata ottimizzazione per la chiamata ricorsiva delle funzioni, tuttavia per input che si sa per certo essere relativamente piccoli a volte la ricorsione può essere una soluzione più leggibile ed elegante.

Attenzione però a non usarle mai per input molto grandi o molto probabilmente si avrà uno stack overflow.


----


Argomenti Opzionali
------------------------
in JavaScript tutti gli argomenti sono considerati opzionali

```javascript
function ciao(name) {
  name = (name === undefined)? "mondo" : name;
  console.log("ciao " + name)
}
```

Verificando l'uguaglianza degli argomenti con undefined si può definire il comportamento della funzione a seconda degli argomenti passati.


----


arguments
------------
All'interno dello scope di una funzione viene automaticamente resa disponibile la variabile arguments che contiene un array di tutti gli elementi passati.

```javascript
function numeroArgomenti() {
  console.log(arguments.length);
}

numeroArgomenti(1, "ciao", 4, "b") // 4
```


----


Closures
----------
```javascript
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1()); // 1
console.log(wrap2()); // 2
```

In parole povere le variabili definite all'interno di una funzione sono globalmente disponibili all'interno di eventuali funzioni nidificate.

Utile nella programmazione funzionale, in quanto diviene semplice scrivere funzioni che ritornino nuove funzioni che si comportano diversamente a seconda dell'argomento passato (es. il metodo delle stringhe *replace*).


----


Linee Guida
--------------
- scrivere funzioni che facciano una sola cosa nel modo più generico possibile
- evitare il side effect
- scomporre i problemi in più funzioni ed utilizzarle tutte assieme per la risoluzione


---


ESERCIZI
========


----


Antispam bis
------------
Scrivere una funzione antispam che presa in input una mail ne restituisca una
a prova di spam come definito nella lezione 2.

Si invita inoltre a cercare di scomporre il problema in più funzioni che si
possano riutilizzare in futuro.

[soluzione](http://jsbin.com/yaveze/edit?js,console)

----


Potenza
-------
Scrivere una funzione potenza che prenda in input una base ed un esponente e
che restituisca il valore calcolato della potenza.

Si invita inoltre a cercare di risolvere il problema in maniera ricorsiva.

[soluzione1](http://jsbin.com/fuloye/edit?js,console)
[soluzione2](http://jsbin.com/yekicaf/edit?js,console)

----


Scacchiera bis
--------------
Scrivere una funzione scacchiera che prenda in input un valore di altezza ed
uno di larghezza e restituisca una stringa contenente una scacchiera di tali
dimensioni.

[soluzione](http://jsbin.com/yepedus/edit?js,console)
