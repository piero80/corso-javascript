# ANGULAR2 - SERVICES

----


## Services

I servizi in Angular2 sono utilizzati per fare chiamate Http al server.

----


## Http Requests

```javascript
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http
      .get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
      .map(response => response.json());
  }
}
```
Stiamo facendo una richiesta Http GET che espone un Observable. L'Http service ci ritorna una response sotto forma di stringa.
Per servirci dei dati dovremmo trasformarla in JSON.
In aggiunta possiamo avere Http.post(), Http.delete(), Http.update().

----
