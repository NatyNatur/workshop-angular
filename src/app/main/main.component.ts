import { Component } from "@angular/core";

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']

})

export class MainComponent{

    eventRes: any;

    // se inyectan los servicios a utilizar dentro del componente
    constructor() {

    }

    receptor(event:any) {
        // padre emite a los hijos
        this.eventRes = event;
    }
}