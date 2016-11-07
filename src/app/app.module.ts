import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Login } from '../pages/login/login';
import { Ponto } from '../pages/ponto/ponto';
import { Usuario } from '../pages/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Login,
    Ponto,
    Usuario
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Login,
    Ponto,
    Usuario
  ],
  providers: []
})
export class AppModule {}
