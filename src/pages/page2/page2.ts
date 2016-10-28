import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  posts: any;

  // Dados do usuário
  Matricula: string;
  Mes: string;
  Ano: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    // this.http = http;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    
    this.Matricula = localStorage.getItem('Matricula');
    this.Mes = localStorage.getItem('Mes');
    this.Ano = localStorage.getItem('Ano');

    var url = 'http://daraa.manaus.am.gov.br/ponto/api/consultar/'+  this.Matricula +'/'+ this.Mes +'/'+this.Ano;
    this.http.get(url)
    .map(res => res.json())
     .subscribe(data => {  localStorage.setItem('dados',data);
    //   this.items = [];
    //   for (let i = 1; i < data.length; i++) {
    //     this.items.push({
    //       title:  data(i).BATIDA,
    //       note: 'This is item #' + i,
    //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //     });
    //   };
     });
    console.log(localStorage.getItem('dados'));

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < this.posts.length; i++) {
    //   this.items.push({
    //     title:  this.posts(i).BATIDA,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }

  }
  

  
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }
}
