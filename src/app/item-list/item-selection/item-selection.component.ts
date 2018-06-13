import { Component, OnInit, Input } from '@angular/core';
import { WineItem } from './../../assets/wineItem.model';

import { TestService } from './../../test.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.css']
})
export class ItemSelectionComponent implements OnInit {

  @Input() category: 'viewedItems' | 'toBuyItems';
  @Input('selectedItems') items;
  test: string = 'BLAH'

  testList: Observable<any>;

  constructor( private serv: TestService ) { 
    this.testList = new Observable(
      (obs) => {
        let i = 0
        function a(obs, i) {
          obs.next(i)
          i ++;
          if (i < 5) {
            window.setTimeout(() => a(obs, i), 1000)
          }
        }
        a(obs, i);
      }
    )

   }

  ngOnInit() {
  }

  testObs() {
    this.testList.subscribe({
      next: value => console.log('observé ' + value),
      complete: () => console.log('completed')
    })
  }

}
