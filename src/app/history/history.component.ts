import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnChanges {

  dataHistory:any = [];

  constructor( private connect:ConnectService) { 
    this.connect._onDataHistory.subscribe(res => {
      console.log('HistoryComponent -> conect ->', res)
      this.setHistoryList(res);
    })
  }

  setHistoryList(item: any) {
    this.dataHistory.push(item)
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  
  }
}
