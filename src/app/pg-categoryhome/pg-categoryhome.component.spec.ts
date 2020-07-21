import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCategoryhomeComponent } from './pg-categoryhome.component';

describe('PgCategoryhomeComponent', () => {
  let component: PgCategoryhomeComponent;
  let fixture: ComponentFixture<PgCategoryhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgCategoryhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgCategoryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
