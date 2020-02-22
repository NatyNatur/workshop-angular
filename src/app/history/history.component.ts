import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnChanges {

  @Input() inHistory: any;
  dataHistory:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.inHistory) {
      this.dataHistory.push(this.inHistory)
    }
  }
}
