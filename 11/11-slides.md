ANGULAR 2
================


----


WHY ANGULAR2
----

Performance migliori<br>
Web Component<br>
Framework e non libreria<br>
Typescript o Es6



----


TYPESCRIPT
---
Classes<br>
Type checking<br>
Supporto di Editor<br>
Superset di javascript


----


Type checking
--------------
Passare il tipo di dato al parametro della funzione

```javascript
function saySomething(message:string){
  console.log(message)
}
saySomething(400); //Error
saySomething('Hello'); // No Error
```

----


CLASSI
------
TypeScript prevede il supporto delle classi estendendo la nuova sintassi ES6 e rendendola ancora più vicina alla programmazione ad oggetti classica.

```javascript
class Persona {
    name: string;
    cognome: string;
    constructor(nome:string, cognome:string){
      this.nome = nome;
      this.cognome = cognome;
    }
  getNomeCompleto(){
    return this.nome + this.cognome;
  }
}
var mypersona = new Persona('Pietro','Colangelo');
mypersona.getNomeCompleto();
```


----


EREDITARIETA'
------
TypeScript prevede il supporto delle classi estendendo la nuova sintassi ES6 e rendendola ancora più vicina alla programmazione ad oggetti classica.

```javascript
class Studente extends Persona {
    materie: Materie[];

	constructor(nome, cognome) {
		super(nome, cognome);
    }
  getNomeCompletoconTitolo(){
    return "Studente " + super.getNomeCompleto();
  }
}
```


----


INTERFACCIA
------
Un interfaccia è un vincolo al rispetto di un contratto. Definisce i membri che una classe deve avere in modo che gli oggetti che intendono interagire con le loro instanze sappiano gia quali proprietà e metodi chiamare.

```javascript
interface IPersona {
	nome: string;
	cognome: string;
	visualizzaNomeCognome():string;
}
class Persona implements IPersona {
	nome: string;
	cognome: string;
	constructor(nome: string, cognome: string) {
		this.nome = nome;
		this.cognome = cognome;
	}
	visualizzaNomeCognome() {
		return this.nome + " " + this.cognome;
	}
}
```


----


ANGULAR2 SETUP
@angular/core<br>
@angular/common<br>
@angular/compiler<br>
@angular/platform-browser<br>
@angular/platform-browser-dynamic


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
