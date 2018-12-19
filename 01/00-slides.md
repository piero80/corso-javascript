WELCOME ON BOARD!
================
;D
---


---


CHI SONO
========


----


PIETRO COLANGELO
===========

Front-end Developer


----


Link Personali
--------------
* [pcolangelo/cv](https://www.linkedin.com/in/pietrocolangelo/)<br>


---


COSA È JAVASCRIPT
=================

Iniziamo....


---


origini
-------

Creato nel 1995 come estensione dell'HTML per Netscape Navigator 2.0, JavaScript, in genere abbreviato in "JS" nacque fondamentalmente per manipolare documenti HTML e per la validazione di form (moduli).
Prima di arrivare al nome attuale, era *Mocha*.
Avviate le versioni beta, è stato ufficialmente chiamato *LiveScript* e, infine, dopo il rilascio di Sun Microsystems, è stato battezzato con il nome con cui è conosciuta oggi: *JavaScript*


---


Browser e compatibilità
---------------------

Inizialmente era solo Netscape, successivamente si sono aggiunti alla fila numerosi browser.
Essendo un linguaggio interpretato dal client (browser), va tenuto in considerazione che il codice scritto potrebbe essere interpretato diversamente da client a client.
Questo era un problema piuttosto sentito durante le prime generazioni di browser, in particolare con Internet Explorer.


---


Attualmente, tuttavia, tutti i maggiori browser sono ben allineati allo standard *ECMAScript*,
esistono anche script e librerie che permettono di sistemare i *disallineamenti* più noti.
Ad esempio:

* Modernizr
* jQuery
* html5shiv


----


cosa è ecmascript?
------------------

Nel novembre 1996, Netscape consegna JavaScript ad *Ecma International* per il lavoro di standardizzazione e per fissare le specifiche. Nasce lo standard ECMA-262.
La prima edizione viene adottata dall' *Ecma General Assembly* nel giugno del 1997 e diverse edizioni sono state pubblicate da allora.
Il nome *ECMAScript* fu un compromesso tra le organizzazioni coinvolte nella standardizzazione del linguaggio, specialmente Netscape e Microsoft le cui dispute dominavano la scena durante i primi tempi.<br>


----


L' ultima versione rilasciata di ECMAScript è la 7 (giugno 2016), tuttavia quella che viene maggiormante presa di riferimento, al momento, è la 6, rilasciata nel giugno 2015, che ha apportato notevoli cambiamenti, e che non è ancora del tutto supportata dalla maggior parte dei browser.<br>
In gergo viene chiamata ES6 o anche ES2015.


----


Tra i vari link e tool di riferimento, ne segnalo alcuni:
* [quirksmode](http://www.quirksmode.org/): incompatibilità tra browser
* [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm): specifiche formali del linguaggio
* [JS Compatibility Checker](http://jscc.info/): check multiplo di browser
* [ES 6 compatibility table](https://kangax.github.io/compat-table/es6/): tabella di compatibilità
* [ES 6 New Feature](http://es6-features.org/) new feature ES6


----


I browser di maggiore diffusione sono, al momento, secondo l' ordine di utilizzo:<br>
*Chrome*, *Firefox*, *Internet Explorer*, *Safari*, *Opera*.<br>
<br>
Per sviluppare, vengono generalmente preferiti *Chrome* e *Firefox*, i quali integrano nativamente un maggiore supporto per lo sviluppo.


---


javascript *non* &nbsp;è java
---------------------

A causa dei nomi simili, molti confondono *JavaScript* con *Java*, ma nonostante entrambi abbiano una simile struttura lessicale (derivata dal *C*), NON sono la stessa lingua, ed hanno origini diverse.
Diverso da C, C# e Java, JavaScript è un linguaggio interpretato (vedi la parola "script"). Ciò significa che è necessario un "interprete". In quest caso, l'interprete è il client, ovvero il browser.


---


client - server
---------------

JavaScript, come ormai chiaro, nasce per essere interpretato dai browser.
Da qui il modo di dire che è un linguaggio "client-side".
In informatica, e nel web soprattutto, le informazioni viaggiano solitamente da ambienti *server* a* client* e viceversa.


----


solo client quindi?
-------------------


----


no
===


----

node.js
------
Dal 2009, con l' introduzione di *Nodejs* (spesso chiamato semplicemente *Node*), il JavaScript è entrato a far parte dei linguaggi interpretati anche dal lato server, rendendolo a tutti gli effetti un linguaggio "*full-stack*".


---


sincrono - asincrono
--------------------

Molti linguaggi vengono letti ed eseguiti solamente secondo una modalità SINCRONA, ovvero: ogni riga di codice che segue, attende necessariamente l' esecuzione della precedente.


----


Javascript è un linguaggio che permette di seguire anche un comportamento ASINCRONO: proseguendo la lettura ed esecuzione del codice prosegue, lasciando lo svolgere in parallelo di azioni già iniziate.


----


Ciò può destare confusione ai primi approcci, tuttavia è una peculiarità che, se ben utilizzata, regala forza, flessibilità e velocità all' esecuzione del codice.
Scopriremo insieme durante il corso come gestire questo aspetto.


---


il dom e gli oggetti
--------------------

Nonostante il nome potenzialmente inquietante, il DOM non è una cosa brutta. È letteralmente il *Document Object Model*, ovvero: l' albero del documento HTML.<br>
;)
<br>
JavaScript è un linguaggio orientato agli oggetti, e tra i suoi oggetti principali troviamo gli elementi dell' HTML.
Avremo a che fare spesso con il DOM HTML ed i suoi oggetti.


---

Hoisting
--------------
<br>
“Prima che il vostro codice venga eseguito, il JS-Engine avrà già riservato dello spazio in memoria per le vostre variabili e le vostre funzioni. Nel frattempo, tutto viene settato al valore undefined.”


---


Undefined
------
Si tratta di un tipo di dato particolare in JS.
```javascript
var a;
if(a === undefined)	//returns true
```
MAI settare a mano qualsiasi cosa ad “undefined”, anche se è possibile, perché lo vogliamo riservare al JS-Engine per poterci accorgere di errori nel codice.


---


Execution Context
-------------------
E’ un concetto, che rappresenta l’ambiente nel quale un dato spezzone di codice viene eseguito. Nel caso specifico in cui, ad esempio, una variabile venga inizializzata al di fuori da ogni funzione, si dice che si tratta di una variabile globale e che il suo Execution Context è quello globale (Global Execution Context).



---


Outer Environment
------
Dato un blocco di codice o una funzione, l’OE è l’ambiente immediatamente superiore a quel dato codice. Esempio:
```javascript
var a = 2; //la variabile a è nell’ outer environment della funzione test
	function test() {
		var b = 3;
	}
```

---


Come viene eseguito il codice JS
------
Il funzionamento del JS-Engine è diviso in due grandi fasi (phase):
CREATION PHASE
* Viene settato il Global Object (nel browser è window)
* Viene settato this
* Viene settato l’Outer Environment
Hoisting
EXECUTION PHASE
* Il vostro codice viene eseguito linea per linea, tradotto in un linguaggio più a basso livello.

---

SINGLE-THREADED EXECUTION
------
Vuol dire che il codice viene eseguito un comando alla volta. Questo tipo di esecuzione è chiamata Esecuzione sincrona. JS è sincrono.


---

INVOCAZIONE: 
------
“Esecuzione di una funzione.”

Ogni qualvolta una funzione viene invocata, un nuovo “Execution context” viene creato, e messo in uno stack (pila). Quando si arriva alla fine della funzione, il suo Execution context viene rimosso (POP) dallo stack.


---

LEXICAL ENVIRONMENT: 
------
Dove una funzione o una variabile sono scritte nel codice.


---

SCOPE: 
------
Dove una variabile è raggiungibile nel codice. Quando si parla di scope, bisogna specificare a cosa si riferisce, altrimenti la frase è priva di significato.
Es: “Lo scope della variabile A…”

---

framework e librerie
--------------------

In seguito alla complessità degli attuali utilizzi di JavaScript, sono nati in supporto svariati framework e librerie, che permettono di velocizzare la costruzione di codice funzionante e già testato.<br>
Tra questi citiamo alcuni dei più conosciuti:

* jQuery
* Underscore
* Angular
* React
* Meteor
* Etc...


---


PROGRAMMA
=========


----


1 - Introduzione a Javascript
-----------

* Presentazione
* Storia del Javascript
* I browser web e la compatibilità
* ECMAScript
* Client e server
* Linguaggio sincrono e asincrono
* Accenno DOM ed oggetti
* Accenno framework e librerie
* Accenno sulla console di sviluppo


----


2 - Il linguaggio
-----------

* Inserire il codice in una pagina
* Includere file Javascript esterni
* Sintassi standard
* Hello World!


----


3 - Operatori ed eventi
-----------

* Gli operatori
* Gli eventi
* L'istruzione this
* Riferimento all'ID di un elemento HTML


----


4 - Programmazione
-----------

* Oggetti in Javascript
* Le proprietà ed i metodi


----


5 - Variabili, costanti e tipi di dato
-----------

* Assegnazione dei nomi
* Parole riservate Javascript
* Variabili locali e globali
* Le costanti
* Tipi di dato


----


6 - Le funzioni
-----------

* Richiamare una funzione
* Impostare il return in una funzione
* Funzioni e parametri
* Callback
* Funzioni ricorsive


----


7 - Istruzioni condizionali
-----------

* Enunciato if ... else if ... else
* Operatore condizionale ternario
* Enunciato switch


----


8 - Istruzioni di iterazione
-----------

* Ciclo for
* Ciclo while
* Ciclo do while
* Nidificare due cicli
* Le istruzioni break e continue


----


9 - Gli Array
-----------

* Dichiarazione e gestione dei dati
* Proprietà e metodi
* Ciclare un Array
* Stringhe e Array


----


10 - Analisi degli oggetti principali
-----------

* Document
* Window
* Location
* Math


----


11 - Gestione delle stringhe: l'oggetto String
-----------

* Proprietà e metodi
* Sequenze e funzioni di escape
* Le espressioni regolari (cenni)


----


12 - Putting all together
-----------

* Javascript ed i CSS
* Javascript e XML: Document Object Model
* Gestione degli errori col costrutto try ... catch ... finally
* Il formato dati JSON
* Oggetti in Javascript: introduzione alle classi


----


13 - jQuery
-----------

* Introduzione a jQuery
* I selettori di jQuery
* Gli eventi in jQuery


----


14 - Analisi di framework e librerie
-----------

* Angular.js
* Node.js
* Parallax.js
* Ember.js
* Ext JS
* Altri


---

THAT'S ALL FOLKS
================


---


DAJE!
=====
;)
---