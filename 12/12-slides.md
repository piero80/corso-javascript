ANGULAR 2
==========
Passare dati ad un Componente


----


Passare dati ad un Componente
-----------------------------
Ci sono due modi per passare i dati ad un componente, con proprietà "binding" e con "binding event".
In Angular, la rilevazione del cambiamento di dati e di eventi si verifica dall'alto al basso da genitore a figlio all'interno dell'alberatura del dom. Tuttavia, per gli eventi di Angular possiamo utilizzare il modello mentale evento DOM dove gli eventi fluiscono dal basso verso l'alto dal bambino al genitore. Quindi, gli eventi di Angular possono essere trattati come regolare eventi HTML basati su DOM quando si tratta della propagazione di un evento cancellabile.<br>
L'input Decorator definisce un set di parametri che possono essere passati dal componente figlio al componente genitore.


----

Esempio
-------

```javascript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rio-hello',
  template: '<p>Hello, {{name}}!</p>',
})
export class HelloComponent {
  @Input() name: string;
}
```
```html
<!-- To bind to a raw string -->
<rio-hello name="World"></rio-hello>
<!-- To bind to a variable in the parent scope -->
<rio-hello [name]="helloName"></rio-hello>

```

----


Event Handler
----------------------------------------

Angular 2 consente di generare eventi combinando l’utilizzo del decoratore @Output e della classe EventEmitter.
Analogamente a quanto avviene per il decoratore @Input, il decoratore @Output ci consente di definire una proprietà di output, cioè una proprietà che genera un flusso di informazioni dall’interno del componente verso l’esterno. Un evento può essere considerato a tutti gli effetti un meccanismo che abilita flusso di questo tipo.
La generazione dell’evento viene effettuata invocando il metodo emit() della proprietà result.
```javascript
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rio-counter',
  templateUrl: 'app/counter.component.html'
})
export class CounterComponent {
  @Input()  count = 0;
  @Output() result = new EventEmitter<number>();

  increment() {
    this.count++;
    this.result.emit(this.count);
  }
}
```

----

view del Component
------------------
```html
<div>
  <p>
    <ng-content></ng-content>
    Count: {{ count }} -
    <button (click)="increment()">Increment</button>
  </p>
</div>
```

----


Cicli di vita dei Componenti
-----------
I componenti che costituiscono una applicazione Angular 2 vengono creati dinamicamente in base all’evoluzione dell’applicazione stessa.L’esistenza dei componenti durante l’esecuzione dell’applicazione attraversa diverse fasi che ne rappresentano il ciclo di vita. Angular 2 ci consente di intercettare e gestire in maniera personalizzata le varie fasi del ciclo di vita di un componente sfruttando i cosiddetti Lifecycle Hooks: un insieme di eventi in corrispondenza dei quali è possibile definire dei metodi per la loro gestione.


----


Prima di ogni fase: l’esecuzione del costruttore
----------
Prima di vedere nel dettaglio quali sono le fasi del ciclo di vita dei componenti, è opportuno evidenziare che la prima attività effettuata dal framework alla creazione di un componente è l’esecuzione del suo costruttore. Anche se tecnicamente non rappresenta un Lifecycle Hook, l’esecuzione del costruttore è quindi la fase iniziale della creazione di un componente Angular2. È da evidenziare tuttavia che in questa fase:
- non sono ancora state inizializzate le proprietà di input;
- non è ancora disponibile la view associata al componente stesso.


----


Le fasi del ciclo di vita del componente
------------
<em>OnChanges</em> 	
Si verifica quando il valore di una proprietà di input viene modificato. Oltre a verificarsi prima dell’inizializzazione del componente, si verifica anche ogni qualvolta cambia il valore delle proprietà di input<br>
<em>OnInit</em><br>
Rappresenta la fase di inizializzazione del componente e si verifica dopo il primo evento OnChanges. Questa fase viene eseguita una sola volta durante il ciclo di vita del componente.

----

-----
<em>DoCheck</em></br>
Questa fase viene eseguita durante il check interno di Angular per valutare le modifiche ai componenti ed ai dati</br>
<em>AfterContentInit</em></br>
In questa fase il contenuto associato al componente è stato inizializzato; in particolare, è stato costruito l’albero degli eventuali componenti figli.</br>
<em>AfterContentChecked</em></br>
Anche questa fase viene eseguita durante un check interno di Angular sui contenuti associati al componente.</br>



----

-----------
<em>AfterViewInit</em></br>
Questa è la fase di inizializzazione della view associata al componente. In questa fase il componente risulta mappato sul DOM ed è quindi visibile.</br>
<em>AfterViewChecked</em></br>
Come per le altre fasi checked, anche in questo caso questa fase riguarda il check interno di Angular sulla view</br>
<em>OnDestroy</em></br>
Questa è l’ultima fase del ciclo di vita del componente e si verifica prima che Angular lo distrugga definitivamente.
Questa fase viene eseguita una sola volta durante il ciclo di vita del componente.

----


Gestire le fasi del component lifecycle
----------------------
L’approccio generale consiste nell’implementare una specifica interfaccia TypeScript il cui nome corrisponde alla fase da gestire. Ad esempio, se intendiamo gestire la fase OnInit di un componente dobbiamo implementare l’omonima interfaccia come mostrato di seguito:
```js
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'articolo',
    templateUrl: 'articolo.component.html',
    styleUrls: ['articolo.component.css']
})
export class ArticoloComponent implements OnInit {
    constructor() { }
    ngOnInit() {
        console.log("Il componente è in fase di inizializzazione!");
    }
}
```


----


Two-way data binding in Angular 2
----------
Una dei cavalli di battaglia di Angular 1.x è stato il two-way data binding, il meccanismo automatico che consente di effettuare il binding di un elemento dell’interfaccia con il modello dei dati e viceversa, dal modello dei dati verso l’elemento dell’interfaccia.
Questo meccanismo di sincronizzazione automatica ha indubbiamente il suo fascino, dal momento che consente di creare interattività tra i vari componenti dell’interfaccia e con il modello dei dati sottostante con poco sforzo, ma ha anche un prezzo in termini di prestazioni. L’uso implicito del two-way data binding di Angular 1.x incide sulle prestazioni dal momento che è attivo anche quando il suo utilizzo non è strettamente necessario.


---


Angular 2 non ha il two-way data binding predefinito, come accadeva nella versione 1.x. Tuttavia possiamo attivarlo utilizzando la sintassi mostrata nel seguente esempio:
```html
Inserisci un numero:
<input type="number" [(ngModel)]="numero" />
<div>
    Il doppio di {{numero}} &egrave; {{numero * 2}}
</div>
```


---


Esercizi
========


----


Caratteri maiuscoli
-------------------
Scrivere un'applicazione angular che dato un testo in input visualizzi
in tempo reale la lista dei suoi caratteri trasformati in maiuscolo.


----


Angular TO-DO
-------------
Realizzare un'applicazion con angular per la gestione di cose da fare.

I task siano inseribili scrivendo in una casella di testo e premendo
invio.

Ogni task potrà essere "checkato" e in tal caso il testo verrà sbarrato.

Ogni task avrà un proprio link per la sua cancellazione.

I task devono apparire con l'ultimo inserimento per primo.

alla fine deve essere presente una stringa di testo che indichi quanti
task sono stati svolti (checkati) sul totale (es. 2/4 task eseguiti)
