import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhiComponent } from './zhi.component';

describe('ZhiComponent', () => {
  let component: ZhiComponent;
  let fixture: ComponentFixture<ZhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
