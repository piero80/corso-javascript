Angular.js
==========
Framework JavaScript per la realizzazione di web app modulari che
aumenta l'espressività del codice HTML tramite nuovi tag e attributi.


----


moduli
------
I moduli rappresentano elementi semanticamente e funzionalmente autonomi
e riutilizzabili. Un modulo può dipendere però da altri moduli che
possono essere inclusi. Solitamente un'intera applicazione viene anche
essa racchiusa in un modulo.
```javascript
var app = angular.module('nomeApp', ['dipendenza1', 'dipendenza2']);
```


----


ng-app
------
Dopo aver incluso angular.js nella nostra pagina, è necessario
indicargli il contenitore della nostra web app, solitamente il tag html
stesso.
```html
<html ng-app="nomeApp">
  <body>
  </body>
</html>
```


----


Espressioni
-----------
All'interno di una ng-app si possono inserire espressioni javascript
all'interno di doppie parentesi graffe.
```
{{3 + 2}} // 5
{{funzione()}} // stampa il risultato di funzione()
{{var}} // stampa il contneuto di var
```


----


Controller
----------
Un controller si occupa di definire il comportamento dell'elemento del
DOM a cui viene assegnato. In particolare definisce variabili e funzioni
che saranno disponibili ad angular all'interno di quell'elemento (scope
dell'elemento)

```javascript
nomeApp.controller('nomeController', ['$scope', 'dep2', function ($scope,
dep2) {
  $scope.foo = "bar";
  this.test = "prova";
}]);
```
```html
<html ng-app="nomeApp">
  <body ng-controller="nomeController as nome">
    {{foo}} // bar
    {{nome.test}} // prova
  </body>
</html>
```


----


Data binding
------------
```html
<input type="text" ng-model="variabile"></input>
{{variabile}} <- cambia in tempo reale
```


----


Cicli
-----
tramite l'attributo ng-repeat si può iterare un array presente nello
scope attuale.
```html
<ul ng-repeat="item in items">
  <li>{{item}} presente con indice {{$index}}</li>
</ul>
```


----


Show & hide
-----------
Tramite gli attributi ng-show ed ng-hide si può specficare se un
elemento debba essere visualizzato in base alla condizione specificata.
```html
<div ng-show="condizione">ciao</div>
<div ng-hide="condizione">ciao</div>
condizione può essere qualunque espressione che ritorni un booleano
```


----


Assegnazione di classi
----------------------
Si possono assegnare delle classi a seconda della veridicità di una
condizione specificata.
```html
<div ng-class="{ classe1:condizione1, classe2:condizione2 }"></div>
```


----


Eventi
------
E' possibile eseguire una determinata funzione al verificarsi di un
evento del DOM.
```html
<a href ng-click="funzione()">click</a>
<form ng-submit="funzione()">...</form>
```
[lista completa](https://docs.angularjs.org/api/ng/directive)


---


Esercizi
========


----


Caratteri maiuscoli
-------------------
Scrivere un'applicazione angular che dato un testo in input visualizzi
in tempo reale la lista dei suoi caratteri trasformati in maiuscolo.


----


Angular TO-DO
-------------
Realizzare un'applicazion con angular per la gestione di cose da fare.

I task siano inseribili scrivendo in una casella di testo e premendo
invio.

Ogni task potrà essere "checkato" e in tal caso il testo verrà sbarrato.

Ogni task avrà un proprio link per la sua cancellazione.

I task devono apparire con l'ultimo inserimento per primo.

alla fine deve essere presente una stringa di testo che indichi quanti
task sono stati svolti (checkati) sul totale (es. 2/4 task eseguiti)
