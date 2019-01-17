ANGULAR 6
================


----

A framework for building client applications in HTML, CSS and JAVASCRIPT / TYPESCRIPT

----

WHY ANGULAR 6
-----------

Applicazioni con Performance migliori<br>
Applicazioni con una struttura pulita<br>
Codice riutilizzabile in altri progetti<br>
Rende la nostra applicazione piú testabile<br>
Framework e non libreria<br>


----

ARCHITECTURE
------------

User Interface (UI)  ------------> Data and Processing (Backend)
HTML Templates 
Presentation Logic   ------------> Data + API Business Logic

----

FIRST ANGULAR APP
-----------------

* Install nodejs [nodejs](http://nodejs.org)
* Install Angular CLI (Command-line Interface) (sudo) npm install -g @angular/cli

----

* ng new hello-world (Per creare un nuovo progetto Angular)
* ng serve (Per lanciare il serve locale che instanzierá l'applicazione)

----

STRUCTURE OF ANGULAR 6 PROJECTS
-------------------------------

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


ANGULAR 6 PACKAGES
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


WEBPACK
---------

```javascript
<script type="text/javascript" src="inline.bundle.js"></script>
<script type="text/javascript" src="polyfills.bundle.js"></script>
<script type="text/javascript" src="styles.bundle.js"></script>
<script type="text/javascript" src="vendor.bundle.js"></script>
<script type="text/javascript" src="main.bundle.js"></script>
```
Il browser ancora non supporta il caricamento dei moduli perció noi abbiamo bisogno di un module bundler.
Ce ne sono tanti,(Webpack, Gulp, Grunt), al momento ANGULAR 6 utilizza WEBPACK

[webpack][https://webpack.js.org/]

----

TYPESCRIPT
----------

Classes<br>
Interfaces<br>
Constructor<br>
Arrow function<br>
Type checking<br>
Supporto di Editor<br>
Superset di javascript


----

Installare Typescript globalmente (come amministratore)

```javascript
npm install -g typescript // per installare typescript globalmente
tsc --version // per sapere la versione installata
mkdir ts-hello
main.ts
function log(message){
  console.log(message)
}
var message = 'Hello World';
log(message);

tsc main.ts // per compilare il file typescript appena creato in JS // questa istruzione produrrá un nuovo file main.js
```

----

VARIABLE DECLARATION
--------------------

```javascript

function doSomething(){
  for(var i = 0; i < 5; i++){
    console.log(i);
  }
  console.log("Finally: " + i);
}
doSomething();

//Output 
/*
0
1
2
3
4
Finally: 5
*/

function doSomething(){
  for(let i = 0; i < 5; i++){
    console.log(i);
  }
  console.log("Finally: " + i); // with let i is an error for Typescript
}
doSomething();

```

----

TYPES
-----

```javascript
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]= [1,2,3];
let f: any[]=[1,true,'a', false];

const ColorRed = 0;
const ColorGreen= 1;
const ColorBlue = 2;

enum Color {
  Red = 0, Green = 1, Blue = 2
};
let backgroundColor = Color.Red

```

----

TYPE ASSERTIONS 
-------

```javascript
let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');

```

----

ARROW FUNCTIONS
--------------

```javascript
//in JAVASCRIPT
let log = function(message){
  console.log(message);
}
//In Typescript
let doLog = (message) => console.log(message);

```

----

INTERFACES
----------

```javascript
let drawPoint = (x,y,a,b,c,d,e) => {
  //...
}
let drawPoint = (point) => {
  //...
}
drawPoint({
  x:1,
  y:2
})
//Use Annotation
let drawPoint = (point:{x:number, y:number}) => {
  //...
}
//Use Interface
interface Point {
  x:number,
  y:number
}
let drawPoint = (point:Point) => {
  //...
}
```

----


CLASSES
------
TypeScript prevede il supporto delle classi estendendo la nuova sintassi ES6 e rendendola ancora più vicina alla programmazione ad oggetti classica.

```javascript
class Persona {
    name: string;
    cognome: string;
    constructor(nome?: string, cognome?: string){// ? is optional
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



INHERITANCE (EREDITARIETA')
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

ACCESS MODIFIERS
-----------------

```javascript

class Point {
  constructor(private x?:number, private y?:number){

  }
  draw(){
    console.log('X ' + this.x + ', Y: ' + this.y)
  }
}
let point = new Point(1,2)
point.draw();

```


----

MODULES
-------

```javascript
export class Point {
 constructor(private x?:number, private y?:number){}
  draw(){
    console.log('X ' + this.x + ', Y: ' + this.y)
  }
}

import {Point} from './point';
let point = new Point(1,2);
point.draw();


```

----

ANGULAR6 BASICS
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

ANGULAR6 BASICS
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

Creating a Component Using Angular CLI
------

```javascript
ng generate c course
```

[documentazione](https://cli.angular.io/)


----


Interpolation
---------
Il Data binding é un meccanismo per coordinare cio che gli utenti vedono (dati dell'applicazione).
Angular2 fornisce molti tipi di binding dei dati.
Il Data binding puó essere raggruppato in tre categorie (direzione dei dati): dall'origine dei dati alla vista, dalla vista all'origine, e in entrambi le direzioni.

```javascript

@Component({
  selector:'courses',
  template:'<h2>{{"Title:" + title}}</h2>'
})

export class AppComponent {
  title: string;
  message: string;

  constructor() {
    this.title = 'La mia app';
    this.message = 'Benvenuto!';
  }

  getTitle(){
    return this.title;
  }
}
```


----


Directives
---------

```javascript
@Component({
  selector:'courses',
  template:`<h2>{{title}}</h2>
             <ul>
              <li *ngFor="let course of courses">{{course}}</li>
             </ul>
            `
})

export class AppComponent {
 
  this.title = 'List of courses';
  courses = ["course1", "course2", "course3", "course4"];
  
```


----

Services
---------

```javascript
@Component({
  selector:'courses',
  template:`<h2>{{title}}</h2>
             <ul>
              <li *ngFor="let course of courses">{{course}}</li>
             </ul>
            `
})

export class AppComponent {
  this.title = 'List of courses';
  courses;

  constructor(service:CoursesService){
    this.courses = service.getCourses();
    //let service = new CoursesService();
    //this.courses = service.getCourses();
  }

}

export class CoursesService {
  getCourses(){
    return  ["course1", "course2", "course3", "course4"];
  }
}

```

----


Esercizio
========


----


Authors App
------------------------------

Creare un nuovo componente Autore che recupera le informazioni da un servizio.

-----
