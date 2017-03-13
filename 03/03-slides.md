TIPI DI DATI
============


----


Numeri
------
- interi: 1, 2, -3
- reali: 0.2, .3, -1.5...
- notazione scientifica: 1.333e9
- numeri in base 2: 0b10010
- numeri in base 8: 0777
- numeri in base 16: 0xff
- Infinity: 5/0
- NaN (Not a Number): 0/0, 3 * "a"


----


Stringhe
--------
- "ciao"
- 'ciao'
- "Erano i capei d'oro a l'aura sparsi"
- 'Erano i capei d\'oro a l\'aura sparsi'


----


Booleani
--------
- true, false
- false, 0, "", null, undefined e NaN sono valutati come false
- tutto il resto come true (anche "0", "false", [], {})


----


Tipi speciali
-------------
- *`null`*: valore inesistente o vuoto (quando assegnato volutamente)

- `undefined`: variabile dichiarata ma senza valore assegnato


---


OPERATORI E COMPARAZIONI
========================


----


Operatori
---------
- aritmetici (+, -, *, /, %, ++, --)
- assegnazione ( =, +=, -=, *=, /=, %=)
- il '+' con le stringhe effettua concatenazione!
- comparazione (==, ===, !=, !==, <, > <=, >=)
- logici (&&, ||, !)
- condizionale (variabile = (condizione) ? valore1 : valore2)
- operazioni su bit (&, |, ~, ^, <<, >>) // raramente serviranno
- typeof


----

Conversioni automatiche (occhio!)
---------------------------------
- (8 * null) // 0
- ("5" - 1) // 4
- ("5" + 1) // 51
- ("five" * 2) // NaN
- (false == 0) // true
- Array(16).join("lol" - 2) + " Batman!"  // :)

----


Comparare i Booleani
--------------------
- (false == 0); // true
- (false == ""); // true
- (0 == ""); // true
- (null == false); // false
- (null == null); // true
- (undefined == undefined); // true
- (undefined == null); // true
- (NaN == null); // false
- (NaN == NaN); // false 
- (2 == "2"); // true !
- (12 == 1 + "2"); // true !!


----


Un gran macello!
----------------
Per sicurezza nelle comparazioni è meglio utilizzare === e !== che restituiscono
l'uguaglianza solo se i dati sono effettivamente identici

- ("ciao" === "ciao"); // true
- (2.0 === 2); // true
- (NaN === NaN); // false!! :O (maggiori info [qui](https://ariya.io/2014/05/the-curious-case-of-javascript-nan))
- (null === null); // true
- (null === undefined); // false


---


STRUTTURE DI CONTROLLO
======================


----


if, then, else
--------------
```javascript
if (condizione) { // se la condizione è vera
  fai qualcosa;
} else { // altrimenti
  fai qualcos'altro;
}
```

Es.

```javascript
if (3 > 2) {
  console.log("3 è maggiore di 2");
} else {
  console.log("la matematica è impazzita");
}
```


----


while
-----
```javascript
while (condizione) { // finchè la condizione rimane vera
  fai qualcosa;
}
```

Es.

```javascript
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
```


----


for
---
```javascript
for (dichiarazione; condizione; incremento) {
  fai qualcosa;
}
```

Es.

```javascript
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
```

----


switch
------
```
switch (espressione) {
  case "a":
    istruzione;
    break;
  case "b":
    istruzione;
    break;
  default:
    istruzione di default
}
```

In base al valore dell'espressione verrà eseguito il codice **A PARTIRE**
dal caso corrispondente. Per questo sono necessari i break.


----


for-in
------
```javascript
for (key in obj) {
  fai qualcosa con key;
}
```

Permette di iterare tra le chiavi enumerabili di un oggetto JavaScript.


---


ESERCIZI
========


----


Scacchiera
----------
Scrivere un programma che stampi in console una scacchiera 8x8, dove le caselle
nere sono rappresentate dal simbolo [#] e quelle bianche dal simbolo [ ]

[soluzione1](http://jsbin.com/kaquzaz/edit?js,console)
[soluzione2](http://jsbin.com/guxexo/4/edit?js,console)
[soluzione3](http://jsbin.com/yucoremizu/edit?js,console)


----


Trimestri
---------
Scrivere un programma che data una stringa con il nome di un mese stampi in
console il trimestre a cui corrisponde.

Es. gennaio -> Primo Trimestre

Ottobre -> Quarto trimestre

mAgGio -> Secondo Trimestre

[soluzione](http://jsbin.com/fumagi/1/edit?js,output)


----


FizzBuzz
--------
Scrivere un programma che stampi i numeri da 1 a 100, se però il numero è
divisibile per 3 allora si scriva "Fizz", se è divisibile per 5 "Buzz", se è
divisibile sia per 3 che per 5 allora si scriva "FizzBuzz".

Es. 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, etc...

Un grande classico della programmazione

[soluzione](http://jsbin.com/kukega/1/edit?js,output)


----


vOcAlI
------
Scrivere un programma che data una stringa minuscola la stampi con le vocali maiuscole

Es. giovannino -> gIOvAnnInO

Per quanto vi siano soluzioni semplici ma tediose, si consiglia di sbirciare
tra le funzioni di stringhe ed array per trovare una soluzione elegante.

[soluzione](http://jsbin.com/vosume/edit?js,console)
