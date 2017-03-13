HIGHER ORDER FUNCTIONS
=======================


----


Le funzioni sono dati
------------------------
Una funzione non è altro che un oggetto come tutti gli altri, la sua unica peculiarità è che può essere invocate tramite il costrutto nomeFunzione(argomenti)


----


Funzioni anonime
--------------------
Se in JavaScript scriviamo "ciao" abbiamo creato una stringa; possiamo assegnarla ad una variabile, passarla come argomento ad una funzione o utilizzarla in espressioni complesse.

Le funzioni si comportano esattamente nello stesso modo:

```javascript
function (x) { return x * 2; }
```

in questo caso abbiamo creato una funzione anonima e possiamo, esattamente come numeri e stringhe, assegnarla ad una variabile o passarla come argomento.

```javascript
var double = function (x) { return x * 2; };

[1, 2, 3].map(function (x) { return x * 2; });
```


----


Callbacks
-----------
Un pattern tipico è quello di passare una funzione come argomento da eseguirsi dopo una certa computazione.

```javascript
function sum(x, y, cb) {
  if (!isNaN(x) && !isNaN(y)) {
    cb(null, x + y);
  } else {
    cb("error: not a number", null);
  }
}

sum(3, 2, function(err, data) {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});

```


---


PROGRAMMAZIONE FUNZIONALE
===========================


----


array map
------------
La funzione map degli array accetta come argomento una funzione e restituisce un nuovo array con i risultati della funzione passata applicata a tutti gli elementi dell'array originale.

```javascript
var double = function (x) { return x * 2; };

[1, 2, 3].map(double); // [2, 4, 6]
```

----


array filter
------------
La funzione filter degli array accetta come argomento una funzione e restituisce un nuovo array con i soli elementi dell'array originale che se passati come argomento alla funzione essa restituirà true.

```javascript
var even = function (x) { return x % 2 == 0; };

[1, 2, 3, 4, 5, 6, 7 , 8].filter(even); // [2, 4, 6, 8]
```


----


array reduce
------------
La funzione reduce degli array accetta come argomento una funzione che dato un accumulatore del risultato ed il valore attuale computa un risultato che verrà poi passato come primo argomento al passaggio successivo.

Più semplice a farsi che a dirsi...

```javascript
var sum = function (x, y) { return x + y; };

[1, 2, 3, 4].reduce(sum); // 10
```


----


bind
----
La funzione bind può essere applicata ad altre funzioni ed ha un doppio scopo:
il primo argomento passato sostituirà il this nella funzione, mentre i successivi
argomenti saranno i primi argomenti della funzione.

Un uso tipico è quello di creare funzioni con i primi argomenti già impostati

```javascript
var dueAlla = Math.pow.bind(null, 2);
dueAlla(4); // 16
```


----


every & some
------------
Le funzioni degli array every(fn) e some(fn) ritornano true rispettivamente se
tutti gli elementi dell'array se passati ad fn ritornano true, oppure se almeno
uno ritorna true.

```javascript
function biggerThanTen(x) { return x > 10; };
[13, 14, 64, 33].every(biggerThanTen); // true
[13, 14, 64, 3].some(biggerThanTen); // true
```


---


ESERCIZI
========


----


map & filter
------------
Scrivere le funzioni map e filter che prendano in input un array e una funzione
senza utilizzare le loro versioni già esistenti.


----


biggestRightTriangle
--------------------
rappresentanto un triangolo come un array [x, y, z] dove x, y e z sono i 3 lati
si scriva una funzione biggestRightTriangle che dato un array di triangoli
restituisca il triangolo **rettangolo** con la superficie più grande.

Si possono scrivere tutte le funzioni ausiliare che si vogliano, ma si possono
utilizzare solo i seguenti metodi già esistenti: map, filter, reduce, every,
some

[Soluzione](http://jsbin.com/toqoco/edit?js,console)
