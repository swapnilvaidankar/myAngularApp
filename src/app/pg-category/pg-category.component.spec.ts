import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCategoryComponent } from './pg-category.component';

describe('PgCategoryComponent', () => {
  let component: PgCategoryComponent;
  let fixture: ComponentFixture<PgCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
