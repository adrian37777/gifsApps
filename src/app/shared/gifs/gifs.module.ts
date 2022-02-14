import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { busquedaComponent } from './busqueda/busqueda.component';
import { gifsPageComponent } from './gifsPage/gifsPage.component';
import { resultadoComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [gifsPageComponent,busquedaComponent,resultadoComponent],
  exports: [gifsPageComponent],
  imports: [CommonModule],
})
export class gifsModule {}
