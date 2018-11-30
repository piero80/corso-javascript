# ES6



----


## Features ES6

Es6 é l'ultima versione delle specifiche di Javascript, pubblicata a Giugno 2015, nota come ES6 o EcmaScript2015.
Non tutte le funzionalitá sono supportate dai Javascript Engine piú diffusi dei Browser.
Possiamo fin da ora utilizzare le nuove funzionalitá Es6 attraverso i transpiler  (Babel, Traceur, TypeScript).

----


## Let instead of Var

Let é Block Scope, Var é Function Scope.
Let é una variabile che esiste all'interno del blocco di codice dove é dichiarata.
Var é una variabile che esiste anche fuori il blocco, all'interno della funzione.

----


## Destructuring 

La nuova sintassi es6 rende piú facile creare variabili basati su oggetti e array.
Una funzione ritorna un oggetto con piu proprietá.

```javascript
return {principal, years, rate, monthlyPayment, monthlyRate};
let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate);
```
----


## Arrow Function




----


## Modules

Una determinata risorsa sarà identificata da un URL base.

Es. http://myserver.com/api/users


----


## Classes

La convenzione è quella di utilizzare i metodi standard HTTP:

GET: per ottenere le risorse dal server

POST: per aggiungere una nuova risorsa

PUT: per modificare una risorsa esistente

DELETE: per eliminare una risorsa esistente


----


## Metodi su collezioni

http://myserver.com/api/users

GET: ottiene la lista di tutti gli users

POST: aggiunge un nuovo user alla collezione

PUT: sostituisce l'intera collezione con una nuova lista

DELETE: elimina l'intera collezione


----


## Metodi sugli elementi

http://myserver.com/api/users/id

GET: ottiene la rappresentazione dell'user specificato

POST: (raro) aggiunge un elemento a user se esso è rappresentato come una collezione

PUT: sostituisce l'elemento indicato e se non esiste lo crea

DELETE: elimina l'elemento indicato


---


# EXPRESS



----


## nodejs
Implementazione di JavaScript indipendente dal browser particolarmente
ottimizzata per la creazione di applicativi server.


----


## npm
Tool per la gestione delle librerie esterne all'interno di un progetto nodejs.
```
npm init // crea un file package.json ed inizializza il progetto
```

```
npm install --save dipendenza // installa la dipendenza nel progetto
```

```
npm update // aggiorna tutte le dipendenze
```


----


## Installare express
```
npm init
npm install --save express body-parser
```
Body parser è un componente aggiuntivo per express che permette di interpretare
dati in formato url (quindi potremo leggere agevolmente i dati di un form
inviati tramite ajax)


----


## server.js
```javascript
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();

router.get('/test/:id', function (req, res) {
  var id = req.params.id;
  res.send("ciao");
});

app.use('/api', router);
app.listen(8080);
```
```
http://localhost:8080/api/test/123
```


----


## servire json
```javascript
router.get('/test', function (req, res) {
  res.json({
    message: "ciao"
  });
});
```
il metodo json di res converte automaticamente gli oggetti javascript in json
corretto.


----


## leggere i dati POST e PUT
```javascript
reouter.post('/test', function (req, res) {
  var nome = req.body.nome;
  res.send();
});
```


---


# ESERCIZI


----


## ciao
Realizzare un piccolo server che alla richiesta /ciao/nome visualizzi una pagina
web con un titolo h1 contenente ciao Nome (Iniziale maiuscola), dove nome può
essere un nome qualunque.


----


## REST API per todo
Realizzare una API REST per l'applicazione todo che possa:

- ottenere la lista dei task
- aggiungere un task
- modificare un task (se non esiste lo crea)
- eliminare un task

per semplicità si conservino i task in un array di oggetti javascript ognuno dei
quali avrà un campo univoco id e un campo text.
