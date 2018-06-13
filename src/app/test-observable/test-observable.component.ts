import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  monObservable: Observable<any>

  constructor() {
    this.monObservable = new Observable(
      (observable) => {
        let i = 0;
        function timer () {
        observable.next(i);
          if (i<5) { window.setTimeout(() => timer(), 1000) } else {observable.complete() }
          i++;
        }
        timer();
      }
    )
   }

  ngOnInit() {
  }

  testObservable() {
    this.monObservable.subscribe({
      next: (value) => console.log('Valeur reçue : ' + value),
      complete: () => console.log('Terminé.')
    })
  }

}
