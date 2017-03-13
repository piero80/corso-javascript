DOM
===


----


Cos'è il DOM
------------
Il Document Object Model è una struttura dati ad albero che rappresenta il
contenuto di un documento strutturato.

In particolare tale modello è utilizzato nei browser per rappresentare il
contenuto delle pagine web.

Nel browser viene fornito l'oggetto document, utilizzabile in JavaScript che
corrisponde alla radice del DOM, ovvero il nodo in cima all'albero o, vedendola
in un altro modo, l'elemento che contiene tutto e non è contenuto da nulla.
- Platone


----


Esplorare il DOM
----------------
I nodi del DOM hanno alcuni metodi per muoversi all'interno della struttura ad
albero che li contiene.

- childNodes() restituisce un array con tutti i nodi figli.
- firstChild() restituisce il primo figlio.
- nextSibling() restituisce il fratello successivo.
- previousSibling() restituisce il fratello precedente.
- lastChild() restituisce l'ultimo figlio.
- parentNode() restituisce il nodo genitore.

----


Trovare elementi specifici
--------------------------
In molti casi muoversi manualmente nel DOM risulta poco pratico: cambiando la
struttura spesso si deve cambiare l'ordine dei movimenti, inoltre anche un
semplice spazio tra i tag verrà considerato come un nodo di testo.

In JavaScript possiamo però servirci di alcune funzioni, definite nell'oggetto
document, per riferirci ad elementi specifici.

- getElementsByTagName(name) restituisce un array con tutti gli elementi di tipo
  name
- getElementById(id) restituisce l'elemento con l'id specificato.
- getElementsByClassName(class) restituisce un array con tutti gli elementi
  aventi la classe specificata.
- querySelector(selector) restituisce il primo elemento identificato dal
  selettore css specificato.
- querySelectorAll(selector) restituisce un array con tutti gli elementi
  identificati dal selettore css specificato.


----


Modificare il DOM
-----------------
I singoli nodi hanno anche dei metodi per apportare delle modifiche al DOM.
tra i più utili troviamo:

- removeChild(node) rimuove il nodo specificato dal DOM.
- appendChild(node) aggiunge il nodo specificato come ultimo figlio.
- insertBefore(node1, node2) inserisce node1 prima di node2.
- replaceChild(node1, node2) sostituisce node2 con node1.


----


Creare elementi
---------------
É possibile creare elementi con i metodi dell'oggetto document

- createElement(type) crea un nodo del tipo specificato.
- createTextNode(text) crea un elemento di testo con il contenuto specificato.


----


Modificare elementi
-------------------
Le modifiche principali che si possno applicare ad un nodo possono riguardare
il suo contenuto o il suo stile.

- innerHTML è un attributo modificabile che contiene l'html all'interno del nodo.
- innerText è un attributo modificabile che contiene il testo (privato dei tag
  HTML) all'interno del nodo.
- la proprietà style di un nodo è un oggetto contenente tutte le proprietà
  impostabili tramite css (es. width, color, fontFamily, position, left, etc...)


----


Layout
------
Esistono delle funzioni che ci aiutano a determinare le attuali dimensioni e
posizione di un elemento.

- getBoundingClientRect() restituisce un oggetto clientRect contenente le
  proprietà height, width, left, right, top, bottom (relativi all'angolo in alto
  a sinistra dello schermo.
- pageXOffset e pageYOffset sono variabili globali contenenti gli attuali valori
  dello scroll della pagina.


----


Attributi
---------
É possibile leggere o scrivere gli attributi di un elemento del DOM

- getAttribute(attr) restituisce il contenuto dell'attributo specificato
- setAttribute(attr, value) assegna il valore specificato all'attributo.


---


ESEMPI PRATICI
==============


----


Quadrato rosso
--------------
```javascript
var box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "red";

document.body.appendChild(box);
```

<pre>
<div style="width:100px;height:100px;background-color:red;"></div>
</pre>


----


Poesia
------
```javascript
var title = document.createElement("h2");
title.innerText = "Soldati";
var text = document.createElement("p");
text.innerText = "Si sta come\nd'autunno\nsugli alberi\nle foglie";

document.body.appendChild(title);
document.body.appendChild(text);
```

<pre>
<h2>Soldati</h2>
<p>Si sta come
d'autunno
sugli alberi
le foglie</p>
</pre>


----


Dimensioni
----------
```javascript
var box = document.createElement("div");
box.style.width = "100px";
box.style.height = "50px";
box.style.backgroundColor = "blue";
document.body.appendChild(box);
var rect = box.getBoundingClientRect();
var size = document.createElement("span");
size.innerText = "width: " + rect.width + " - height: " + rect.height;
document.body.appendChild(size);
```

<pre>
<div style="width:100px;height:50px;background-color:blue"></div>
<span>width: 100 - height: 50</span>
</pre>


---


ESERCIZI
========


----


Scala
-----
scrivere e testare una funzione makeStairs(n, stepW, stepH, color) che
restituisca un elemento del DOM contentente una scala di n scalini, dove ogni
scalino ha altezza stepH e la larghezza del primo scalino sia stepW, mentre il
successivo sarà largo il doppio, il seguente il triplo e così via.
color indica il colore sotto forma di stringa esadecimale (es. #3c3c3c).

----
[Soluzione](https://jsfiddle.net/piero80/t3eepx4w/)

Scacchiera Plus
---------------
Scrivere e testare una funzione makeChecker(w, h, cellW, cellH, cellColor1, cellColor2)
che crei una scacchiera w x h dove ogni cella sarà un elemento div con lo sfondo
colorato. cellW e cellH saranno la larghezza e l'altezza delle singole celle,
mentre cellColor1 e cellColor2 sono i colori delle celle da alternare.

Aiuto: per affiancare dei div su una stessa linea utilizzare l'attributo css
float: left.

per mandare a capo un'insieme di div floated si può inserire un div vuoto
avente la proprietà css clear: both.

[Soluzione](https://jsfiddle.net/piero80/3jm4scp5/)
