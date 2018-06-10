import { Component, OnInit, Input } from '@angular/core';
import { WineItem } from './../../assets/wineItem.model';

@Component({
  selector: 'app-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.css']
})
export class ItemSelectionComponent implements OnInit {

  @Input() category: 'viewedItems' | 'toBuyItems';
  @Input('selectedItems') items;

  constructor() { }

  ngOnInit() {
  }

}
