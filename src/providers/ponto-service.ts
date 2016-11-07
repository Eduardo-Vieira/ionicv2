import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PontoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PontoService {
  data: any;
  constructor(public http: Http) {
    this.data = null;
  }
  // chama dados
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://wrsolucoesinformatica.com/server-ponto.php?tx_matricula=128986-1A&tx_mes_periodo=09&tx_ano_periodo=2016')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
