EVENTI
======


----


La necessità degli eventi
-------------------------
Per alcuni tipi di interazione con il programma, non possiamo determinare a
priori l'ordine di avvenimento. Si pensi all'utilizzo del mouse e della
tastiera o anche il sopraggiungere di dati da un server esterno.

Nasce dunque la necessità di un sistema di eventi per poter dire al programma
che cosa fare in caso essi si verifichino.

- controllo continuo
- controllo periodico di una coda
- event handlers

----


Event Handlers
--------------
In JavaScript è possibile definire degli event handlers ovvero funzioni che
vengono eseguite al verificarsi di un evento.
Abbiamo due modi di definire gli eventhandlers:

```javascript
element.onclick = functionName;

```

```javascript
element.addEventListener("click", function() {
  console.log("click");
});
```

Il primo argomento indica il tipo di evento da gestire, in questo caso  il click
del mouse.

Se non viene specificato alcun elemento a cui "attaccare" l'event listener esso
verrà automaticamente associato all'oggetto window,


----


Rimuovere un event listener
---------------------------
È possibile rimuovere un event listener già registrato:

```javascript
function eventHandler() {
  // fai qualcosa
};
element.addEventlistener("evento", eventHandler);
element.removeEventListener("evento", eventHandler);
```

Da notare che tale metodo richiede il  nome dell'evento e la funzione stessa
che gestiva l'evento.


----


L'oggetto evento
----------------
Quando viene invocata la funzione che gestisce un determinato evento gli viene
passato come argomento un oggetto contentente informazioni sull'evento stesso.

Per esempio clientX e clientY conterranno le coordinate del mouse al verificarsi
di un evento

```javascript
addEventlistener("mousemove", function (e) {
  console.log(e.clientX);
});
```

[Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)


----


Propagazione degli eventi
-------------------------
Quando un evento è originato da un elemento, esso si propaga al nodo genitore,
poi al genitore del genitore e così via fino all'oggetto window.

per ogni nodo che ha definito un event listener per quell'evento, esso verrà
eseguito.


----


Fermare la propagazione
-----------------------
dato un evento si può fermare la sua propagazione ed impedire che altri
eventuali event handler definiti nei genitori possano essere eseguiti.

Per farlo ci si serve del metodo stopPropagation().

Se ad esempio abbiamo 2 elementi cliccabili uno dentro l'altro e vogliamo che un
click sul più interno non causi un evento click anche sul genitore, possiamo
procedere così:

```javascript
figlio.addEventListener("click", function (e) {
  // fai qualcosa
  e.stoppropagation();
});
```


----


Comportamento di default
------------------------
Per alcuni elementi e dati alcuni eventi nel browser sono definiti dei
comportamenti di default.

Per esempio il click di un link caricherà un nuovo indirizzo, muovere il mouse
quando il pulsante sinistro è premuto causerà un trascinamento, etc...

Talvolta questi comportamenti possono ostacolarci ed è possibile sopprimerli
utilizzando event.preventDefault();


----


Target
------
Per sapere da quale elemento è stato generato un evento si può utilizzare la
proprietà target che conterrà il nodo del dom dove esso ha avuto origine.

```javascript
// HTML
<button>A</button>
<button>B</button>
<button>C</button>
// JS
document.body.addEventListener("click", function(event) {
  if (event.target.nodeName == "BUTTON")
    console.log("Clicked", event.target.textContent);
});
```


---


ESERCIZI
========


----


red - blue
----------
Creare due bottoni "red" e "blue" che se cliccati cambiano lo sfondo della pagina.


----
[Soluzione](https://jsfiddle.net/piero80/gh4cfoyy/)

Disegno
-------
Creare una pagina dove si possa disegnare con il mouse.

- quando si tiene cliccato deve disgnare
- se non si clicca no!
- non importa che la linea sia continua, va bene una semplice successione di
  punti.

[Soluzione](https://jsfiddle.net/piero80/padwhps9/)
