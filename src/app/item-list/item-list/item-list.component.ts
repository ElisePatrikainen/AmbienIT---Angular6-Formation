import { Component, OnInit } from '@angular/core';
import { mockWineItemsList } from './../../assets/wineItems.mockApi';
// Recommandé mais non requis
import { WineItem } from './../../assets/wineItem.model';
import * as localForage from 'localforage';

export interface ISelectEvent {
  action: 'view' | 'buy', 
  toAdd: boolean; 
  item: WineItem
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: WineItem[] = mockWineItemsList;
  viewedItems: WineItem[] = [];
  toBuyItems: WineItem[] = [];

  constructor() { }

  ngOnInit() {

    localForage.getItem<WineItem[]>('viewedItems')
      .then((value) => this['viewedItems'] = value)
      .catch((err) => console.log(err))

    localForage.getItem<WineItem[]>('toBuyItems')
      .then((value) => this['toBuyItems'] = value)
      .catch((err) => console.log(err))

  }

  updateSelectedList(event: ISelectEvent) {

    let category: string = event.action === 'view' ? 'viewedItems' : 'toBuyItems';
    
    if (event.toAdd && !this[category].includes(event.item)) 
    { 
      this[category].unshift(event.item);
      if (this[category].length > 5) { this[category].pop() };
    } else if (!event.toAdd) 
    {
      this[category] = this[category].filter((item) => item !== event.item)
    }

    localForage.setItem(category, this[category]).catch((err) => console.log(err));

  }

}
