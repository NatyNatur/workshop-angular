import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendService} from '../services/backend.service';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'getinfo',
  templateUrl: './getinfo.component.html',
  styleUrls: ['./getinfo.component.scss']
})
export class GetinfoComponent implements OnInit {

  url: any = 'https://thesimpsonsquoteapi.glitch.me/quotes';
  //arrayInfo: any = '';
  @Output() outGetInfo = new EventEmitter();

  // se inserta el servicio
  constructor( private backend:BackendService, private connect:ConnectService) { }

  ngOnInit(): void {
  }

  // llamada mediante el botón
  getData() {
    console.log('consultar');
    // se ocupa el servicio
    this.backend.exeGet(this.url).subscribe(res => {
      console.log('res ->', res);
      //this.arrayInfo = res;
      // guardo en el output lo que deseo emitir a los otros componentes
      this.outGetInfo.emit(res[0]);

      // mediante el servicio se crea el historial
      this.connect.setHistory(res[0]);
    })
  }
}
