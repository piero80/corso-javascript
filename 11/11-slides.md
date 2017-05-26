ANGULAR 2
================


----



WHY ANGULAR2
-----------

Performance migliori<br>
Web Component<br>
Framework e non libreria<br>
Typescript o Es6



----



TYPESCRIPT
----------

Classes<br>
Type checking<br>
Supporto di Editor<br>
Superset di javascript


----


TYPE CHECKING
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


PROJECT SETUP
------


```javascript
|- app/
    |- app.component.ts     // main app component
    |- app.module.ts        // main app module
    |- main.ts              // bootstrap our app
|- index.html
|- package.json
|- tsconfig.json
|- typings.json
|- systemjs.config.json
```

----


TYPESCRIPT SETUP
------


```javascript
npm init --yes
npm install --save-dev lite-server
"scripts": {
  "lite": "lite-server"
}
npm run lite
npm install --save-dev typescript typings
```


----


tsconfig.json
-----


```javascript
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}
```


----


typings.json
-----


```javascript
{
  "globalDependencies": {
    "core-js": "registry:dt/core-js#0.0.0+20160725163759",
    "jasmine": "registry:dt/jasmine#2.2.0+20160621224255",
    "node": "registry:dt/node#6.0.0+20160818175514"
  }
}
```


----



package.json
-----

```javascript
npm install --save-dev concurrently
"scripts": {
  "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
  "lite": "lite-server",
  "tsc": "tsc",
  "tsc:w": "tsc -w",
  "typings": "typings",
  "postinstall": "typings install"
},
```

----


ANGULAR DEPENDENCIES
-----
CoreJS Shim - <em>Aggiunge Es6 Features al browser</em><br>
Zone.js - <em>Un contesto di esecuzione. Debug e error</em><br>
reflect-metadata - <em>Polyfill per metadata decorator(@Component)</em><br>
rxjs - <em>Libreria per la programmazione funzionale(reactive data stream)</em><br>
```javascript
npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save
```


----


ANGULAR2 PACKAGES
-----
@angular/core<br>
@angular/common<br>
@angular/compiler<br>
@angular/platform-browser<br>
@angular/platform-browser-dynamic<br>
@angular/router
@angular/http
@angular/forms
```javascript
npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router --save
```


----


SYSTEM.JS
---------
systemjs.config.js
```javascript
import { Component } from '@angular/core';

<script src="node_modules/systemjs/dist/system.src.js"></script>
<script src="systemjs.config.js"></script>
<script>
   System.import('app').catch(function(err) { console.error(err); });
</script>

```
Il browser ancora non supporta il caricamento dei moduli perció noi abbiamo bisogno di un loader.
Ce ne sono tanti,(Webpack, Gulp, Grunt) ma al momento System.js é il piú semplice per Angular2.


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
