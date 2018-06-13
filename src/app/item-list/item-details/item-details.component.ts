import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Recommandé mais non requis
import { WineItem } from './../../assets/wineItem.model';
import { ISelectEvent } from './../item-list/item-list.component';

import { TestService } from './../../test.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: WineItem;
  @Input('index') itemIndex: number;
  @Output('itemSelected') itemSel: EventEmitter<any>;

  constructor( private serv: TestService ) {
    this.itemSel = new EventEmitter<ISelectEvent>()
  }

  ngOnInit() {
  }

  addToSelectedItems(arg: 'view' | 'buy'): void {
    this.itemSel.emit({
      action: arg,
      toAdd: true,
      item: this.item
    })
    this.serv.test1(this.item.name)
  }

}
