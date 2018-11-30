# ANGULAR2



----


## Directives

Le direttive in Angular2 si dividono in 
Direttive Attributo e Direttive Strutturali.

----


## Direttive Attributo

```html
[pad]="20"
[bg]="background" color="white"
randomColor
[alert]="message"
[tweener]="props"
xhr="/api/users"
<div row mq="lg"> (Bootstrap Grid)
[loader]="component"
```

----


## Direttive Attributo

Sono Componenti senza template.
Le utilizziamo per cambiare o modificare l'aspetto o il comportamento 
di elementi o componenti.


----


## Direttive Attributo - @HostBinding

```javascript
@Directive({
  selector: '[success]'
})
export class AlertDirective {
  @HostBinding() className = 'alert alert-success';
}
```
```html
<div success>my text</div> 
<div class="alert alert-success">my text</div>
```

<p>! Una direttiva deve essere registrata nel modulo di Angular(app.module.ts) come qualsiasi altro componente.</p>

----


## @HostBinding and Parameters

```html
<div alert>my text</div>
<div alert="success">my text</div>
```
```javascript
@Directive({
  selector: '[alert]'
})
export class AlertDirective {
  @Input() alert = 'warning';
  @HostBinding() get className() {
    return `alert alert-${this.alert}`;
  }
}
```

----


## @HostBinding and Styles
```html
<div [pad]="20">my text</div>
<div [pad]="paddingValue">my text</div>
```
```javascript
@Directive({
  selector: '[pad]'
})
export class AlertDirective {
  @Input() pad;
  @HostBinding('style.padding') get padding() {
    return `${this.pad}px`;
  }
}
```

----


## @HostListener
```javascript
@Directive({
  selector: '[alert]'
})
export class AlertDirective {
  @HostListener('click', ['$event'])
  onClickHandler(evt) {
    console.log(evt);
  }
}
```
<p>It's just like:
this.addEventListener('click', (evt) => console.log (evt))</p>

----


## Esempio

[random-color.directive.ts]


---


# STRUCTURAL DIRECTIVES



----


## ESEMPI of STRUCTURAL DIRECTIVES
BUILD
```html
<div *ngIf="authenticated"></div>
<div *ngFor="let u of user">{{u.label}}</div>
<div *ngSwitchCase="'admin'">Profile</div>
```
CUSTOM
```html
<div *ifLogged>Profile</div>
<div *repeater="let u of users">{{u.$customProp}}</div>
<div *restrictTo="'admin'">Profile</div>
```

----


## STRUCTURAL DIRECTIVES

Modellano e rimodellano la struttura del DOM,
tipicamente aggiungendo, modificando, rimuovendo elementi del DOM.


----


## STRUCTURAL DIRECTIVES

The asterisk *

Le nostre direttive usano *:
```html
<li *ngLogged>Profile</li>
<li *ngLogged="'admin'">Settings</li>
<li *myRepeater="let user in users">
  {{user.$index}} - {{user.$coords}}
</li>
```

----


## Cosa fa l'asterisco?
```html
<li *ngIf="condition">Profile</li>
```
ci inserirà il contenuto in un template element:
```html
<template>
  <li>Profile</li>
</template>
```
L'elemento template è utilizzato per dichiarare frammenti di codice HTML che non vengono renderizzati quando la pagina viene caricata ma possono essere clonati e inseriti successivamente con uno script.

[documentazione](https://developer.mozilla.org/it/docs/Web/HTML/Element/template)

----


## Come visualizzo il tag template
Usando createEmbeddedView
```html
<span *hello>Yo</span>   <!-- output: yo -->
```
```javascript
constructor(
  private template: TemplateRef<any>,
  private view: ViewContainerRef
) { }
// Invoked somewhere in your code
showTemplate {
  this.view.createEmbeddedView(this.template);
}
```

----


## createEmbeddedView
```html
<span *repeat>Yo</span>     <!-- output: yo yo yo -->
```
```javascript
constructor(
  // embedded template. Only available in structural directives
  private template: TemplateRef<any>,
  // To instantiate Embedded Views based on a Template
  private view: ViewContainerRef
) { }
ngOnInit {
  // duplicate 3 times the embedded template 
  this.view.createEmbeddedView(this.template);
  this.view.createEmbeddedView(this.template);
  this.view.createEmbeddedView(this.template);
}
```


---


# ESERCIZIO I
```html
<span *symbol="4">!</span><!-- output: !!!! -->
<span *symbol="3">.</span><!-- output: ... -->
```
Il punto esclamativo dovrà essere ripetuto 4 volte.<br>
Il punto dovrà essere ripetuto 3 volte.


----


## ESERCIZIO II



----
