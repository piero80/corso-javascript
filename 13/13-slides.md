ANGULAR.JS PARTE 2
==================



----


Direttive
---------
Le direttive permettono di creare nuovi tag, attributi o classi con
comportamenti definibili da noi.
```
<side-bar>
  <search-box></search-box>
  <main-menu></main-menu>
  <social></social>
</side-bar>
```


----


Creare direttive
----------------
```javascript
app.directive('myTag', function(dep1, dep2) {
  return {
    type: 'E',  // A, E, C
    scope: {
      attr: '@'
    },
    link: function (scope, el, attr) {
      ...
    },
    template: "..." 
  };
};
```

html:
```
<my-tag attr="foo"></my-tag>
```


----


Esempio
-------
```javascript
app.directive('red', function () {
  return {
    scope: {
      text: '@'
    },
    template: '<span style="color:red">{{text}}</span>'
  };
});
<red text="ciao"></red>
```


----


restrictions
------------
Le direttive possono utilizzare filtri di restrizioni.

* 'A' - only matches attribute name
* 'E' - only matches element name
* 'C' - only matches class name
* 'M' - only matches comment

```javascript
app.directive('helloWorld', function(){
  return{
    restrict: 'AE',
    template: '<p style="background-color:{{color}}">Hello World</p>'
  }
});
```


----



link
----
La funzione link viene eseguita quando la direttiva è stata inserità
nell'applicazione ed è il luogo ideale dove definire comportamenti che
interagiscano con il DOM.

```javascript
app.directive('clickLogger', function () {
  return {
    restrict: 'A',
    link: function (scope, el, attr) {
      el.on('click', function () {
        console.log('cliccato');
      });
    }
  };
});
<div click-logger>test</div>
```


----


filtri
------
I filtri sono funzioni utilizzabili nelle espressioni che permettono di
modificare i dati da visualizzare (eg. valute, date, upperCase,
ordinamento, etc...)

```
{{expression | filter1 | filter2}}
{{15 | currency:'€'}} // 15.00€
{{2014-10-19 | date}} // Oct 19, 2014
{{text | limitTo:n}} // mostra primi n caratteri
```

[etc](https://docs.angularjs.org/api/ng/filter)


----


Creare nuovi filtri
-------------------
Un filtro non è che una funzione che dato un input restituisce un
output ed implementarli non è quindi complicato.

```
app.filter('filterName', function () {
  return function (input, arg1, arg2) {
    ...
    return output
  },
});
{{input | filterName:arg1:arg2}}
```


---


ESERCIZI
========


----


Random color
------------
Creare una direttiva di tipo tag chiamata set-color
che accetti il nome di un colore da un input. 
Esso dovrà cambiare colore di background in base
al colore inserito.


----


Reverse
-------
Scrivere un filtro reverse che inverte una stringa
