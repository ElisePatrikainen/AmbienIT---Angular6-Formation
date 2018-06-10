import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { mockWineItemsList } from './../assets/wineItems.mockApi';

@Component({
  // selector: 'app-item-detail-page',
  templateUrl: './item-detail-page.component.html',
  styleUrls: ['./item-detail-page.component.css'],
  animations: [
    trigger('toBeAnim', [
      state('selected', style({ opacity: 1})),
      state('void', style({ opacity: 0})),
      transition('void <=> selected', animate('500ms ease-out'))
      ])
    ]
})
export class ItemDetailPageComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  item: any;
  itemFullList: any = mockWineItemsList;
  ngOnInit() {
    let param = this.activeRoute.snapshot.paramMap.get('name');
    this.item = mockWineItemsList.find(el => el.name === param)
  }

}
