# WELCOME ON BOARD!

## ;D

---

# CHI SONO

---

# PIETRO COLANGELO

Front-end Developer

---

## Link Personali

- [pcolangelo/cv](https://www.linkedin.com/in/pietrocolangelo/)<br>

---

# COSÈ JAVASCRIPT

Iniziamo....

---

JavaScript è un linguaggio di programmazione (detto anche di scripting). Tutti gli sviluppatori
conoscono JavaScript in qualche misura. Da semplici animazioni sulle pagine web ad interazioni
complesse, tutti ci siamo trovati almeno una volta ad utilizzarlo. JavaScript è un linguaggio di
programmazione nato in origine per il web. Brendan Eich, il creatore di JavaScript, si ritrovò nel 1995
a lavorare per Netscape.

---

## A cosa serve JavaScript?

In poche parole: immagina di avere un bottone su una pagina
web. Dopo aver premuto il bottone vuoi che l’utente veda un altro elemento nella pagina, che prima
era nascosto. Come pensi si possa ottenere un effetto del genere? Con JavaScript! In altre parole, ogni
pagina web costruita con puro HTML è inanimata (escludendo le animazioni CSS). Per aggiungere
effetti ed interazioni è necessario lanciare JavaScript nella mischia.
Se dovessi rispondere alla domanda
“ma a cosa serve davvero JavaScript?” direi che il motivo principale è uno: la possibilità di creare o
rimuovere elementi HTML dinamicamente.

---

## Cosa posso costruire con JavaScript?

JavaScript è nato per aggiungere interazioni abbastanza innocenti sulle pagine web (clicco qui e
succede una cosa 40px più avanti). Ma dai quei tempi è cambiato molto. JavaScript viene usato ora
per costruire interfacce web interattive di altissimo livello: le Single Page Application. Le Single
Page Application sono applicazioni web costruite con JavaScript ed offrono dei benefici per l’utente
(se costruite in modo adeguato). Ma come è strutturata una Single Page Application? Le Single Page
Application non sono altro che un singolo file HTML. Considera questo banale esempio:

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>titolo SPA</title>
<link href="main.css" rel="stylesheet"></head>
<body>
<div id="app">
</div>
<script type="text/javascript"
src="main.4a4c.js"
async="">
</script>
<script type="text/javascript"
src="vendors~main.613f.js"
async="">
</script>
</html>
```

---

Il file HTML d’ingresso è un index.html che carica uno o più file (detti anche bundle) JavaScript. Da
quel momento in poi è JavaScript a prendere le redini. Una Single Page Application quindi è in parole
povere un’applicazione dinamica il cui contenuto viene generato con JavaScript, un linguaggio ormai
maturo ed in rapidissima crescita.

---

## origini

Creato nel 1995 come estensione dell'HTML per Netscape Navigator 2.0, JavaScript, in genere abbreviato in "JS" nacque fondamentalmente per manipolare documenti HTML e per la validazione di form (moduli).
Prima di arrivare al nome attuale, era _Mocha_.
Avviate le versioni beta, è stato ufficialmente chiamato _LiveScript_ e, infine, dopo il rilascio di Sun Microsystems, è stato battezzato con il nome con cui è conosciuta oggi: _JavaScript_

---

## Browser e compatibilità

Inizialmente era solo Netscape, successivamente si sono aggiunti alla fila numerosi browser.
Essendo un linguaggio interpretato dal client (browser), va tenuto in considerazione che il codice scritto potrebbe essere interpretato diversamente da client a client.
Questo era un problema piuttosto sentito durante le prime generazioni di browser, in particolare con Internet Explorer.

---

Attualmente, tuttavia, tutti i maggiori browser sono ben allineati allo standard _ECMAScript_,
esistono anche script e librerie che permettono di sistemare i _disallineamenti_ più noti.
Ad esempio:

- Modernizr
- jQuery
- html5shiv

---

## cosa è ecmascript?

Nel novembre 1996, Netscape consegna JavaScript ad _Ecma International_ per il lavoro di standardizzazione e per fissare le specifiche. Nasce lo standard ECMA-262.
La prima edizione viene adottata dall' _Ecma General Assembly_ nel giugno del 1997 e diverse edizioni sono state pubblicate da allora.
Il nome _ECMAScript_ fu un compromesso tra le organizzazioni coinvolte nella standardizzazione del linguaggio, specialmente Netscape e Microsoft le cui dispute dominavano la scena durante i primi tempi.<br>

---

L' ultima versione rilasciata di ECMAScript è la 7 (giugno 2016), tuttavia quella che viene maggiormante presa di riferimento, al momento, è la 6, rilasciata nel giugno 2015, che ha apportato notevoli cambiamenti, e che non è ancora del tutto supportata dalla maggior parte dei browser.<br>
In gergo viene chiamata ES6 o anche ES2015.

---

Tra i vari link e tool di riferimento, ne segnalo alcuni:

- [quirksmode](http://www.quirksmode.org/): incompatibilità tra browser
- [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm): specifiche formali del linguaggio
- [JS Compatibility Checker](http://jscc.info/): check multiplo di browser
- [ES 6 compatibility table](https://kangax.github.io/compat-table/es6/): tabella di compatibilità
- [ES 6 New Feature](http://es6-features.org/) new feature ES6

---

I browser di maggiore diffusione sono, al momento, secondo l' ordine di utilizzo:<br>
_Chrome_, _Firefox_, _Internet Explorer_, _Safari_, _Opera_.<br>
<br>
Per sviluppare, vengono generalmente preferiti _Chrome_ e _Firefox_, i quali integrano nativamente un maggiore supporto per lo sviluppo.

---

## javascript _non_ &nbsp;è java

A causa dei nomi simili, molti confondono _JavaScript_ con _Java_, ma nonostante entrambi abbiano una simile struttura lessicale (derivata dal _C_), NON sono la stessa lingua, ed hanno origini diverse.
Diverso da C, C# e Java, JavaScript è un linguaggio interpretato (vedi la parola "script"). Ciò significa che è necessario un "interprete". In quest caso, l'interprete è il client, ovvero il browser.

---

## client - server

JavaScript, come ormai chiaro, nasce per essere interpretato dai browser.
Da qui il modo di dire che è un linguaggio "client-side".
In informatica, e nel web soprattutto, le informazioni viaggiano solitamente da ambienti _server_ a* client* e viceversa.

---

## solo client quindi?

---

# no

---

## node.js

Dal 2009, con l' introduzione di _Nodejs_ (spesso chiamato semplicemente _Node_), il JavaScript è entrato a far parte dei linguaggi interpretati anche dal lato server, rendendolo a tutti gli effetti un linguaggio "_full-stack_".

---

## sincrono - asincrono

Molti linguaggi vengono letti ed eseguiti solamente secondo una modalità SINCRONA, ovvero: ogni riga di codice che segue, attende necessariamente l' esecuzione della precedente.

---

Javascript è un linguaggio che permette di seguire anche un comportamento ASINCRONO: proseguendo la lettura ed esecuzione del codice prosegue, lasciando lo svolgere in parallelo di azioni già iniziate.

---

Ciò può destare confusione ai primi approcci, tuttavia è una peculiarità che, se ben utilizzata, regala forza, flessibilità e velocità all' esecuzione del codice.
Scopriremo insieme durante il corso come gestire questo aspetto.

---

## il dom e gli oggetti

Nonostante il nome potenzialmente inquietante, il DOM non è una cosa brutta. È letteralmente il _Document Object Model_, ovvero: l' albero del documento HTML.<br>
;)
<br>
JavaScript è un linguaggio orientato agli oggetti, e tra i suoi oggetti principali troviamo gli elementi dell' HTML.
Avremo a che fare spesso con il DOM HTML ed i suoi oggetti.

---

## Hoisting

<br>
“Prima che il vostro codice venga eseguito, il JS-Engine avrà già riservato dello spazio in memoria per le vostre variabili e le vostre funzioni. Nel frattempo, tutto viene settato al valore undefined.”

---

## Undefined

Si tratta di un tipo di dato particolare in JS.

```javascript
var a;
if(a === undefined)	//returns true
```

MAI settare a mano qualsiasi cosa ad “undefined”, anche se è possibile, perché lo vogliamo riservare al JS-Engine per poterci accorgere di errori nel codice.

---

## Execution Context

E’ un concetto, che rappresenta l’ambiente nel quale un dato spezzone di codice viene eseguito. Nel caso specifico in cui, ad esempio, una variabile venga inizializzata al di fuori da ogni funzione, si dice che si tratta di una variabile globale e che il suo Execution Context è quello globale (Global Execution Context).

---

## Outer Environment

Dato un blocco di codice o una funzione, l’OE è l’ambiente immediatamente superiore a quel dato codice. Esempio:

```javascript
var a = 2; //la variabile a è nell’ outer environment della funzione test
function test() {
  var b = 3;
}
```

---

## Come viene eseguito il codice JS

Il funzionamento del JS-Engine è diviso in due grandi fasi (phase):
CREATION PHASE

- Viene settato il Global Object (nel browser è window)
- Viene settato this
- Viene settato l’Outer Environment
  Hoisting
  EXECUTION PHASE
- Il vostro codice viene eseguito linea per linea, tradotto in un linguaggio più a basso livello.

---

## SINGLE-THREADED EXECUTION

Vuol dire che il codice viene eseguito un comando alla volta. Questo tipo di esecuzione è chiamata Esecuzione sincrona. JS è sincrono.

---

## INVOCAZIONE:

“Esecuzione di una funzione.”

Ogni qualvolta una funzione viene invocata, un nuovo “Execution context” viene creato, e messo in uno stack (pila). Quando si arriva alla fine della funzione, il suo Execution context viene rimosso (POP) dallo stack.

---

## LEXICAL ENVIRONMENT:

Dove una funzione o una variabile sono scritte nel codice.

---

## SCOPE:

Dove una variabile è raggiungibile nel codice. Quando si parla di scope, bisogna specificare a cosa si riferisce, altrimenti la frase è priva di significato.
Es: “Lo scope della variabile A…”

---

## framework e librerie

In seguito alla complessità degli attuali utilizzi di JavaScript, sono nati in supporto svariati framework e librerie, che permettono di velocizzare la costruzione di codice funzionante e già testato.<br>
Tra questi citiamo alcuni dei più conosciuti:

- jQuery
- Underscore
- Angular
- React
- Meteor
- Etc...

---

# PROGRAMMA

---

## 1 - Introduzione a Javascript

- Presentazione
- Storia del Javascript
- I browser web e la compatibilità
- ECMAScript
- Client e server
- Linguaggio sincrono e asincrono
- Accenno DOM ed oggetti
- Accenno framework e librerie
- Accenno sulla console di sviluppo

---

## 2 - Il linguaggio

- Inserire il codice in una pagina
- Includere file Javascript esterni
- Sintassi standard
- Hello World!

---

## 3 - Operatori ed eventi

- Gli operatori
- Gli eventi
- L'istruzione this
- Riferimento all'ID di un elemento HTML

---

## 4 - Programmazione

- Oggetti in Javascript
- Le proprietà ed i metodi

---

## 5 - Variabili, costanti e tipi di dato

- Assegnazione dei nomi
- Parole riservate Javascript
- Variabili locali e globali
- Le costanti
- Tipi di dato

---

## 6 - Le funzioni

- Richiamare una funzione
- Impostare il return in una funzione
- Funzioni e parametri
- Callback
- Funzioni ricorsive

---

## 7 - Istruzioni condizionali

- Enunciato if ... else if ... else
- Operatore condizionale ternario
- Enunciato switch

---

## 8 - Istruzioni di iterazione

- Ciclo for
- Ciclo while
- Ciclo do while
- Nidificare due cicli
- Le istruzioni break e continue

---

## 9 - Gli Array e l'oggetto String

- Dichiarazione e gestione dei dati
- Proprietà e metodi
- Ciclare un Array
- Stringhe e Array
- Proprietà e metodi
- Sequenze e funzioni di escape
- Le espressioni regolari (cenni)

---

## 10 - Angular 8

- Analisi del Framework
- Angular Cli

---

## 11 - React (la libreria di Facebook)

- Introduzione a React
- Le classi

---

## Perchè studiare Javascript

JavaScript ha una reputazione di linguaggio “giocattolo” ma negli ultimi anni ha fatto passi da
gigante. Continuare ad ignorare JavaScript o trattarlo come un linguaggio di serie B è una mossa
controproducente. Sembra una frase fatta ma JavaScript sta diventando sempre di più un linguaggio
universale. Non possiamo ancora dire se questo sia un bene o un male. Ma JavaScript è diventato
un requisito di base per qualsiasi posizione di Web Developer (o Front End Developer).

---

Studiare JavaScript non significa soltanto conoscere variabili e funzioni. Lo sviluppatore che vuole
ambire a padroneggiare il linguaggio deve sapere non solo come usarlo ma anche come funziona
internamente. E’ fondamentale per lo sviluppatore JavaScript approfondire le parti più complicate
del linguaggio, ed è quello che faremo in questo corso.

---

# THAT'S ALL FOLKS

---

# DAJE!

## ;)
