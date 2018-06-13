import { Component, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { mockWineItemsList } from './../../assets/wineItems.mockApi';
// Recommandé mais non requis
import { WineItem } from './../../assets/wineItem.model';
import * as localForage from 'localforage';

import { ItemSelectionComponent } from './../item-selection/item-selection.component'

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

  //
  

  // 

  test3 = { blah : '1'};
  test4 = this.test3;
  test = {}


  currentStyle = {}
  set color(value) {
    this.currentStyle['color'] = value
  }
  set border(value) {
    this.currentStyle['border'] = value
  }
  set fontSize(value) {
    this.currentStyle["font-size"] = value
  }




  
  //

  @ViewChildren(ItemSelectionComponent) ItemS: QueryList<ItemSelectionComponent>;
  testViewC: any;

  @ViewChild(ItemSelectionComponent) 
  set ItemS2(child:ItemSelectionComponent) {
    this.testViewC = child.test
  }
  @ViewChild(ItemSelectionComponent) ItemS3:ItemSelectionComponent;
  testViewC2: any = this.ItemS3;

  blahTest = "22";
  blahTest2 = this.blahTest;

  set prop1(value) {
    this.prop2 = value + 3
  };
  prop2: any;
  prop3: any = this.prop1 + 3;

  testGet2: any = {
    prop1: 1,
    get prop2() {
      return this.prop1 + 2
    },
    prop3: this.prop1 + 2
  }
  constructor() { 
    this.color = "blue";
    this.prop1 = 1;
   }

  ngOnInit() {

    localForage.getItem<WineItem[]>('viewedItems')
      .then((value) => this['viewedItems'] = value)
      .catch((err) => console.log(err))

    localForage.getItem<WineItem[]>('toBuyItems')
      .then((value) => this['toBuyItems'] = value)
      .catch((err) => console.log(err))

      console.log(this.prop1);
      console.log(this.prop2);
      console.log(this.prop3);
  }

  ngAfterViewInit() {
    console.log(this.testGet2.prop2)
  }



  testProp() {
    this.color = "red"; 
    this.prop1 = 3;
    console.log(this.prop2);  // 6 (actualisée)
    console.log(this.prop3);  // NaN
  }

  changeAStyle(color, fontSize) {
    this.color = color;
    this.border = '1px solid';
    this.fontSize = fontSize;
    console.log(this.currentStyle) // actualisé
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
