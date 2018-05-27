import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperMainComponent } from './shopper-main.component';

describe('ShopperMainComponent', () => {
  let component: ShopperMainComponent;
  let fixture: ComponentFixture<ShopperMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopperMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopperMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
