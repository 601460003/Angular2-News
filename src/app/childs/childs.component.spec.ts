import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsComponent } from './childs.component';

describe('ChildsComponent', () => {
  let component: ChildsComponent;
  let fixture: ComponentFixture<ChildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
