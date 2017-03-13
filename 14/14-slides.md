# REST API



----


## Clitent/Server

Separare i ruoli: il server non sa come i dati verranno utilizzati ed il client non deve gestire l'interazione col database.

L'interfaccia di comunicazione tra client e server è l'unica cosa che deve rimanere stabile

----


## Mancanza di stato

Nessuo ndel client viene salvato nel server, ogni richiesta effettuata contiene tutto il necessario per ottenere una risposta.


----


## Cache

Si dovrebbe prevedere la possibilità che richieste identiche a breve distanza possano essere ottenute direttamente dalla cache, migliorando così velocità e scalabilità.


----


## Sistema stratificato

Non deve essere possibile per il client capire sa sia connesso al server principale o ad un intermediario fintanto che le risposte e l'interfaccia di comunicazione non cambi. In questo modo sarà possibile a monte progettare sistemi per la distribuzione delle richieste su più server.


----


## REST end point

Una determinata risorsa sarà identificata da un URL base.

Es. http://myserver.com/api/users


----


## Metodi HTTP

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
