Ambiente di Sviluppo
====================
- Editor di testo (sublime, notepad++, emacs, vim, etc...)
- Browser web (Chrome, Firefox)
- Sandbox online (JsBin, JsFiddle, etc...)


---


Risorse nel Web
===============
- [MDN](https://developer.mozilla.org/it/)
- [MSDN](https://msdn.microsoft.com/en-us/library/)
- [Google Developers](https://developers.google.com)
- [w3school](http://www.w3schools.com/)
- [W3C DOM](http://www.w3.org/DOM/DOMTR)


---


Hello World!
============


----


versione alert
--------------
index.js:
```javascript
alert('Hello World!');
```

index.html:
```html
<script src="index.js">< /script>
```


----


versione console
----------------
index.js:
```javascript
console.log('Hello World!');
```

index.html:
```html
<script src="index.js"></ script>
```


---


Utilizzo console
================
JavaScript è un linguaggio di scripting che non necessita di precompilazione,
quindi tramite la console possiamo eseguire delle istruzioni sequenzialmente
e vederne il risultato immediatamente.


----


qualche esempio
---------------
i nostri "hello world"
***
```Javascript
3+2
```
***
```javascript
window.location.href = 'http://www.google.it'
```
***
```javascript
document.bgColor = 'red'
```

```javascript
document.body.style.backgroundColor = 'white'
```


----


interazione
-----------
- prompt
- confirm
- window.location.hash
- etc...


----


autocomplete
------------
Le console dei browser moderni come chrome e firefox offrono suggerimenti
per completare le istruzioni che scriviamo in console.
Approfittate di questa caratteristica, in quanto permette di prendere
rapidamente confidenza con il linguaggio, nonchè di esplorare le proprietà
di tutti gli oggetti.


---


Utilizzo Sandbox
================
Serivizi come [JSBin](http://jsbin.com), [JSFiddle](http://jsfiddle.net),
[CodePen](http://codepen.io), [Plunker](http://plnkr.co)
permettono di creare e condividere online piccole applicazioni basate
su html + js + css senza la necessità di dover ogni volta creare i files
localmente e gestire le importazioni.

> La pigrizia è una virtù!


---


Esercizio
=========
Chiedere in input una stringa e restituirla al contrario tramite `alert`
oppure `console.log`.

suggerimenti:

- `var x = "a"` salva nella variabile x la stringa "a"
- `"stringa".split(separatore)` divide la stringa in una lista di elementi
  (array) in base al separatore indicato
- cercate con l'autocomplete i metodi che si possono applicare ad un array...


----


Esercizio
=========
Chiedere in input un indirizzo email e restituirlo con le chiocciole ed i punti
sostituiti con "[at]" e "[dot]".

Per semplicità dare per certo che verrà dato in input un indirizzo email valido
e che nel dominio della mail ci possa essere un solo punto.

Es. axyzxp@gmail.com -> axyzxp[at]gmail[dot]com

mario.rossi@yahoo.it -> mario.rossi[at]yahoo[dot]it


----

Esercizi extra
==============

Creare degli elementi *div* di CLASSE "pluto" e uno di ID "ciccio", fate sì che i *div* abbiano dei contenuti testuali, poi lanciare i seguenti comandi da console

```javascript
document.getElementsByClassName("pluto")
```

```javascript
document.getElementById('ciccio').style.color = 'blue';
```

```javascript
document.document.getElementsByTagName('div')
```

```javascript
var c = document.body.childNodes
console.log(c)
c[2].text
c[4].text
```
