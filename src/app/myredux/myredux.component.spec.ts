import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreduxComponent } from './myredux.component';

describe('MyreduxComponent', () => {
  let component: MyreduxComponent;
  let fixture: ComponentFixture<MyreduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
