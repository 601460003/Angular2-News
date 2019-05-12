import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhangComponent } from './zhang.component';

describe('ZhangComponent', () => {
  let component: ZhangComponent;
  let fixture: ComponentFixture<ZhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
