JQUERY
=======


----


Cos'è jQuery?
-----------------
jQuery è una libreria JavaScript che fornisce un'interfaccia semplificata e multipiattaforma alle principali funzionalità disponibili nel browser.

Segni particolari: $

Peso: ~ 32Kb


----


La funzione jQuery(...)
-----------------------
jQuery(...) è la funzione principale della libreria e solitamente viene abbreviata in $(...).

Sostanzialmente accetta come argomento un valido selettore CSS e restituisce un oggetto jQuery.

Concettualmente gli oggetti jQuery sono un'astrazione dei nodi del DOM, ma ci mettono a disposizione molte funzioni aggiuntive con cui manipolarli.

Se viene passato del codice HTML la funzione $ restituirà invece un nuovo oggetto jQuery rappresentante quel nodo. Es. `$("<p>ciao</p>")`

----


Selettori CSS
----------------
I principali selettori CSS sono:

- tag = elementi tag (valido per tutti i tag body, a, h1, div, etc...)
- .name = elementi con classe name
- `#name` = elemento con id name
- `*` = tutti gli elementi

[Lista completa](http://www.w3schools.com/cssref/css_selectors.asp)


----


$(document).ready(...)
--------------------------
Prima di poter effettuare operazioni sul DOM è bene aspettare che il documento sia del tutto caricato per non andare incontro a bug imprevedibili.

jQuery ci mette a disposizione il metodo ready

```javascript
$(document).ready(function () {
  ...
}
```

esiste anche una versione abbreviata

```javascript
$(function () {
  ...
}
```

se ci sono problemi di compatibilità con il simbolo $ si può usare

```javascript
jQuery(function ($) {
  ...
}
```


---


FUNZIONI PRINCIPALI
===================


----


css(...)
--------
```javascript
$(selettore).css('proprietà CSS', 'valore');
```

oppure

```javascript
$(selettore).css({'prop1': 'val1', 'prop2', 'val2'});
```


----


visibilità
----------
- hide()  nasconde un elemento;
- show()  mostra un elemento;
- toggle()  per alternare hide e show in base alla visibilità di un elemento;


----


classi
------
- hasClass('classe') metodo di controllo, ritorna true se l’elemento ha una specifica classe;
- addClass('classe') aggiungi una classe agli elementi;
- removeClass('classe') rimuove una classe agli elementi;
- toggleClass('classe') aggiunge una classe se già non presente, altrimenti la toglie.


----


length
------
Quando un oggetto jQuery contiene più elementi si può conoscere il loro numero
tramite la proprietà length.

```javascript
$('a').length // numero dei link
```


----


each
----
Col metodo each si può iterare tra tutti gli elementi di un oggetto jQuery.

```javascript
$('h1').each(function () {
  $(this).css('color', 'red'); // tutti i titoli diventano rossi
}
```

N.B. usando $(this) racchiudiamo l'elemento attuale (this) in un oggetto jQuery
e possiamo quindi utilizzare i metodi della libreria su quell'oggetto.


---


EVENTI
======


----


on
--
con la funzione on si può indicare una funzione da eseguirsi al verificarsi di
un evento

```javascript
$(elemento).on( events [, selector ] [, data ], handler )
```

```javascript
$('button').on('click', function () {
  alert("click");
  });
```

N.B. è buona norma usare dei namespace per gli eventi, Es. click.myPlugin

----


Eventi delegati
---------------
Passando una stringa come secondo parametro alla funzione on, si può indicare
un selettore per i figli del nodo abilitati a far scattare l'evento.

Es.

```javascript
$( "#dataTable tbody tr" ).on( "click", function() {
  console.log( $( this ).text() );
});
```

vs

```javascript
$( "#dataTable tbody" ).on( "click", "tr", function() {
  console.log( $( this ).text() );
});
```


----


abbreviazioni
-------------
- click()
- dblclclick()
- change()
- focus()
- keypress
- mouseover, mouseenter, mousedown, mousemove, mouseout, mouseup

[etc...](http://api.jquery.com/category/events/)


----


off
---
Rimuove un event handler da un oggetto jQuery

```javascript
.off( events [, selector ] [, handler ] )
```


---


ESERCIZI
========


----


Scacchiera jQuery
-----------------
Modificare il generatore di scacchiere sostituendo le funzioni native con le
alternative di jQuery


----
[Soluzione](https://jsfiddle.net/piero80/5fn41n2w/2/)

Scacchiera interattiva
----------------------
Modificare il programma precedente in modo che cliccando su una casella si
scambi il suo colore.

----
[Soluzione](https://jsfiddle.net/piero80/5fn41n2w/3/)
