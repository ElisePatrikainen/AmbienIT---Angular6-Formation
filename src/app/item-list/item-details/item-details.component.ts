import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Recommandé mais non requis
import { WineItem } from './../../assets/wineItem.model';
import { ISelectEvent } from './../item-list/item-list.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: WineItem;
  @Input('index') itemIndex: number;
  @Output('itemSelected') itemSel: EventEmitter<any>;

  constructor() {
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
  }

}
