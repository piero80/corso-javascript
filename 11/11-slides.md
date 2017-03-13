EVENTI ASINCRONI
================


----


AJAX
----
Asynchronous JavaScript and XML

In parole povere Pagine web la cui dinamicità non dipende dal caricamento di una
nuova pagina, ma da richieste a risorse esterne tramite JavaScript.


----


XMLHttpRequest
--------------
Originariamente introdotto da Microsoft per funzionare con risorse XML.

```javascript
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    }
  }
}
httpRequest.open('GET', 'url');
httpRequest.send();
```

----


Same origin Policy
------------------
Per motivi di sicurezza le XMLHttprequest possono essere eseguite solo verso
risorse dello stesso dominio.

Per accedere ad API di terze parti si devono usare le http access policy (CORS)
o, come di solito avviene, il "trucchetto" del jsonp


----


JQuery ajax
-----------
JQuery ci semplifica molto la vita con le richieste asincrone, sia per quanto
riguarda la compatibilità con tutti i browser, sia per l'astrazione di alcuni
utili trucchetti come jsonp e la serializzazione dei dati inseriti nei form.


----


$.ajax
------
La funzione $.ajax implementa tutte le operazioni effettuabili tramite
XMLhttprequest, che in JQuery viene esteso in un oggetto jqXHR

```javascript
var jqxhr = $.ajax( "example.php" )
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });
```

[Lunga documentazione](http://api.jquery.com/jQuery.ajax/)


----


Shortcuts
---------
JQuery ci fornisce alcuni shortcuts per operazioni tipiche.

```javascript
$.get('url', data)
  .done(function (data) {...});

$.getJSON('url', data)
  .done(function (data) {...});

$.post('url', data)
  .done(function (data) {...});
```


----


Serialize
---------
I dati inviati in una chaimata ajax possono essere un oggetto javascript o una
stringa. In particolare una stringa in formato url si può usare per inviare
delle coppie key=value&key2=value2 etc..

la funzione serialize() di jQuery trasforma i dati raccolti in un form in una
stringa in formato url e si può usare in una funzione post per inviare i dati
del form ad un server remoto.

```javascript
$.post( "test.php", $( "#testform" ).serialize() );
```


---


Esercizi
========


----


Ricerca tramite ZIP-CODE (CAP)
------------------------------

Il sito http://data.colorado.gov/ offre alcune API per cercare le attività relative
ad uno specifico ZIP-CODE

in particolar modo utilizzare le API:
http://data.colorado.gov/resource/4ykn-tg5h.json?entityStatus=Good%20Standing&principalZipCode=<ZIP>

per realizzare una piccola applicazione che permetta di visualizzare Nome,
indirizzo, status, latitudine e longitudine per ogni risultato della ricerca.

Inoltre la ricerca attraverso la select dovrà aggiornarsi ogni volta che
si cambia il valore, senza dover premere invio o bottoni separati.
