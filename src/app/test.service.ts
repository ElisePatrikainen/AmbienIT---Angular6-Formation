import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testList: any = [];

  constructor() { }
  test1(arg) {
    this.testList.push(arg)
  }

  
}
