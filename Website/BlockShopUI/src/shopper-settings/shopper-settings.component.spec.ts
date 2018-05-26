import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperSettingsComponent } from './shopper-settings.component';

describe('ShopperSettingsComponent', () => {
  let component: ShopperSettingsComponent;
  let fixture: ComponentFixture<ShopperSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopperSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopperSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
