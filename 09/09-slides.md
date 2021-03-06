EVENTI ASINCRONI
================


----

CALLBACKS - PROMISE - ASYNC AWAIT
---------------------------------


----

CALLBACKS
---------

```javascript
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
```

----

PROMISE
-------

```javascript
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

 createPost({ title: 'Post Three', body: 'This is post three' })
   .then(getPosts)
   .catch(err => console.log(err));
```

----

```javascript
 //Async / Await
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' });
    getPosts();
}

```

----

AJAX
----
Asynchronous JavaScript and XML

In parole povere Pagine web la cui dinamicità non dipende dal caricamento di una
nuova pagina, ma da richieste a risorse esterne tramite JavaScript.


----


HOW AJAX WORKS
---
Il browser richiede informazioni al server<br>
Il server risponde con i dati (solitamente HTML, XML, JSON)<br>
Il browser processa il contenuto e lo aggiunge alla pagina<br>


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

FETCH (NATIVO)
-----

Per effettuare una richiesta e ottenere una risorsa, si usa il metodo GlobalFetch.fetch. Esso é implementato in piú interfacce.
Il metodo fetch() richiede un parametro obbligatorio (path url) e ritorna una Promise che risolve la Response a quella richiesta.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

----


DATA FORMAT
------


HTML
```html
<div class="event">
  <img src="img/map-ca.png" alt="Map of California" />
  <p><b>San Francisco, CA</b><br>
  May 1</p>
</div>
```


----


XML
```xml
<?xml version="1.0" encoding="utf-8" ?>
<events>
  <event>
    <location>San Francisco, CA</location>
    <date>May 1</date>
    <map>img/map-ca.png</map>
  </event>
</events>
```


----


JSON
```json
{
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "May 1",
      "map": "img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "May 15",
      "map": "img/map-tx.png"
    }
  ]
}
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
I dati inviati in una chiamata ajax possono essere un oggetto javascript o una
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
https://data.colorado.gov/resource/bhcc-9bdx.json

per realizzare una piccola applicazione che permetta di visualizzare Nome,
indirizzo, status, latitudine e longitudine per ogni risultato della ricerca.

Inoltre la ricerca attraverso la select dovrà aggiornarsi ogni volta che
si cambia il valore, senza dover premere invio o bottoni separati.
