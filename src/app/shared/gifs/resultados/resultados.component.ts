import { Component } from '@angular/core';
import { gifsService } from '../services/gifsService.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class resultadoComponent {

  get resultados(){

    return this.gifservice.resultados;

  }

  constructor(private gifservice:gifsService){}


}
