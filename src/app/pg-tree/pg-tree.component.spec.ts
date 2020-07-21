import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTreeComponent } from './pg-tree.component';

describe('PgTreeComponent', () => {
  let component: PgTreeComponent;
  let fixture: ComponentFixture<PgTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
