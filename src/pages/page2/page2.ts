import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TesteService} from '../../providers/teste-service';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  providers: [TesteService]
})

export class Page2 {
  users: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private testeService: TesteService) {
   this.testeService.load()
    .then(data => {
      this.users = data;
      console.log(data);
    }) ;
    
  }

}
