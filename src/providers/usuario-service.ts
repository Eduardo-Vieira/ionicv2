import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsuarioService {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }
  
  enviar(frm_post){
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

  	// Fazer Post
  		var link = 'http://localhost:3000/add';
       
        this.http.post(link, frm_post, options)
        .subscribe(data => {
           this.data = data;
         console.log(data);
        }, error => {
            console.log(error);
        });
  }
 

}
