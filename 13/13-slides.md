ANGULAR2
==================



----


Components
---------
![image](components.jpg)


----


WHY COMPONENTS?
----------------
* Responsible for a portion of the view
* Reusable
* Componible
* Testable


----


In Angular a Component:
-------
* extends the HTML syntax creating new tags (i.e. <tab-bar>)
* is a class decorated by @Component and some metadata
* always has an HTML template
* has a lifecycle
* receives data by using @Input attributes
* communicates with the world by using @Output event emitters


----


Projection
------------
```html
<my-panel title="Hello">content here</my-panel>
<my-panel title="Hello">
  <input type="text">
</my-panel>
```

----

Projection in Angular2 permette di avere uno stesso componente con contenuto diverso.

```javascript
import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-panel',
  template: `<div class="panel panel-info">
                <div class="panel-heading">
                  {{title}}
                </div>
                <div class="panel-body">
                  <ng-content></ng-content>    <!-- transclusion here -->
                </div>
             </div>`
})
export class MyPanelComponent {
  @Input() title;
}
```


----


STATEFUL COMPONENT
------
Stateful Component è quel componente che ha al suo interno tutta la logica che gli 
permette di sapere il suo stato e anche di cambiarlo. Registra al suo interno tutti i potenziali 
cambi di stato dell'applicazione.

```javascript
import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-panel',
  template: `<div class="panel panel-info">
                <div class="panel-heading" (click)="toggle()">
                  {{title}}
                </div>
                <div class="panel-body" *ngIf="opened">
                  <ng-content></ng-content>  
                </div>
             </div>`
})
export class MyPanelComponent {
  @Input() title: string;
  opened = true;
  toggle() {
    this.opened = !this.opened;
  }
}
```


----


STATELESS
------

![image](stateless.jpg)


---


STATELESS COMPONENT
---------
E' un componente il più semplice possibile che riceve informazioni dall'esterno ed a sua volta trasmette l'informazione ricevuta al componente genitore.
```javascript
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'my-panel',
  template: `<div class="panel panel-info">
                <div class="panel-heading" (click)="toggle.emit()">
                  {{title}}
                </div>
                <div class="panel-body" *ngIf="opened">
                  <ng-content></ng-content>
                </div>
              <div>`
})
export class MyPanelComponent {
  @Input() title: string;
  @Input() opened: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
```

---


Template reference variables
------
Un template reference variable è spesso un riferimento dell'elemento del DOM con un template. Può 
essere anche un riferimento di un componente Angular o direttiva.
```html
<input #phone placeholder="phone number">
<!-- lots of other elements -->
<!-- phone refers to the input element; pass its `value` to an event handler -->
<button (click)="callPhone(phone.value)">Call</button>
```

----

Reference and @ViewChild
---
The @ViewChild è un decorator che prende il nome del componente come input e trova its selector in the template of the containing component to bind to. @ViewChild can also be passed a template reference variable.
```javascript
import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
    selector: 'app-root',
    template: `
    <app-alert>My alert</app-alert>
      <button (click)="showAlert()">Show Alert</button>`
})
export class AppComponent {
  @ViewChild(AlertComponent) alert: AlertComponent;

  showAlert() {
    this.alert.show();
  }
}
```

----

@ViewChild
----------

---
```javascript
import { Component } from '@angular/core';

@Component({
	selector: 'app-alert',
	template: `
	  <div *ngIf="!hidden">
  	  <div class="backdrop" (click)="hide()"></div>
	    <div class="modal">
	      <ng-content></ng-content>
	      <div>
  	      <button (click)="hide()">OK</button>
	      </div>
      </div>
	  </div>`
  export class AlertComponent {
    hidden = true;
  
    show() {
      this.hidden = false;
    }
    
    hide() {
      this.hidden = true;
    }
```

----


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
