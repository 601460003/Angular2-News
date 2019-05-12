import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeiComponent } from './wei.component';

describe('WeiComponent', () => {
  let component: WeiComponent;
  let fixture: ComponentFixture<WeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
