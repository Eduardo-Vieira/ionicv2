import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsuarioService } from '../../providers/usuario-service';
/*
  Generated class for the Usuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
  providers:[ UsuarioService ]
})
export class Usuario {

  frmdata: any;

  constructor(public navCtrl: NavController, public usuarioservice: UsuarioService) {
  	// Estrutura do formulário
    this.frmdata = {};
  }

  doForm() {
    //console.log(this.frmdata);
    this.usuarioservice.enviar(JSON.stringify({tx_nome: this.frmdata.tx_nome,
							           tx_login: this.frmdata.tx_login,
									   tx_senha: this.frmdata.tx_senha,
									   id_permissao: this.frmdata.id_permissao,
									   tx_email: this.frmdata.tx_email
							         })
  								);
  }
  
  ionViewDidLoad() {
    console.log('Hello Usuario Page');
  }

}
