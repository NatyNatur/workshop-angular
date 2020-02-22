import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() inCard: any;
  dataCard: any;

  constructor() {
    console.log('card constructor')
   }

  ngOnInit(): void {
    console.log('card iniciado')
  }

  ngOnChanges(): void {
    console.log('card ha cambiado');
    this.dataCard = this.inCard;
  }


}
