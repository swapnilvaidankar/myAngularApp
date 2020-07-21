import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTreeLangComponent } from './pg-tree-lang.component';

describe('PgTreeLangComponent', () => {
  let component: PgTreeLangComponent;
  let fixture: ComponentFixture<PgTreeLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgTreeLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgTreeLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
