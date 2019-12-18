# DOM

---

## Cos'è il DOM

Uno dei concetti fondamentali alla base del funzionamento dei browser è il DOM, acronimo
per Document Object Model. Un parolone per indicare nient’altro che una qualsiasi pagina web.
Quando visitiamo una pagina con un browser quest’ultimo crea una rappresentazione virtuale del
documento. La pagina viene trasformata in una struttura ad albero e poi salvata in memoria. Ogni
elemento HTML diventa come una foglia, legata ad un ramo genitore. Per toccare la cosa con mano
considera una semplice pagina HTML:

---

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
<title>A super simple title!</title>
</head>
<body>
<h1>A super simple web page!</h1>
</body>
</html>
```

---

Quando il markup viene interpretato dal browser il risultato è un Document Object Model che
rappresenta l’HTML con una struttura ad albero. In testa c’è document detto root element, seguito
dall’elemento html. L’elemento html contiene un head che a sua volta racchiude title. Poi segue
body che contiene a sua volta un h1. Ogni elemento HTML è rappresentato da un tipo specifico (detto
anche interface dell’elemento) che può contenere testo o altri elementi innestati:

---

```javascript
document (HTMLDocument)
|
| --> html (HTMLHtmlElement)
|
| --> head (HtmlHeadElement)
| |
| | --> title (HtmlTitleElement)
| | --> text: "A super simple title!"
|
| --> body (HtmlBodyElement)
| |
| | --> h1 (HTMLHeadingElement)
| | --> text: "A super simple web page!"
```

---

Tutti gli elementi HTML discendono da [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) che è l’interfaccia primordiale per gli elementi
HTML ma la maggior parte degli stessi è “specializzata”. Per scoprire di che tipo è un particolare
elemento HTML puoi ispezionarne a ritroso il suo prototype. L’elemento h1 per esempio:

---

```javascript
document.querySelector('h1').__proto__
è un HTMLHeadingElement:
HTMLHeadingElement {constructor: ƒ, Symbol(Symbol.toStringTag): "HTMLHeadingElement"}
Mentre HTMLHeadingElement discende a sua volta da HTMLElement:
document.querySelector('h1').__proto__.__proto__
```

---

A questo punto potrebbe sorgere qualche dubbio sulla differenza tra
document e window, anche se nei capitoli precedenti abbiamo visto che Window si riferisce al browser
stesso. Mentre document è la pagina HTML su cui operiamo in quel momento, ovvero il documento
corrente. L’interfaccia document mette a disposizione una serie di metodi, tra cui querySelector()
che serve a selezionare un qualsiasi elemento nella pagina:

---

```javascript
document.nomeMetodo();
```

è quella più comune e la vedremo spesso nelle prossime sezioni. Oltre a querySelector() per
selezionare elementi HTML abbiamo a disposizione anche altri metodi utili:

---

```javascript
// ritorna un singolo elemento
document.getElementById("testimonials");

// ritorna una HTMLCollection
document.getElementsByTagName("p");

// ritorna una NodeList
document.querySelectorAll("p");
```

---

Gli elementi HTML non solo possono essere selezionati ma è possibile interagire con essi e cambiarne
lo stato. Per esempio potresti voler leggere o cambiare il contenuto di un qualsiasi elemento HTML:

```javascript
// Lettura o scrittura
document.querySelector("h1").innerHtml;
document.querySelector("h1").innerHtml = ""; // Oops!
```

---

Comunque il concetto più importante da
tenere presente è che in genere lavoriamo con quattro tipi di nodi principali nel DOM:

- document: il nodo radice (nodeType 9)
- nodi di tipo Element: i tag HTML veri e propri (nodeType 1)
- nodi di tipo attribute: le proprietà (attributi) di ogni elemento HTML
- nodi di tipo Text: il contenuto testuale di un elemento (nodeType 3)

---

```javascript
// Ritorna true or false
document.querySelector("a").hasAttribute("href");

// Ritorna il testo di un attributo oppure null
document.querySelector("a").getAttribute("href");

