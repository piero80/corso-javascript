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
<script src="node_modules/systemjs/dist/system.src.js"></script>
<script src="systemjs.config.js"></script>
<script>
   System.import('app').catch(function(err) { console.error(err); });
</script>

```
Il browser ancora non supporta il caricamento dei moduli perció noi abbiamo bisogno di un module bundler.
Ce ne sono tanti,(Webpack, Gulp, Grunt) ma al momento System.js é il piú semplice da usare per Angular2.


----



ANGULAR2 BASICS
------------------
Displaying Data - Interpolation

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <p>{{message}}</p>
  `,
})
export class AppComponent {
    title = 'La mia app';
    message = 'Benvenuto!';
}
```


----

ANGULAR2 BASICS
------------------
Using Constructor

```javascript
export class AppComponent {
  title: string;
  message: string;

  constructor() {
    this.title = 'La mia app';
    this.message = 'Benvenuto!';
  }
}
```
----


Structural - Built-in Directives
------

```javascript
<section *ngIf="showSection">
<li *ngFor="let item of list">
<div [ngSwitch]="conditionExpression">
  <ng-template [ngSwitchCase]="case1Exp">...</ng-template>
  <ng-template ngSwitchCase="case2LiteralString">...</ng-template>
  <ng-template ngSwitchDefault>...</ng-template>
</div>
<div [ngClass]="{active: isActive, disabled: isDisabled}">
```

[Lunga documentazione](https://angular.io/docs/ts/latest/guide/template-syntax.html#)


----


Binding Sintax
---------
Il Data binding é un meccanismo per coordinare cio che gli utenti vedono (dati dell'applicazione).
Angular2 fornisce molti tipi di binding dei dati.
Il Data binding puó essere raggruppato in tre categorie (direzione dei dati): dall'origine dei dati alla vista, dalla vista all'origine, e in entrambi le direzioni.

```javascript

{{expression}}
[target]="expression"
bind-target="expression"

(target)="statement"
on-target="statement"

[(target)]="expression"
bindon-target="expression"
```


----


Built-in attribute directives
---------

```javascript
NgClass - add and remove a set of CSS classes
NgStyle - add and remove a set of HTML styles
NgModel - two-way data binding to an HTML form element
```


---


Esercizi
========


----


ToDOList
------------------------------

Scrivere un'applicazione in Angular2 che simuli una lista di cose da fare.

Sarà necessario un campo per immettere del testo, ogni volta che viene
inviato un nuovo testo esso diventerà un nuovo elemento della lista.

-----
