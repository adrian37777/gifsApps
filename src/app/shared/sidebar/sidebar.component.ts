import { Component } from "@angular/core";
import { gifsService } from "../gifs/services/gifsService.service";

@Component({

    selector:'app-sidebar',
    templateUrl:'./sidebar.component.html',
    styleUrls:['./sidebar.component.css']

})

export class sidebarComponent{

  
    get historial(){

       
        return this.gifsService.historial; 
    }

     buscar(item:string){

        this.gifsService.buscarGif(item);

    
    }

    constructor(private gifsService:gifsService){      
      
   
    }



  
}