// Configura l'attributo desiderato
document.querySelector("a").setAttribute("href", "someLink");
```

---

Prima ho detto che il DOM è una struttura ad albero. E qusto si riflette anche sulle “parentele”
degli elementi HTML. Ogni elemento infatti può avere dei genitori e dei figli che possiamo scoprire
ispezionando le opportune proprietà:

---

```javascript
// Ritorna una HTMLCollection
document.chidren;

// Ritorna una NodeList
document.chidNodes;

// Ritorna un Node
document.querySelector("a").parentNode;

// Ritorna un elemento
document.querySelector("a").parentElement;
```

---

Finora hai visto come selezionare ed interrogare gli elementi HTML. E per fabbricarne di nuovi? Per
creare nuovi nodi Element il browser ci mette a disposizione l’API nativa createElement:

```javascript
var heading = document.createElement("h1");
```

---

Mentre per creare nodi di testo usiamo createTextNode:

```javascript
var text = document.createTextNode("Hello world");
```

---

I due nodi possono essere combinati insieme “appendendo” il testo all’interno dell’elemento HTML
con appendChild. E per finire possiamo agganciare il nuovo elemento completo di testo sul body
della pagina:

```javascript
var heading = document.createElement("h1");
var text = document.createTextNode("Hello world");
heading.appendChild(text);
document.body.appendChild(heading);
```

---

## Esplorare il DOM

I nodi del DOM hanno alcuni metodi per muoversi all'interno della struttura ad
albero che li contiene.

- childNodes() restituisce un array con tutti i nodi figli.
- firstChild() restituisce il primo figlio.
- nextSibling() restituisce il fratello successivo.
- previousSibling() restituisce il fratello precedente.
- lastChild() restituisce l'ultimo figlio.
- parentNode() restituisce il nodo genitore.

---

## Modificare elementi

Le modifiche principali che si possno applicare ad un nodo possono riguardare
il suo contenuto o il suo stile.

- innerHTML è un attributo modificabile che contiene l'html all'interno del nodo.
- innerText è un attributo modificabile che contiene il testo (privato dei tag
  HTML) all'interno del nodo.
- la proprietà style di un nodo è un oggetto contenente tutte le proprietà
  impostabili tramite css (es. width, color, fontFamily, position, left, etc...)

---

## Layout

Esistono delle funzioni che ci aiutano a determinare le attuali dimensioni e
posizione di un elemento.

- getBoundingClientRect() restituisce un oggetto clientRect contenente le
  proprietà height, width, left, right, top, bottom (relativi all'angolo in alto
  a sinistra dello schermo.
- pageXOffset e pageYOffset sono variabili globali contenenti gli attuali valori
  dello scroll della pagina.

---

# ESEMPI PRATICI

---

## Quadrato rosso

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

---

## Poesia

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

---

## Dimensioni

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

Generare tabelle HTML con JavaScript

```javascript
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>height</th>
      <th>place</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monte Falco</td>
      <td>1658</td>
      <td>Parco Foreste Casentinesi</td>
    </tr>
    <tr>
      <td>Monte Falterona</td>
      <td>1654</td>
      <td>Parco Foreste Casentinesi</td>
    </tr>
  </tbody>
</table>
```

---

# ESERCIZI

---

## Scala

scrivere e testare una funzione makeStairs(n, stepW, stepH, color) che
restituisca un elemento del DOM contentente una scala di n scalini, dove ogni
scalino ha altezza stepH e la larghezza del primo scalino sia stepW, mentre il
successivo sarà largo il doppio, il seguente il triplo e così via.
color indica il colore sotto forma di stringa esadecimale (es. #3c3c3c).

[Soluzione](https://jsfiddle.net/piero80/t3eepx4w/)

---

## Scacchiera Plus

Scrivere e testare una funzione makeChecker(w, h, cellW, cellH, cellColor1, cellColor2)
che crei una scacchiera w x h dove ogni cella sarà un elemento div con lo sfondo
colorato. cellW e cellH saranno la larghezza e l'altezza delle singole celle,
mentre cellColor1 e cellColor2 sono i colori delle celle da alternare.

[Soluzione](https://jsfiddle.net/piero80/3jm4scp5/)
