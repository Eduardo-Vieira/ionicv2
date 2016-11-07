import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PontoService} from '../../providers/ponto-service';
/*
  Generated class for the Ponto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ponto',
  templateUrl: 'ponto.html',
  providers:[PontoService]
})

export class Ponto {
  dados: any[]=[];
  itens: any[]=[];
  
  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pontoService: PontoService) {
    // abrir Rest
    this.pontoService.load()
    .then(data => {

      this.dados.push({
        Matricula:data.id,
        nome:data.nome       
      });

        var day_of_week = new Array('Dom','Seg','Ter','Qua','Qui','Sex','Sab');
        var month_of_year = new Array('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');
         
        var Calendar = new Date();
         
        var year =  data.ano; //Calendar.getFullYear();  // Retorna o ano
        var month = parseInt(data.mes)-1; //Calendar.getMonth();    // Retorna mes (0-11)
        var today = Calendar.getDate();     // Retorna dias (1-31)
        var weekday = Calendar.getDay();    // Retorna dias (1-31)
         
        var DAYS_OF_WEEK = 7;    // "constant" para o numero de dias na semana
        var DAYS_OF_MONTH = 31;    // "constant" para o numero de dias no mes
        var cal;    // Usado para imprimir na tela
         
        Calendar.setDate(1);    // Comecar o calendario no dia '1'
        Calendar.setMonth(month);    // Comecar o calendario com o mes atual
         
         
        var TR_start = '<TR>';
        var TR_end = '</TR>';
        var highlight_start = '<TD><TABLE><TR><TD><CENTER>';
        var highlight_end   = '</CENTER></TD></TR></TABLE>';
        var TD_start = '<TD class="row"><CENTER>';
        var TD_end = '</CENTER></TD>';
         
        cal =  '<TABLE><TR><TD>';
        cal += '<TABLE>' + TR_start;
        cal += '<TD class="titulo" COLSPAN="' + DAYS_OF_WEEK + '"><CENTER><B>';
        cal += month_of_year[month]  + '   ' + year + '</B>' + TD_end + TR_end;
        cal += TR_start;
         
        for(var index=0; index < DAYS_OF_WEEK; index++)
        {
         
        if(weekday == index)
         cal += TD_start + '<span class="dias">' + day_of_week[index] + '</span>' + TD_end;
        else
        cal += TD_start + '<span class="dias">'+ day_of_week[index] +'</span>'+ TD_end;
        }

        cal += TD_end + TR_end;
        cal += TR_start;
         
        for(index=0; index < Calendar.getDay(); index++)
        cal += TD_start + '  ' + TD_end;
         
        for(index=0; index < DAYS_OF_MONTH; index++)
        {
        if( Calendar.getDate() > index )
        {
          var week_day = Calendar.getDay();
          if(week_day == 0)
          cal += TR_start;
          if(week_day != DAYS_OF_WEEK)
          {
          var day  = Calendar.getDate();
          if( today==Calendar.getDate() )
          cal += highlight_start + day + highlight_end + TD_end;
          else
          cal += TD_start + day + TD_end;
          }
          if(week_day == DAYS_OF_WEEK)
          cal += TR_end;
          }
          Calendar.setDate(Calendar.getDate()+1);
        }
        cal += '</TD></TR></TABLE></TABLE>';
         
        //  MOSTRAR CALENDARIO
        this.dataContainer.nativeElement.innerHTML = cal;
        //  End -->
    
    }) ;
  }

 
}
