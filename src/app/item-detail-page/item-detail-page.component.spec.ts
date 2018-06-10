import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineItemDetailComponent } from './item-detail-page.component';

describe('WineItemDetailComponent', () => {
  let component: WineItemDetailComponent;
  let fixture: ComponentFixture<WineItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
