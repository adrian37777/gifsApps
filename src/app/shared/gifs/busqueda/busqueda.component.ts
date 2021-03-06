import { Component, ElementRef, ViewChild } from "@angular/core";
import { gifsService } from "../services/gifsService.service";

@Component({
    selector:'app-busqueda',
    templateUrl:'./busqueda.component.html'
})


export class busquedaComponent{

    @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

    constructor(private gifsService:gifsService){}

    buscar(){

     const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length===0) return;

     this.gifsService.buscarGif(valor);

     this.txtBuscar.nativeElement.value= ''

    }


}