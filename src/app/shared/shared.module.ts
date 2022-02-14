import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { sidebarComponent } from "./sidebar/sidebar.component";

@NgModule({

    declarations:[sidebarComponent],
    exports:[sidebarComponent], // exportar fuera del modulo
    imports:[CommonModule]


})

export class sharedModule{}